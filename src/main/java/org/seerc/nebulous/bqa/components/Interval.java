package org.seerc.nebulous.bqa.components;

public class Interval<T extends Number> {
	private T threshold;
	private ComparisonOperator operator;
	
	public Interval(T threshold, ComparisonOperator operator) {
		this.threshold = threshold;
		this.operator = operator;
	}
	
	
	
	public  <T extends Number> boolean isSuperRange(Interval<T> other) {
		
		
		double thisValue = this.getThreshold().doubleValue();
		double otherValue = other.getThreshold().doubleValue();

		
		System.out.println(thisValue + " " + otherValue);
		
		if(this.getOperator().equals(other.getOperator())) {
			if(operator.equals(ComparisonOperator.GREATER_THAN) && thisValue <= otherValue)
				return true;
			else if(operator.equals(ComparisonOperator.GREATER_EQUAL_THAN) && thisValue <= otherValue) {
					return true;
			}else if(operator.equals(ComparisonOperator.LESS_THAN) && thisValue >= otherValue)
				return true;
			else if(operator.equals(ComparisonOperator.LESS_EQUAL_THAN) && thisValue >= otherValue) {
				return true;
			}else if(operator.equals(ComparisonOperator.EQUALS) && thisValue != otherValue)
				return true;
			else if(operator.equals(ComparisonOperator.NOT_EQUALS) && thisValue == otherValue)
				return true;
		} else {
			if(this.getOperator().toString().contains("GREATER") && other.getOperator().toString().contains("GREATER")) {
				if(this.getOperator().toString().contains("EQUAL") && thisValue >= otherValue)
					return true;
				else if(other.getOperator().toString().contains("EQUAL") && thisValue < otherValue)
					return true;
				
			}else if(this.getOperator().toString().contains("LESS") && other.getOperator().toString().contains("LESS")){
				if(this.getOperator().toString().contains("EQUAL") && thisValue <= otherValue) 
					return true;
				else if(other.getOperator().toString().contains("EQUAL") && thisValue > otherValue)
					return true;
			}
		}

		System.out.println("in3");
		return false;
	}

	public T getThreshold() {
		return threshold;
	}

	public void setThreshold(T threshold) {
		this.threshold = threshold;
	}



	public ComparisonOperator getOperator() {
		return operator;
	}



	public void setOperator(ComparisonOperator operator) {
		this.operator = operator;
	}

	
	
}
