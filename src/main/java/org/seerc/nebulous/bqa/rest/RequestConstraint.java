package org.seerc.nebulous.bqa.rest;

import org.seerc.nebulous.bqa.components.SimpleConstraint;

public class RequestConstraint extends SimpleConstraint{
	private String specificationName;

	public String getSpecificationName() {
		return specificationName;
	}

	public void setSpecificationName(String specificationName) {
		this.specificationName = specificationName;
	}
	
	
}
