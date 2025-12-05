package org.seerc.nebulous.bqa.rest;

public class CreateDataPropertyPostBody {
	private String dataPropertyURI, domainURI;
	private Object value;
	private String type;
	public String getDataPropertyURI() {
		return dataPropertyURI;
	}

	public void setDataPropertyURI(String dataPropertyURI) {
		this.dataPropertyURI = dataPropertyURI;
	}

	public String getDomainURI() {
		return domainURI;
	}

	public void setDomainURI(String domainURI) {
		this.domainURI = domainURI;
	}

	public CreateDataPropertyPostBody(String dataPropertyURI, String domainURI, Object value, String type) {
		this.dataPropertyURI = dataPropertyURI;
		this.domainURI = domainURI;
		this.value = value;
		this.type = type;
	}

	public Object getValue() {
		return value;
	}

	public void setValue(Object value) {
		this.value = value;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	
}
