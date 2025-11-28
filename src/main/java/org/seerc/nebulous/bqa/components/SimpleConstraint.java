package org.seerc.nebulous.bqa.components;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

/**
 *  A simple constraint is made up of a first and second argument along with an operator. They take th form of first argument operator second argument. The first argument refers to a Metric and the second to a threshold value, which if surpassed is considered a violation.
 */
@JsonDeserialize(as = SimpleConstraint.class)
public class SimpleConstraint implements Constraint{
		
	protected String firstArgument;
	protected ComparisonOperator operator;
	protected Object secondArgument;

	public String getFirstArgument() {
		return firstArgument;
	}
	public void setFirstArgument(String firstArgument) {
		this.firstArgument = firstArgument;
	}
	public ComparisonOperator getOperator() {
		return operator;
	}
	public void setOperator(ComparisonOperator operator) {
		this.operator = operator;
	}
	public Object getSecondArgument() {
		return secondArgument;
	}
	public void setSecondArgument(Object secondArgument) {
		this.secondArgument = secondArgument;
	}
	@Override
	public String toString() {
		return "SimpleConstraint [firstArgument = " + firstArgument + ", operator = " + operator
				+ ", secondArgument = " + secondArgument + "]";
	}

	
	
}
