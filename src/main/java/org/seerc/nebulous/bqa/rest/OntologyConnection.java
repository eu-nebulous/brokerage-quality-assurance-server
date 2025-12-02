package org.seerc.nebulous.bqa.rest;

import java.net.URI;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.seerc.nebulous.bqa.components.ComparisonOperator;
import org.seerc.nebulous.bqa.components.Constraint;
import org.seerc.nebulous.bqa.components.Policy;
import org.seerc.nebulous.bqa.components.RecurseConstraint;
import org.seerc.nebulous.bqa.components.SimpleConstraint;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;


public class OntologyConnection{
	
	private static OntologyConnection singleton = null;
	
	private WebClient client;

	private static Map<String, String> hasPolicy;
	private OntologyConnection(String host) {
		System.out.println(host);
		client = WebClient.create(host);
		hasPolicy = new HashMap<String, String>();
		System.out.println(client.toString());
	}
	
	public static OntologyConnection getInstance(String host) {
		if(singleton == null)
			singleton = new OntologyConnection(host);
		
		
		return singleton;
	}
	
	public static OntologyConnection getInstance() {
		return singleton;
	}
	

	public boolean hasPolicy(String uuid) {
		if(hasPolicy.containsValue(uuid))
			return false;
		return true;
	}
	
	public String getCorrelationId(String uuid) {
		return hasPolicy.get(uuid);
	}
	public void removePolicy(String uuid) {
		hasPolicy.remove(uuid);
	}
	public static String addPolicy(String uuid, String correlationId) {
		return hasPolicy.put(uuid, correlationId);

	}

	public boolean createPolicy(@RequestBody Policy policy) {
		
		String policyName = "neb:POLICY_" + policy.getAsset();
		createIndividual(policyName, "odrl:Set");
		
		createObjectProperty("odrl:hasPolicy", "neb:SLA_" + policy.getAsset(), policyName);
		
		List<Constraint> constraints = policy.getRules();
		
		for(int i = 0; i < constraints.size(); i++) {
			
			String ruleName = policyName + "_RULE_" + i;
					
			createIndividual(ruleName, "odrl:Duty");
			createObjectProperty("odrl:obligation", policyName, ruleName);
			createObjectProperty("odrl:partOf", ruleName, policyName);

			
			RecurseConstraint rc = new RecurseConstraint(ruleName + "_CONSTRAINT", policy.getAsset());
			String con = rc.buildConstraint(constraints.get(i));
			createObjectProperty("odrl:partOf", con, ruleName);
			createObjectProperty("odrl:constraint", ruleName, con);
		}
		return true;
	}
	
	private String normalizeOperator(String operator) {
		String operatorCanonical = null;
		if(operator == null|| operator.equals(""))
			return null;
		switch (operator) {
		case "GREATER_EQUAL_THAN":
			operatorCanonical = ">=";
			break;
		case "GREATER_THAN":
			operatorCanonical = ">";
			break;
		case "LESS_EQUAL_THAN":
			operatorCanonical = "<=";
			break;
		case "LESS_THAN":
			operatorCanonical = "<";
			break;
		case "EQUALS":
			operatorCanonical = "=";
			break;
		case "NOT_EQUALS":
			operatorCanonical = "!=";
			break;
		case "gteq":
			operatorCanonical = ">=";
			break;
		case "gt":
			operatorCanonical = ">";
			break;
		case "lteq":
			operatorCanonical = "<=";
			break;
		case "lt":
			operatorCanonical = "<";
			break;
		case "eq":
			operatorCanonical = "=";
			break;
		case "neq":
			operatorCanonical = "!=";
			break;

		}
		return operatorCanonical;
	}
	
