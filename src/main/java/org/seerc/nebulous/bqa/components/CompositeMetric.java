package org.seerc.nebulous.bqa.components;

public class CompositeMetric extends Metric{
	private String formula;

	
	public CompositeMetric() {
		super();
	}
	public CompositeMetric(Metric m) {
		this.setName(m.getName());
		this.setOutput(m.getOutput());
		this.setWindow(m.getWindow());
	}
	public String getFormula() {
		return formula;
	}

	public void setFormula(String formula) {
		this.formula = formula;
	}

	@Override
	public String toString() {
		return "CompositeMetric [formula = " + formula + ", name = " + name + ", window = " + window + ", output = "
				+ output + "]";
	}

	
}
