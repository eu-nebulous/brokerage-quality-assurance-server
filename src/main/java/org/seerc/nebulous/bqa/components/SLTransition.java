package org.seerc.nebulous.bqa.components;

public class SLTransition {
	private String firstSl, secondSl, evaluationPeriod;
	private int violationThreshold;
	

	public int getViolationThreshold() {
		return violationThreshold;
	}
	public void setViolationThreshold(int violationThreshold) {
		this.violationThreshold = violationThreshold;
	}
	public String getEvaluationPeriod() {
		return evaluationPeriod;
	}
	public void setEvaluationPeriod(String evaluationPeriod) {
		this.evaluationPeriod = evaluationPeriod;
	}
	public String getFirstSl() {
		return firstSl;
	}
	public void setFirstSl(String firstSl) {
		this.firstSl = firstSl;
	}
	public String getSecondSl() {
		return secondSl;
	}
	public void setSecondSl(String secondSl) {
		this.secondSl = secondSl;
	}
	@Override
	public String toString() {
		return "SLTransition [firstSl = " + firstSl + ", secondSl = " + secondSl + ", evaluationPeriod = "
				+ evaluationPeriod + ", violationThreshold = " + violationThreshold + "]";
	}
	
	
}