	private String constructDataPropertyQuery(String dataProperty, String operator, DataPropertyValuesResult v) {
		
		String output = "";
		final String canonOperator = normalizeOperator(operator);
//		System.out.println("DATA PROPERTY VALUE " + v);
//		System.out.println("OPERATOR " + operator + " " + canonOperator);

		if(v.getDatatype().equals("double") || v.getDatatype().equals("integer") || v.getDatatype().equals("decimal")) {
			if(canonOperator.equals("="))
				output += "(" + dataProperty + " value " + v.getValue()+")";
			else if(canonOperator.equals("!="))
				output += "not (" + dataProperty + " value " + v.getValue()+")";
			else {
				output += "((" + dataProperty + " some xsd:decimal [" + canonOperator + " " + v.getValue() + "]) or (" + dataProperty + " some xsd:double [" + canonOperator + " \"" + v.getValue() + "\"^^xsd:double]))";
//				System.out.println("CORRECT");
			}
		} else {
			final String tempOut = "(" + dataProperty + " value \"" + v.getValue() + "\"^^" + v.getDatatype() +")";
			if(canonOperator.equals("!="))
				output += "(not " + tempOut + ")";
			else
				output += tempOut;
		}
//		System.out.println(output);
		return output;
	}
	private String constructConstraintQuery(String constraintName) {
    	List<String> superclasses = getSuperClasses(encode("{" + constraintName + "}"));
    	String result= "";

    	if(superclasses.contains("LogicalConstraint")){
    		List<String> operands = getInstances(encode("inverse owlqConstraint value " + constraintName));
    		String logicalOperator = getInstances(encode("inverse logicalOperator value " + constraintName)).get(0).toLowerCase();
    		int counter = 0;
    		
    		for(var operand: operands) {
    			result +=  constructConstraintQuery(operand);
    			
    			if(counter != operands.size() - 1)
    				result += " " + logicalOperator + " ";  				
    			counter++;
    		}
    		
    	} else if(superclasses.contains("SimpleConstraint")) {
    		String leftOperand = getInstances(encode("inverse leftOperand value " + constraintName)).get(0);
    		String operator = getInstances(encode("inverse operator value " + constraintName)).get(0);
    		String canonicalOperator = normalizeOperator(operator);
//    		Object rightOperand = getDataProperty(constraintName,  "neb:rightArgument").get(0);
   		
//    		System.out.println(constraintName);
    		DataPropertyValuesResult rightOperand =  getDataPropertyValues("neb:" + constraintName, "neb:secondOperand").get(0);
    		
    		if(rightOperand.getDatatype().equals("ERROR"))
    			rightOperand =  getDataPropertyValues("neb:" + constraintName, "odrl:rightOperand").get(0);
    		    	
    		if(dataPropertyExists("owlq:" + leftOperand) || dataPropertyExists("neb:" + leftOperand))
    			result += constructDataPropertyQuery(leftOperand, operator, rightOperand);
    	    		
    		else if(leftOperand.toLowerCase().equals("class") && classExists("owlq:" + rightOperand.getValue()))
    			result += rightOperand.getValue() + " and "; 
    	
    		else {
	    		result += "leftOperand value " + leftOperand + " and " ;
	    		
	    		if(canonicalOperator.contains(">"))
	    			result += "nebOperator some {gteq, gt, GREATER_EQUAL_THAN, GREATER_THAN} and ";
	    		else if(canonicalOperator.contains("<"))
	    			result += "nebOperator some {lteq, lt, LESS_EQUAL_THAN, LESS_THAN} and ";
	    		else 
	    			result += "nebOperator value " + operator + " and ";
	
	    		result += constructDataPropertyQuery("rightOperand", operator, rightOperand);
    		}
    	}    	
    	
    	return "(" + result + ")";	
	}
	
