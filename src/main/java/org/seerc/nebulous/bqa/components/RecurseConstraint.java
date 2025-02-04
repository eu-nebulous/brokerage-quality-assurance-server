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
		
		if(constraint.getType().equals("Simple")) {
			SimpleConstraint constr = (SimpleConstraint) constraint;
			
			ontology.createIndividual(constraintName, "odrl:Constraint");

			String firstArgumentName;
			if(ontology.dataPropertyExists("owlq:" + constr.getFirstArgument()))
				firstArgumentName = constr.getFirstArgument();
			else
				firstArgumentName = assetName + "_" + constr.getFirstArgument();

			
			ontology.createObjectProperty("odrl:leftOperand", constraintName, "neb:" +  firstArgumentName);
			ontology.createObjectProperty("odrl:operator", constraintName, "owlq:" + constr.getOperator().toString());
			ontology.createDataProperty("odrl:rightOperand", constraintName, constr.getSecondArgument());
		}else {
			ComplexConstraint constr = (ComplexConstraint) constraint;
			
			ontology.createIndividual(constraintName, "odrl:LogicalConstraint");
			
			for(Constraint c : constr.getOperands()) {
				ontology.createObjectProperty("odrl:" + constr.getOperator(), constraintName, buildConstraint(c));
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
