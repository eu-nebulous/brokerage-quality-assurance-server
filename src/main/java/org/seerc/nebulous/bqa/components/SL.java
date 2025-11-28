package org.seerc.nebulous.bqa.components;

import java.util.ArrayList;
import java.util.List;

public class SL {
	
	private List<SLO> slos;
	private String slName;
	
	
	
	public SL() {
		slos = new ArrayList<SLO>();
	}
	public List<SLO> getSlos() {
		return slos;
	}
	public void setSlos(List<SLO> slos) {
		this.slos = slos;
	}
	public String getSlName() {
		return slName;
	}
	public void setSlName(String slName) {
		this.slName = slName;
	}	
	public void addSlo(SLO slo) {
		slos.add(slo);
	}
	@Override
	public String toString() {
		return "SL [slName = " + slName + ", slos = " + slos +  "]";
	}
	
	
	
}