	public boolean validate(String assetName ) {
		long startTime = System.currentTimeMillis();
		List<String> rules = getInstances(encode("inverse obligation some (inverse hasPolicy value " + assetName + ")"));
		List<String> sls = getInstances(encode("inverse serviceLevel value " + assetName));
		boolean flag = false;
//		Map<String, List<String>> output = new HashMap<String, List<String>>();
		String mainQuery = "";
		String auxQuery = "";
		for(int i = 0; i < sls.size(); i++) {
			String sl = sls.get(i);
			mainQuery += constructConstraintQuery(sl);
			
			if(i != sls.size() - 1)
				mainQuery += " and ";
			String transSettle;
			try {
				transSettle = getInstances(encode("firstSL value " + sl)).get(0);
				auxQuery += " and " + constructDataPropertyQuery("violationThreshold", "lteq", getDataPropertyValues(transSettle, "owlq:violationThreshold").get(0));

			} catch (Exception e) {
				transSettle = getInstances("Settlement and partOf value " + assetName).get(0);
				auxQuery += " and " + constructDataPropertyQuery("settlementCount", "lteq", getDataPropertyValues(transSettle, "owlq:settlementCount").get(0));
			}
			
			auxQuery += " and " + constructDataPropertyQuery("evaluationPeriod", "eq", getDataPropertyValues(transSettle, "owlq:evaluationPeriod").get(0));

		}
		long queryConstructionTime = System.currentTimeMillis();
//		System.out.println(mainQuery + auxQuery);
		createClassExpressionClass("neb:" + assetName + "_EXPRESSION", mainQuery + auxQuery);
		
//		
		for(String rule : rules) {
//			System.out.println("IN IN IN");
			String constraint = getInstances("inverse constraint value  " + rule).get(0);
//			output.put(rule,getInstances(encode(constructNegatedConstraintQuery(constraint))));
			
			String constrQuery = constructConstraintQuery(constraint) + "or ((nebOperator some Thing) and (leftOperand some Thing)  and (rightOperand some rdfs:Literal))";	
			System.out.println(constrQuery);
			createClassExpressionClass("neb:" + rule + "_EXPRESSION", (constrQuery));
			
			List <String> superClasses = getSuperClasses(assetName + "_EXPRESSION");
//			List<String> subclasses = getSubClasses(encode( rule + "_EXPRESSION"));
//			List<String> equivalentClasses = getEquivalentClasses(encode(rule + "_EXPRESSION"));
//			
//			System.out.println("RULE: " + rule);
			flag = superClasses.contains(rule	 + "_EXPRESSION");

			System.out.println("superclass:" + superClasses + "\n");
//			System.out.println("subclass: " + subclasses + "\n");
//			System.out.println("equivalent: " + equivalentClasses + "\n");

		}		

//			List <String> superClasses = getSuperClasses(encode("SL_EXPRESSION"));
//			List<String> subclasses = getSubClasses(encode("SL_EXPRESSION"));
//			List<String> equivalentClasses = getEquivalentClasses(encode("SL_EXPRESSION"));
//			
//			System.out.println("superclass:" + superClasses + "\n");
//			System.out.println("subclass: " + subclasses + "\n");
//			System.out.println("equivalent: " + equivalentClasses + "\n");
//		
		long endTime = System.currentTimeMillis();
		System.out.println("Time taken to construct: " + (queryConstructionTime - startTime) + " ms");
		System.out.println("Time taken to validate: " + (endTime - queryConstructionTime) + " ms");
		System.out.println("Time taken for everything: " + (endTime - startTime) + " ms") ;
		return flag;
	}
	public void getSimpleConstraintBqa(SimpleConstraint constraint, String constraintName) {
		constraint.setFirstArgument(getInstances("inverse%20leftOperand%20value%20" + constraintName).get(0));
		Object secArg = getDataProperty(constraintName, "odrl:rightOperand").get(0); //FIX 
		if(secArg instanceof String)
			constraint.setSecondArgument(((String) secArg).split("\"")[1]);
		else
			constraint.setSecondArgument(secArg);
		constraint.setOperator(ComparisonOperator.valueOf((String) getInstances("inverse%20operator%20value%20" + constraintName).get(0)));
	}
	
	public void getSimpleConstraintSla(SimpleConstraint constraint, String constraintName) {
		constraint.setFirstArgument(getInstances("inverse%20firstArgument%20value%20" + constraintName).get(0));
		Object secArg = getDataProperty(constraintName, "owlq:secondArgument").get(0); //FIX 
		if(secArg instanceof String)
			constraint.setSecondArgument(((String) secArg).split("\"")[1]);
		else
			constraint.setSecondArgument(secArg);
		constraint.setOperator(ComparisonOperator.valueOf((String) getInstances("inverse%20operator%20value%20" + constraintName).get(0)));
	}
	public String createIndividual(String individualURI, String classURI) {
		return client.post().uri(URI.create("/create/individual"))
				.accept(MediaType.APPLICATION_JSON)
				.contentType(MediaType.APPLICATION_JSON)
				.body(BodyInserters.fromValue(new CreateIndividualPostBody (individualURI, classURI)))
			    .retrieve().bodyToMono(String.class).block();
	}
	
