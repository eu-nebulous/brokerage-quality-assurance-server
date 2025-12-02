package org.seerc.nebulous.bqa.components;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class SLA {
	private String slaName;
	private List<SL> sls;
	private Set<Metric> metrics;
	private List<SLTransition> transitions;
	
	public SLA() {
		sls = new ArrayList<SL>();
		metrics = new HashSet<Metric>();
		transitions = new ArrayList<SLTransition>();
	}
	public SLA(String slaName) {
		this.slaName = slaName;
		sls = new ArrayList<SL>();
		metrics = new HashSet<Metric>();
		transitions = new ArrayList<SLTransition>();
	}
	
	public String getSlaName() {
		return slaName;
	}


	public void setSlaName(String slaName) {
		this.slaName = slaName;
	}


	public List<SL> getSls() {
		return sls;
	}
	public void setSls(List<SL> sls) {
		this.sls = sls;
	}
	public Set<Metric> getMetrics() {
		return metrics;
	}
	public void setMetrics(Set<Metric> metrics) {
		this.metrics = metrics;
	}
	public List<SLTransition> getTransitions() {
		return transitions;
	}
	public void setTransitions(List<SLTransition> transitions) {
		this.transitions = transitions;
	}
	@Override
	public String toString() {
		return "CompleteSLA [sls = " + sls + ", metrics = " + metrics + ", transitions = " + transitions + "]";
	}
	
}
