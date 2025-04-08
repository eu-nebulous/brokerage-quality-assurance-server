package org.seerc.nebulous.bqa.rest;

public class CreateIndividualPostBody {
	private String individualURI, classURI;

	
	
	public CreateIndividualPostBody(String individualURI, String classURI) {
		super();
		this.individualURI = individualURI;
		this.classURI = classURI;
	}

	public String getIndividualURI() {
		return individualURI;
	}

	public void setIndividualURI(String individualURI) {
		this.individualURI = individualURI;
	}

	public String getClassURI() {
		return classURI;
	}

	public void setClassURI(String classURI) {
		this.classURI = classURI;
	}
	
	
}