	public String createIndividualExpression(String individualURI, String classURI) {
		return client.post().uri(URI.create("/create/individual/expression"))
				.accept(MediaType.APPLICATION_JSON)
				.contentType(MediaType.APPLICATION_JSON)
				.body(BodyInserters.fromValue(new CreateIndividualPostBody (individualURI, classURI)))
			    .retrieve().bodyToMono(String.class).block();
	}
	
	public String createObjectProperty(String objectPropertyURI, String domainURI, String rangeURI) {
		return client.post().uri(URI.create("/create/objectProperty"))
				.accept(MediaType.APPLICATION_JSON)
				.contentType(MediaType.APPLICATION_JSON)
				.body(BodyInserters.fromValue(new CreateObjectPropertyPostBody(objectPropertyURI, domainURI, rangeURI)))
			    .retrieve().bodyToMono(String.class).block();
	}
	
	public String createDataProperty(String dataPropertyURI, String domainURI, Object value, String type) {
		return client.post().uri(URI.create("/create/dataProperty"))
				.accept(MediaType.APPLICATION_JSON)
				.contentType(MediaType.APPLICATION_JSON)
				.body(BodyInserters.fromValue(new CreateDataPropertyPostBody(dataPropertyURI, domainURI, value, type)))
			    .retrieve().bodyToMono(String.class).block();
	}
	
	public int countInstances(String dlQuery) {
		return client.get().uri(URI.create("/countInstances?dlQuery=" + encode(dlQuery)))
					.retrieve().bodyToMono(Integer.class).block();
	}
	public String createClassExpressionClass(String classURI, String classExpression) {
		return client.post().uri(URI.create("/create/class/expression"))
				.accept(MediaType.APPLICATION_JSON)
				.contentType(MediaType.APPLICATION_JSON)
				.body(BodyInserters.fromValue(new CreateClassExpressionClassPostBody(classURI, classExpression)))
			    .retrieve().bodyToMono(String.class).block();
	}
	public List<String> getInstances(String dlQuery) {
		return new ArrayList<String>(Arrays.asList(client.get().uri(URI.create("/get/instances?dlQuery=" + encode(dlQuery)))
				.retrieve().bodyToMono(String[].class).block()));
	}
	public boolean dataPropertyExists(String dataProperty) {
		return client.get().uri(URI.create("/exists/dataProperty?dataProperty=" + dataProperty))
				.retrieve().bodyToMono(Boolean.class).block();
	}
	public boolean classExists(String cls) {
		return client.get().uri(URI.create("/exists/class?class=" + cls))
				.retrieve().bodyToMono(Boolean.class).block();
	}
	
	
	public List<String> getSuperClasses(String dlQuery) {
		return new ArrayList<String>(Arrays.asList(client.get().uri(URI.create("/get/superclasses?dlQuery=" + encode(dlQuery) ))
				.retrieve().bodyToMono(String[].class).block()));
	}
	public List<String> getSubClasses(String dlQuery) {
		return new ArrayList<String>(Arrays.asList(client.get().uri(URI.create("/get/subclasses?dlQuery=" + dlQuery ))
				.retrieve().bodyToMono(String[].class).block()));
	}
	public List<String> getEquivalentClasses(String dlQuery) {
		return new ArrayList<String>(Arrays.asList(client.get().uri(URI.create("/get/equivalentClasses?dlQuery=" + dlQuery ))
				.retrieve().bodyToMono(String[].class).block()));
	}
	
	public List<Object> getDataProperty(String individualName, String dataProperty) {
		return Arrays.asList(client.get().uri(URI.create("/get/dataProperty?individualName=" + individualName + "&dataProperty=" + dataProperty))
				.retrieve().bodyToMono(Object[].class).block());
	}
	public List<DataPropertyValuesResult> getDataPropertyValues(String individualName, String dataProperty) {
		return Arrays.asList(client.get().uri(URI.create("/get/dataProperty/values?individualName=" + encode(individualName) + "&dataProperty=" + encode(dataProperty)))
				.retrieve().bodyToMono(DataPropertyValuesResult[].class).block());
	}
	private String encode(String query) {
		return URLEncoder.encode(query, StandardCharsets.UTF_8);
	}
	public void deleteIndividual(String individualName) {
		client.delete().uri(URI.create("/delete/individual?individualName=" + individualName))
			.accept(MediaType.APPLICATION_JSON)
		    .retrieve().bodyToMono(String.class).block();
	}
}
