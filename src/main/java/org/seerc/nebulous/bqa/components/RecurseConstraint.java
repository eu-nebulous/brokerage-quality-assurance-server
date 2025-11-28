package org.seerc.nebulous.bqa.components;

import org.seerc.nebulous.bqa.rest.OntologyConnection;

public class RecurseConstraint {
	
	private int iterator;
	private String constraintNameTemplate;
	private String assetName;
	
	private OntologyConnection ontology;
	
	public RecurseConstraint(String constraintNameTemplate, String assetName) {
		this.constraintNameTemplate = constraintNameTemplate;
		iterator = 0;
		this.assetName = assetName;
		ontology = OntologyConnection.getInstance();
	}
	
	public String buildConstraint(Constraint constraint) {
		
		String constraintName = constraintName();
//			System.out.println("CONSTR:" + constraint);
		if(constraint instanceof SimpleConstraint constr) {
			
			ontology.createIndividual(constraintName, "odrl:Constraint");

			String firstArgumentName;
			
			if(ontology.dataPropertyExists("owlq:" + constr.getFirstArgument()))
				firstArgumentName = constr.getFirstArgument();
			else
				firstArgumentName = "SLA_" + assetName + "_" + constr.getFirstArgument();

			ontology.createObjectProperty("odrl:leftOperand", constraintName, "neb:" +  firstArgumentName);
			ontology.createObjectProperty("odrl:operator", constraintName, "owlq:" + constr.getOperator().toString());
			ontology.createDataProperty("odrl:rightOperand", constraintName, constr.getSecondArgument(), "xsd:decimal");
		
		}else if (constraint instanceof ComplexConstraint constr){
			
			ontology.createIndividual(constraintName, "odrl:LogicalConstraint");
			ontology.createObjectProperty("owlq:logicalOperator", constraintName, "owlq:" + constr.getOperator().toUpperCase());
			for(Constraint c : constr.getOperands()) {
				
				String con = buildConstraint(c);
				
				ontology.createObjectProperty("odrl:partOf" , con, constraintName);
				ontology.createObjectProperty("owlq:constraint" , constraintName, con);
			}
		}
		return constraintName;
	}
	private String constraintName() {
		return constraintNameTemplate + "_" + iterator();
	}
	private int iterator() {
		return iterator++;
	}
}
