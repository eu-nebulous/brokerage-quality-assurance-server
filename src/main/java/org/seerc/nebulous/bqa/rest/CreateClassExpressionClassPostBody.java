package org.seerc.nebulous.bqa.rest;

public class CreateClassExpressionClassPostBody {
	private String classURI;
	private String classExpression;
	
	
	
	public CreateClassExpressionClassPostBody(String classURI, String classExpression) {
		super();
		this.classURI = classURI;
		this.classExpression = classExpression;
	}
	public String getClassURI() {
		return classURI;
	}
	public void setClassURI(String classURI) {
		this.classURI = classURI;
	}
	public String getClassExpression() {
		return classExpression;
	}
	public void setClassExpression(String classExpression) {
		this.classExpression = classExpression;
	}
	
	
}
