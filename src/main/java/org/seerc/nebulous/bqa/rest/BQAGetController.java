package org.seerc.nebulous.bqa.rest;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
	
	private String constructDataPropertyQuery(String dataProperty, String operator, String value) {
		String output = null;
		boolean isNumber = false;
		String operatorCanonical = normalizeOperator(operator);
		
		if (value.matches("[0-9]+\\.?[0-9]*")) {
			isNumber = true;
		}
				
		if(value.contains("^^")) {
			String[] comps = value.split("\\^\\^");
			if(operatorCanonical == null) {
				output = "(" + dataProperty + " some " + comps[1] + ")";
			}else if(operatorCanonical.equals("="))
				output = "(" + dataProperty + " value " + value + ")";
			else if(!operatorCanonical.equals("!="))
				output = "(" + dataProperty  + " some " + comps[1] + "[ " + operatorCanonical + " " + comps[0].substring( 1, comps[0].length() - 1)+"])";
			else if(!operatorCanonical.equals("!="))
				output = "(" + dataProperty  + " some " + comps[1] + "[ < " + comps[0].substring( 1, comps[0].length() - 1)+ ", > " + comps[0].substring( 1, comps[0].length() - 1) + "])";
			else
				output = "(" + dataProperty  + " some " + comps[1] + ")";
				
			
		}else if(operatorCanonical == null) {
			if(isNumber) {
				output = "((" + dataProperty + " some xsd:decimal) or " + "(" + dataProperty + " some xsd:double))";
			}else 
				output = "(" + dataProperty + " value \"" + value + "\")";
		} else{
			
			if(isNumber) {
				if(operatorCanonical.contains(">") || operatorCanonical.contains("<")) {
					output = "((" + dataProperty + " some xsd:decimal[" + operatorCanonical + " " + value + "]) or " + "(" + dataProperty + " some xsd:double[" + operatorCanonical + " " + value + "]))";
				} else if(operatorCanonical.equals("=")) {
					output = "((" + dataProperty + " value \"" + value + "\"^^xsd:decimal) or (" + dataProperty + " value \"" + value + "\"^^xsd:double))";
				} else if(operatorCanonical.equals("!="))
					output = "((" + dataProperty + " some xsd:decimal[ < " + value + ", > " + value +"]) or " + "(" + dataProperty + " some xsd:double[ < " + value + ", > " + value +"]))";
			}else 
				output = "(" + dataProperty + " value \"" + value + "\")";
		}
				
		return output;
		
	}
	
	@GetMapping("validate")
	public Map<String, List<String>> validate(@RequestParam("assetName") String assetName ) {
		List<String> rules = ontology.getInstances(encode("inverse obligation some (inverse hasPolicy value " + assetName + ")"));
		Map<String, List<String>> output = new HashMap<String, List<String>>();
		List<String> allInstances = null;
		List<String> conformingInstances = null;
		for(String rule : rules) {			
			String constraint = ontology.getInstances(encode("inverse constraint value  " + rule)).get(0);

			conformingInstances = ontology.getInstances(encode(constuctComformingConstraintsDL(constraint) + " and partOf value " + assetName));
			allInstances = ontology.getInstances(encode(constuctAllConstraintsDL(constraint) + " and partOf value " + assetName));

			allInstances.removeAll(conformingInstances);
			
			if(allInstances.size() > 0) {
				output.put(rule, allInstances);
				System.out.println("Problem");
			}else
				System.out.println("All Good");
		}
		
		return output;
	}

    public String constuctComformingConstraintsDL(String constraintName) {
    	String result = "";
    	List<String> superclasses = ontology.getSuperClasses(encode("{" + constraintName + "}"));
    	
    	if(superclasses.contains("LogicalConstraint")){
    		List<String> operands = ontology.getInstances(encode("inverse operand value " + constraintName));
//    		String operator  = ontology.getObjectPropertiesInSignature("odrl:" + constraint).entrySet().iterator().next().getKey().asOWLObjectProperty().getIRI().getFragment();
    		String operator = null;
    		
    		if(ontology.countInstances(encode("inverse and value " + constraintName)) >= 1)
    			operator = "and";
    		else 
    			operator = "or";
    		
    		int counter = 0;
    		result += "(";
    		for(var operand: operands) {
    			result +=  constuctComformingConstraintsDL(operand);
    			
    			if(counter != operands.size() - 1)
    				result += " " + operator + " ";   				
    			counter++;
    		}
    		result += ")";
    	} else if(superclasses.contains("Constraint")) {
    		
    		String leftOperand = ontology.getInstances(encode("inverse leftOperand value " + constraintName)).get(0);
    		String operator = ontology.getInstances(encode("inverse operator value " + constraintName)).get(0);
    		String canonicalOperator = normalizeOperator(operator);
    		Object rightOperand = ontology.getDataProperty(constraintName,  "odrl:rightOperand").get(0);
    		
    		String rightOperandValue = rightOperand.toString();
    		
    		if(ontology.dataPropertyExists("owlq:" + leftOperand) || ontology.dataPropertyExists("owlq:" + leftOperand)){
    			result += constructDataPropertyQuery(leftOperand, operator, rightOperandValue);
    		}else if(leftOperand.toLowerCase().equals("class") && ontology.classExists("owlq:" + rightOperandValue)){
    			result += rightOperandValue + " and ";
    		}else {
    		
    		
	    		result += "(leftOperand value " + leftOperand + ") and " ;
	    		
	    		if(canonicalOperator.contains(">"))
	    			result += "(operator some {gteq, gt, GREATER_EQUAL_THAN, GREATER_THAN}) and ";
	    		else if(canonicalOperator.contains("<"))
	    			result += "(operator some {lteq, lt, LESS_EQUAL_THAN, LESS_THAN}) and";
	    		else 
	    			result += "(operator value " + operator + ") and ";
	
	    		result += constructDataPropertyQuery("rightOperand", operator, rightOperandValue);
    		}
    	}    	
    	return result;
    }
    public String constuctAllConstraintsDL(@RequestParam("constraintName") String constraintName) {
    	String result = "";
    	List<String> superclasses = ontology.getSuperClasses(encode("{" + constraintName + "}"));
    	
    	if(superclasses.contains("LogicalConstraint")){
    		List<String> operands = ontology.getInstances(encode("inverse operand value " + constraintName));
//    		String operator  = ontology.getObjectPropertiesInSignature("odrl:" + constraint).entrySet().iterator().next().getKey().asOWLObjectProperty().getIRI().getFragment();
    		String operator = null;
    		
    		if(ontology.countInstances(encode("inverse and value " + constraintName)) >= 1)
    			operator = "and";
    		else 
    			operator = "or";
    		
    		int counter = 0;
    		for(var operand: operands) {
    			result +=  constuctAllConstraintsDL(operand);
    			
    			if(counter != operands.size() - 1)
    				result += " " + operator + " ";   				
    			counter++;
    		}
    	} else if(superclasses.contains("Constraint")) {
    		
    		String leftOperand = ontology.getInstances(encode("inverse leftOperand value " + constraintName)).get(0);
    		Object rightOperand = ontology.getDataProperty(constraintName,  "odrl:rightOperand").get(0);
    		
    		String rightOperandValue = rightOperand.toString();
    		
    		if(ontology.dataPropertyExists("owlq:" + leftOperand)){
    			result += constructDataPropertyQuery(leftOperand, null, rightOperandValue);
    		}else {
    			result += "(leftOperand value " + leftOperand + ")" ;
    		}
    	}
    	
    	return result;
    }
	@GetMapping("validate/internal")
	public Map<String, List<String>> validateInternal(@RequestParam("assetName") String assetName) {
		System.out.println(assetName);
		List<String> sls = ontology.getInstances(encode("inverse serviceLevel value " + assetName));
		System.out.println(sls);
		
		for(String sl : sls) {
			List<String> slos = ontology.getInstances(encode("inverse owlqConstraint value " + sl));
			System.out.println(slos);
			for(String slo : slos) {
				String firstArgument = ontology.getInstances(encode("inverse firstArgument value " + slo)).get(0);
				String operator = ontology.getInstances(encode("inverse operator value " + slo)).get(0);
				Object secondArgument = ontology.getDataProperty("neb:" + slo, "owlq:secondArgument").get(0); 
				System.out.println(firstArgument + " " + operator + " " + secondArgument);
				
				String query = "inverse owlqConstraint value " + sl + " and firstArgument value " + firstArgument;
				
//				if(operator.contains("GREATER"))
//					query += " and operator some {GREATER_EQUAL_THAN, GREATER_THAN, EQUALS, NOT_EQUALS}";
//				else if(operator.contains("LESSER"))
			}
			
			//	http://localhost/get/instances?dlQuery=inverse%20owlqConstraint%20value%20SLA_0_SL_2%20and%20firstArgument%20value%20AVAILABILITY%20and%20operator%20some%20%7BGREATER_EQUAL_THAN,%20GREATER_THAN,%20EQUALS,%20NOT_EQUALS%7D
			
		}
		
		return null;
	}
	
	@GetMapping("validate/external")
	public Map<String, List<String>> validateExternal(@RequestParam("assetName") String assetName) {


		String lowestSl ;
		Map<String, List<String>> result = new HashMap<String, List<String>>();
		{
			List<String> sls = ontology.getInstances(encode("inverse serviceLevel value " + assetName));
			if( sls.size()== 1)
				lowestSl = sls.get(0); // If the SLA only has one SL, then that SL is automatically the lowest SL
			else { //For more than one SLs, the lowest one is the one that is the secondSL but not the firstSL (i.e., an SL leads to it but it doesn't lead to another SL)
				List<String> secondSLs = ontology.getInstances(encode("inverse secondSL some Thing and SL"));
				List<String> firstSLs = ontology.getInstances(encode("inverse firstSL some Thing and SL"));
				
				secondSLs.removeAll(firstSLs);
				lowestSl = secondSLs.get(0);
			}
		}
		//Get the constraints of the rules in the meta constraints
		List<String> constraints = ontology.getInstances(encode("inverse constraint some (inverse obligation some (inverse hasPolicy value " + assetName +"))"));

		for(String cons : constraints) {
			//Get the constraint's constituent parts.
			String firstArgument = ontology.getInstances(encode("inverse leftOperand value " + cons)).get(0); //LATENCY
			String operator = ontology.getInstances(encode("inverse operator value " + cons)).get(0); //LESS_EQUAL_THAN
			Object secondArgument = ontology.getDataProperty("neb:" + cons, "odrl:rightOperand").get(0); //600
			String query;

			operator = convertOperator(operator);
			
			query = "inverse owlqConstraint value " + lowestSl + " and firstArgument value " + firstArgument;
			
			List<String> sameFirstArgumentSlos = ontology.getInstances(encode(query));
			
			if(operator.contains(">") || operator.contains("<")) {
				
				query += " and secondArgument some xsd:decimal[" + operator + " " + secondArgument + "]";
			}else if(operator.equals("="))
				query += " and secondArgument value " + secondArgument;
			else if(operator.equals("!="))
				query += " and secondArgument some xsd:decimal[< " + secondArgument + ", > "+ secondArgument +"]"; 
			System.out.println(lowestSl);
			List<String> conformingSLOs = ontology.getInstances(encode(query));
			
			
			System.out.println(query);
			System.out.println(conformingSLOs);
			System.out.println(sameFirstArgumentSlos);
			
					
			for(String slo : conformingSLOs) {
				String op =  convertOperator(ontology.getInstances("inverse operator value + slo").get(0));
				
				if(op.contains(">") && !operator.contains(">")) 
					conformingSLOs.remove(slo);
				if(op.contains("<") && !operator.contains("<"))
					conformingSLOs.remove(slo);
				else if(op.matches("!=") && !operator.matches("!="))
					conformingSLOs.remove(slo);
				else if(op.matches("=") && !operator.matches("="))
					conformingSLOs.remove(slo);
				
			}
			

			if(sameFirstArgumentSlos.size() == conformingSLOs.size())
				System.out.println("All good");
			else if(sameFirstArgumentSlos.size() > conformingSLOs.size()) {
				System.out.println("Problem");
				List<String> violatingSlos = new ArrayList<String>();
				violatingSlos.addAll(sameFirstArgumentSlos);
				violatingSlos.removeAll(conformingSLOs);
				result.put(cons, violatingSlos);
			}else 
				System.out.println("Different problem");
			//			List<String> individuals = ontology.getInstances("firstArgument value " + firstArgument + " and secondArgument some decimal[" + operator +" " + secondArgument +"]");
			//"firstArgument value " + firstArgument + " and operator value " + operator  + " and secondArgument some decimal[]"
			//"firstArgument value LATENCY and operator some {LESS_EQUAL_THAN, LESS_THAN} and secondArgument some xsd:decimal[<= 600]"

		}
		return result;	
	}
	
	private String convertOperator(String operator) {
		switch (operator) {
		case "LESS_THAN":
			operator = "<";
			break;
		case "LESS_EQUAL_THAN":
			operator = "<=";
			break;
		case "GREATER_THAN":
			operator = ">";
			break;
		case "GREATER_EQUAL_THAN":
			operator = ">=";
			break;
		case "EQUALS":
			operator = "=";
			break;
		case "NOT_EQUALS":
			operator = "!=";
			break;
			
		}
		return operator;	

	}
	private String encode(String query) {
		return URLEncoder.encode(query, StandardCharsets.UTF_8);
	}
	
}
