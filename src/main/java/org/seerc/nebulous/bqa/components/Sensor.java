package org.seerc.nebulous.bqa.components;

import java.util.HashMap;
import java.util.Map;

public class Sensor {
	private String type;
	private String affinity;
	
	
	public Sensor() {
	}
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}

	public String getAffinity() {
		return affinity;
	}

	public void setAffinity(String affinity) {
		this.affinity = affinity;
	}

	@Override
	public String toString() {
		return "Sensor [type = " + type + ", affinity = " + affinity + "]";
	}

	
	
}
