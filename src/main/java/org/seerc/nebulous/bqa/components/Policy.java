package org.seerc.nebulous.bqa.components;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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
	
	public void addRule(Constraint rule) {
		rules.add(rule);
	}
	public static Policy ConstructPolicy(Map m, String id) {
		Policy p = new Policy();
		p.setAsset(id);
		p.setRules(List.of(constructConstraint(m)));
		return p;
	}
	private static Constraint constructConstraint(Map m) {
		Constraint constraint;
		if(m.get("isComposite").equals(true)) {
			
			ComplexConstraint c = new ComplexConstraint();
			c.setOperator((String) m.get("condition"));
			for(Map i : ((List<Map>) m.get("children")))
				c.addOperand(constructConstraint(i));
			
			constraint = c;
		}else {
			SimpleConstraint c = new SimpleConstraint();
			c.setFirstArgument((String) m.get("metricName"));
			c.setOperator(ComparisonOperator.convert((String) m.get("operator")));
			c.setSecondArgument(m.get("value"));
			constraint = c;
		}
		
//		System.out.println(constraint);
		return constraint;
	}
	@Override
	public String toString() {
		return "Policy [asset = " + asset + ", rules = " + rules + "]";
	}
	
	
}
