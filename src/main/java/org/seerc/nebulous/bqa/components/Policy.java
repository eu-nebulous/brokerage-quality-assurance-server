package org.seerc.nebulous.bqa.components;

import java.util.ArrayList;
import java.util.List;

public class Policy {
	String asset;
	List<Constraint> rules;
		
	public Policy() {
		rules =  new ArrayList<Constraint>();
	}
	public String getAsset() {
		return asset;
	}
	public void setAsset(String asset) {
		this.asset = asset;
	}
	public List<Constraint> getRules() {
		return rules;
	}
	public void setRules(List<Constraint> rules) {
		this.rules = rules;
	}
	
	public void addRule(SimpleConstraint rule) {
		rules.add(rule);
	}
	
	
}
