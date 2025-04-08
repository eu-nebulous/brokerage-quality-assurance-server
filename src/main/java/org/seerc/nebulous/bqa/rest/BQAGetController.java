package org.seerc.nebulous.bqa.rest;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.seerc.nebulous.bqa.components.Policy;

import org.seerc.nebulous.bqa.components.SimpleConstraint;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class BQAGetController {
	private OntologyConnection ontology = OntologyConnection.getInstance();
//	private SLAConnection slaGenerator = SLAConnection.getInstance();
	
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
		default:

		}
		return operatorCanonical;
	}
	
	
	
//	@GetMapping("get/policy")
//	public Policy getPolicy(@RequestParam("assetName") String assetName) {
//		Policy res = new Policy();
//		res.setAsset(assetName);
//		ontology.getInstances(encode("inverse obligation some (inverse hasPolicy value " + assetName + ")")).forEach(rule ->{
//			SimpleConstraint x = new SimpleConstraint();
//			ontology.getSimpleConstraintBqa(x, ontology.getInstances(encode("inverse constraint value " + rule)).get(0));
//			res.addRule(x);
////			System.out.println(x);
//		});
//		
//
//		return res;
//	}
	private String constructDataPropertyQuery(String dataProperty, String operator, DataPropertyValuesResult v) {
		
		String output = "";
		final String canonOperator = normalizeOperator(operator);
	
		if(v.getDatatype().equals("double") || v.getDatatype().equals("integer"))
			if(canonOperator.equals("="))
				output += "(" + dataProperty + " value " + v.getValue()+")";
			else if(canonOperator.equals("!="))
				output += "not (" + dataProperty + " value " + v.getValue()+")";
			else
				output += "((" + dataProperty + " some xsd:decimal [" + canonOperator + " " + v.getValue() + "]) or (" + dataProperty + " some xsd:double [" + canonOperator + " \"" + v.getValue() + "\"^^xsd:double]))";
		else {
			final String tempOut = "(" + dataProperty + " value \"" + v.getValue() + "\"^^" + v.getDatatype() +")";
			if(canonOperator.equals("!="))
				output += "(not " + tempOut + ")";
			else
				output += tempOut;
		}
		
		return output;
	}
	
	
	@GetMapping("/test")
	private String constructConstraintQuery(String constraintName) {
    	List<String> superclasses = ontology.getSuperClasses(encode("{" + constraintName + "}"));
    	String result= "";

    	if(superclasses.contains("LogicalConstraint")){
    		List<String> operands = ontology.getInstances(encode("inverse owlqConstraint value " + constraintName));
    		String logicalOperator = ontology.getInstances(encode("inverse logicalOperator value " + constraintName)).get(0).toLowerCase();
    		int counter = 0;
    		
    		for(var operand: operands) {
    			result +=  constructConstraintQuery(operand);
    			
    			if(counter != operands.size() - 1)
    				result += " " + logicalOperator + " ";  				
    			counter++;
    		}
    		
    	} else if(superclasses.contains("SimpleConstraint")) {
    		String leftOperand = ontology.getInstances(encode("inverse leftOperand value " + constraintName)).get(0);
    		String operator = ontology.getInstances(encode("inverse operator value " + constraintName)).get(0);
    		String canonicalOperator = normalizeOperator(operator);
//    		Object rightOperand = ontology.getDataProperty(constraintName,  "neb:rightArgument").get(0);
   		
//    		System.out.println(constraintName);
    		DataPropertyValuesResult rightOperand =  ontology.getDataPropertyValues("neb:" + constraintName, "owlq:secondArgument").get(0);
    		
    		if(rightOperand.getDatatype().equals("ERROR"))
    			rightOperand =  ontology.getDataPropertyValues("neb:" + constraintName, "odrl:rightOperand").get(0);
    		    	
    		if(ontology.dataPropertyExists("owlq:" + leftOperand) || ontology.dataPropertyExists("neb:" + leftOperand))
    			result += constructDataPropertyQuery(leftOperand, operator, rightOperand);
    	    		
    		else if(leftOperand.toLowerCase().equals("class") && ontology.classExists("owlq:" + rightOperand.getValue()))
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
	
	@GetMapping("validate")
	public boolean validate(@RequestParam("assetName") String assetName ) {
		long startTime = System.currentTimeMillis();
		List<String> rules = ontology.getInstances(encode("inverse obligation some (inverse hasPolicy value " + assetName + ")"));
		List<String> sls = ontology.getInstances(encode("inverse serviceLevel value " + assetName));
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
				transSettle = ontology.getInstances(encode("firstSL value " + sl)).get(0);
				auxQuery += " and " + constructDataPropertyQuery("violationThreshold", "lteq", ontology.getDataPropertyValues(transSettle, "owlq:violationThreshold").get(0));

			} catch (Exception e) {
				transSettle = ontology.getInstances(encode("concernedSL value " + sl)).get(0);
				auxQuery += " and " + constructDataPropertyQuery("settlementCount", "lteq", ontology.getDataPropertyValues(transSettle, "owlq:settlementCount").get(0));
			}
			
			auxQuery += " and " + constructDataPropertyQuery("evaluationPeriod", "eq", ontology.getDataPropertyValues(transSettle, "owlq:evaluationPeriod").get(0));

		}
		long queryConstructionTime = System.currentTimeMillis();
		ontology.createClassExpressionClass( "neb:SL_EXPRESSION", mainQuery + auxQuery);
		
//		
		for(String rule : rules) {			
			String constraint = ontology.getInstances(encode("inverse constraint value  " + rule)).get(0);
//			output.put(rule,ontology.getInstances(encode(constructNegatedConstraintQuery(constraint))));
			ontology.createClassExpressionClass( "neb:" + rule + "_EXPRESSION", (constructConstraintQuery(constraint)));
			
			List <String> superClasses = ontology.getSuperClasses(encode(rule + "_EXPRESSION"));
//			List<String> subclasses = ontology.getSubClasses(encode( rule + "_EXPRESSION"));
//			List<String> equivalentClasses = ontology.getEquivalentClasses(encode(rule + "_EXPRESSION"));
//			
//			System.out.println("RULE: " + rule);
			flag = superClasses.contains("SL_EXPRESSION");

			System.out.println("superclass:" + superClasses + "\n");
//			System.out.println("subclass: " + subclasses + "\n");
//			System.out.println("equivalent: " + equivalentClasses + "\n");

		}		

//			List <String> superClasses = ontology.getSuperClasses(encode("SL_EXPRESSION"));
//			List<String> subclasses = ontology.getSubClasses(encode("SL_EXPRESSION"));
//			List<String> equivalentClasses = ontology.getEquivalentClasses(encode("SL_EXPRESSION"));
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
// 	private String constructDataPropertyQuery(String dataProperty, String operator, String value) {
//		String output = null;
//		boolean isNumber = false;
//		String operatorCanonical = normalizeOperator(operator);
//		
//		if (value.matches("[0-9]+\\.?[0-9]*")) {
//			isNumber = true;
//		}
//				
//		if(value.contains("^^")) {
//			String[] comps = value.split("\\^\\^");
//			if(operatorCanonical == null) {
//				output = "(" + dataProperty + " some " + comps[1] + ")";
//			}else if(operatorCanonical.equals("="))
//				output = "(" + dataProperty + " value " + value + ")";
//			else if(!operatorCanonical.equals("!="))
//				output = "(" + dataProperty  + " some " + comps[1] + "[ " + operatorCanonical + " " + comps[0].substring( 1, comps[0].length() - 1)+"])";
//			else if(!operatorCanonical.equals("!="))
//				output = "(" + dataProperty  + " some " + comps[1] + "[ < " + comps[0].substring( 1, comps[0].length() - 1)+ ", > " + comps[0].substring( 1, comps[0].length() - 1) + "])";
//			else
//				output = "(" + dataProperty  + " some " + comps[1] + ")";
//				
//			
//		}else if(operatorCanonical == null) {
//			if(isNumber) {
//				output = "((" + dataProperty + " some xsd:decimal) or " + "(" + dataProperty + " some xsd:double))";
//			}else 
//				output = "(" + dataProperty + " value \"" + value + "\")";
//		} else{
//			
//			if(isNumber) {
//				if(operatorCanonical.contains(">") || operatorCanonical.contains("<")) {
//					output = "((" + dataProperty + " some xsd:decimal[" + operatorCanonical + " " + value + "]) or " + "(" + dataProperty + " some xsd:double[" + operatorCanonical + " " + value + "]))";
//				} else if(operatorCanonical.equals("=")) {
//					output = "((" + dataProperty + " value \"" + value + "\"^^xsd:decimal) or (" + dataProperty + " value \"" + value + "\"^^xsd:double))";
//				} else if(operatorCanonical.equals("!="))
//					output = "((" + dataProperty + " some xsd:decimal[ < " + value + ", > " + value +"]) or " + "(" + dataProperty + " some xsd:double[ < " + value + ", > " + value +"]))";
//			}else 
//				output = "(" + dataProperty + " value \"" + value + "\")";
//		}
//				
//		return output;
//		
//	}
	
//	@GetMapping("validate")
//	public Map<String, List<String>> validate(@RequestParam("assetName") String assetName ) {
//		List<String> rules = ontology.getInstances(encode("inverse obligation some (inverse hasPolicy value " + assetName + ")"));
//		Map<String, List<String>> output = new HashMap<String, List<String>>();
//		List<String> allInstances = null;
//		List<String> conformingInstances = null;
//		for(String rule : rules) {			
//			String constraint = ontology.getInstances(encode("inverse constraint value  " + rule)).get(0);
//
//			conformingInstances = ontology.getInstances(encode(constuctComformingConstraintsDL(constraint) + " and partOf value " + assetName));
//			allInstances = ontology.getInstances(encode(constuctAllConstraintsDL(constraint) + " and partOf value " + assetName));
//
//			allInstances.removeAll(conformingInstances);
//			
//			if(allInstances.size() > 0) {
//				output.put(rule, allInstances);
//				System.out.println("Problem");
//			}else
//				System.out.println("All Good");
//		}
//		
//		return output;
//	}
//
//    public String constuctComformingConstraintsDL(String constraintName) {
//    	String result = "";
//    	List<String> superclasses = ontology.getSuperClasses(encode("{" + constraintName + "}"));
//    	
//    	if(superclasses.contains("LogicalConstraint")){
//    		List<String> operands = ontology.getInstances(encode("inverse operand value " + constraintName));
////    		String operator  = ontology.getObjectPropertiesInSignature("odrl:" + constraint).entrySet().iterator().next().getKey().asOWLObjectProperty().getIRI().getFragment();
//    		String operator = null;
//    		
//    		if(ontology.countInstances(encode("inverse and value " + constraintName)) >= 1)
//    			operator = "and";
//    		else 
//    			operator = "or";
//    		
//    		int counter = 0;
//    		result += "(";
//    		for(var operand: operands) {
//    			result +=  constuctComformingConstraintsDL(operand);
//    			
//    			if(counter != operands.size() - 1)
//    				result += " " + operator + " ";   				
//    			counter++;
//    		}
//    		result += ")";
//    	} else if(superclasses.contains("Constraint")) {
//    		
//    		String leftOperand = ontology.getInstances(encode("inverse leftOperand value " + constraintName)).get(0);
//    		String operator = ontology.getInstances(encode("inverse operator value " + constraintName)).get(0);
//    		String canonicalOperator = normalizeOperator(operator);
//    		Object rightOperand = ontology.getDataProperty(constraintName,  "neb:rightArgument").get(0);
//    		
//    		String rightOperandValue = rightOperand.toString();
//    		if(ontology.dataPropertyExists("owlq:" + leftOperand) || ontology.dataPropertyExists("owlq:" + leftOperand)){
//    			result += constructDataPropertyQuery(leftOperand, operator, rightOperandValue);
//    		}else if(leftOperand.toLowerCase().equals("class") && ontology.classExists("owlq:" + rightOperandValue)){
//    			result += rightOperandValue + " and ";
//    		}else {
//    		
//    		
//	    		result += "(leftOperand value " + leftOperand + ") and " ;
//	    		
//	    		if(canonicalOperator.contains(">"))
//	    			result += "(operator some {gteq, gt, GREATER_EQUAL_THAN, GREATER_THAN}) and ";
//	    		else if(canonicalOperator.contains("<"))
//	    			result += "(operator some {lteq, lt, LESS_EQUAL_THAN, LESS_THAN}) and";
//	    		else 
//	    			result += "(operator value " + operator + ") and ";
//	
//	    		result += constructDataPropertyQuery("rightOperand", operator, rightOperandValue);
//    		}
//    	}    	
//    	return result;
//    }
//    public String constuctAllConstraintsDL(@RequestParam("constraintName") String constraintName) {
//    	String result = "";
//    	List<String> superclasses = ontology.getSuperClasses(encode("{" + constraintName + "}"));
//    	
//    	if(superclasses.contains("LogicalConstraint")){
//    		List<String> operands = ontology.getInstances(encode("inverse operand value " + constraintName));
////    		String operator  = ontology.getObjectPropertiesInSignature("odrl:" + constraint).entrySet().iterator().next().getKey().asOWLObjectProperty().getIRI().getFragment();
//    		String operator = null;
//    		
//    		if(ontology.countInstances(encode("inverse and value " + constraintName)) >= 1)
//    			operator = "and";
//    		else 
//    			operator = "or";
//    		
//    		int counter = 0;
//    		for(var operand: operands) {
//    			result +=  constuctAllConstraintsDL(operand);
//    			
//    			if(counter != operands.size() - 1)
//    				result += " " + operator + " ";   				
//    			counter++;
//    		}
//    	} else if(superclasses.contains("Constraint")) {
//    		
//    		String leftOperand = ontology.getInstances(encode("inverse leftOperand value " + constraintName)).get(0);
//    		Object rightOperand = ontology.getDataProperty(constraintName,  "neb:rightArgument").get(0);
//    		
//    		String rightOperandValue = rightOperand.toString();
//    		
//    		if(ontology.dataPropertyExists("owlq:" + leftOperand)){
//    			result += constructDataPropertyQuery(leftOperand, null, rightOperandValue);
//    		}else {
//    			result += "(leftOperand value " + leftOperand + ")" ;
//    		}
//    	}
//    	
//    	return result;
//    }
	@GetMapping("validate/internal")
	public Map<String, Map<String, List<String>>>  validateInternal(@RequestParam("assetName") String assetName) {

		
		
		List<String> sls = ontology.getInstances(encode("inverse serviceLevel value " + assetName));
		Map<String, Map<String, List<String>>> result = new HashMap<String, Map<String, List<String>>>(sls.size());
		
		
		for(String sl : sls) {
			List<String> slos = ontology.getInstances(encode("inverse owlqConstraint value " + sl));
			Map<String, List<String>> slResults = new HashMap<String, List<String>>();
						
			for(String slo : slos) {
				String firstArgument = ontology.getInstances(encode("inverse firstArgument value " + slo)).get(0);
				
				List<String> sloResults = slResults.get(firstArgument);
				if(sloResults == null) {
					sloResults = new ArrayList<String>();
					slResults.put(firstArgument, sloResults);
				}
				sloResults.add(slo);
		
			}
		
			slResults.values().removeIf(t -> t.size() < 2);
			
			
			if(slResults.size() != 0)
				result.put(sl, slResults);
		}
		
		List<String> transitions = ontology.getInstances(encode("inverse slTransition value " + assetName));
		
		Map<String, List<String>> transitionResults = new HashMap<String, List<String>>(transitions.size());
		for(String transition: transitions) {
			if(ontology.getDataPropertyValues(transition, "owlq:evaluationPeriod").size() > 1) {
				List<String> evalPer= transitionResults.get("evaluationPeriod");
				if(evalPer == null) {
					evalPer = new ArrayList<String>();
					transitionResults.put("evaluationPeriod", evalPer);
					evalPer.add(transition);
				}
			}
			
			if(ontology.getDataPropertyValues(transition, "owlq:violationThreshold").size() > 1) {
				List<String> violThresh= transitionResults.get("violationThreshold");
				if(violThresh == null) {
					violThresh = new ArrayList<String>();
					transitionResults.put("violationThreshold", violThresh);
					violThresh.add(transition);
				}
			}

		}
		result.put("transitions", transitionResults);
		
		return result;
	}
	
	
//	
//	@GetMapping("validate/external")
//	public Map<String, List<String>> validateExternal(@RequestParam("assetName") String assetName) {
//
//
//		String lowestSl ;
//		Map<String, List<String>> result = new HashMap<String, List<String>>();
//		{
//			List<String> sls = ontology.getInstances(encode("inverse serviceLevel value " + assetName));
//			if( sls.size()== 1)
//				lowestSl = sls.get(0); // If the SLA only has one SL, then that SL is automatically the lowest SL
//			else { //For more than one SLs, the lowest one is the one that is the secondSL but not the firstSL (i.e., an SL leads to it but it doesn't lead to another SL)
//				List<String> secondSLs = ontology.getInstances(encode("inverse secondSL some Thing and SL"));
//				List<String> firstSLs = ontology.getInstances(encode("inverse firstSL some Thing and SL"));
//				
//				secondSLs.removeAll(firstSLs);
//				lowestSl = secondSLs.get(0);
//			}
//		}
//		//Get the constraints of the rules in the meta constraints
//		List<String> constraints = ontology.getInstances(encode("inverse constraint some (inverse obligation some (inverse hasPolicy value " + assetName +"))"));
//
//		for(String cons : constraints) {
//			//Get the constraint's constituent parts.
//			String firstArgument = ontology.getInstances(encode("inverse leftOperand value " + cons)).get(0); //LATENCY
//			String operator = ontology.getInstances(encode("inverse operator value " + cons)).get(0); //LESS_EQUAL_THAN
//			Object secondArgument = ontology.getDataProperty("neb:" + cons, "neb:rightArgument").get(0); //600
//			String query;
//
//			operator = convertOperator(operator);
//			
//			query = "inverse owlqConstraint value " + lowestSl + " and firstArgument value " + firstArgument;
//			
//			List<String> sameFirstArgumentSlos = ontology.getInstances(encode(query));
//			
//			if(operator.contains(">") || operator.contains("<")) {
//				
//				query += " and secondArgument some xsd:decimal[" + operator + " " + secondArgument + "]";
//			}else if(operator.equals("="))
//				query += " and secondArgument value " + secondArgument;
//			else if(operator.equals("!="))
//				query += " and secondArgument some xsd:decimal[< " + secondArgument + ", > "+ secondArgument +"]"; 
//			System.out.println(lowestSl);
//			List<String> conformingSLOs = ontology.getInstances(encode(query));
//			
//			
//			System.out.println(query);
//			System.out.println(conformingSLOs);
//			System.out.println(sameFirstArgumentSlos);
//			
//					
//			for(String slo : conformingSLOs) {
//				String op =  convertOperator(ontology.getInstances("inverse operator value + slo").get(0));
//				
//				if(op.contains(">") && !operator.contains(">")) 
//					conformingSLOs.remove(slo);
//				if(op.contains("<") && !operator.contains("<"))
//					conformingSLOs.remove(slo);
//				else if(op.matches("!=") && !operator.matches("!="))
//					conformingSLOs.remove(slo);
//				else if(op.matches("=") && !operator.matches("="))
//					conformingSLOs.remove(slo);
//				
//			}
//			
//
//			if(sameFirstArgumentSlos.size() == conformingSLOs.size())
//				System.out.println("All good");
//			else if(sameFirstArgumentSlos.size() > conformingSLOs.size()) {
//				System.out.println("Problem");
//				List<String> violatingSlos = new ArrayList<String>();
//				violatingSlos.addAll(sameFirstArgumentSlos);
//				violatingSlos.removeAll(conformingSLOs);
//				result.put(cons, violatingSlos);
//			}else 
//				System.out.println("Different problem");
//			//			List<String> individuals = ontology.getInstances("firstArgument value " + firstArgument + " and secondArgument some decimal[" + operator +" " + secondArgument +"]");
//			//"firstArgument value " + firstArgument + " and operator value " + operator  + " and secondArgument some decimal[]"
//			//"firstArgument value LATENCY and operator some {LESS_EQUAL_THAN, LESS_THAN} and secondArgument some xsd:decimal[<= 600]"
//
//		}
//		return result;	
//	}
//	
//	private String convertOperator(String operator) {
//		switch (operator) {
//		case "LESS_THAN":
//			operator = "<";
//			break;
//		case "LESS_EQUAL_THAN":
//			operator = "<=";
//			break;
//		case "GREATER_THAN":
//			operator = ">";
//			break;
//		case "GREATER_EQUAL_THAN":
//			operator = ">=";
//			break;
//		case "EQUALS":
//			operator = "=";
//			break;
//		case "NOT_EQUALS":
//			operator = "!=";
//			break;
//			
//		}
//		return operator;	
//
//	}
	private String encode(String query) {
		return URLEncoder.encode(query, StandardCharsets.UTF_8);
	}
	
}
