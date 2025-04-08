package org.seerc.nebulous.bqa.components;

/**
 * Comparison operators that can be used in simple constraints.
 */
public enum ComparisonOperator {
	/**
	 * >
	 */
	GREATER_THAN,
	/**
	 * >=
	 */
	GREATER_EQUAL_THAN,
	/**
	 * <
	 */
	LESS_THAN,
	/**
	 * <=
	 */
	LESS_EQUAL_THAN,
	/**
	 * ==
	 */
	EQUALS,
	/**
	 * !=
	 */
	NOT_EQUALS;
	
	public static ComparisonOperator convert(String op) {
		ComparisonOperator result = null;
		
		switch (op) {
		case "<":
			result = LESS_THAN;
			break;
		case ">":
			result = GREATER_THAN;
			break;
		case "<=":
			result = LESS_EQUAL_THAN;
			break;
		case ">=":
			result = GREATER_EQUAL_THAN;
			break;
		case "=":
			result = EQUALS;
			break;
		case "<>":
			result = NOT_EQUALS;
			break;
		}
		return result;
	}
	
}
