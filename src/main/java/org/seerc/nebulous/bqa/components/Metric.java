package org.seerc.nebulous.bqa.components;

public class Metric {
	
	protected String name;
	protected WindowOutput window;
	protected WindowOutput output;
//	protected boolean isMaximizing;


	public Metric() {}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public WindowOutput getWindow() {
		return window;
	}
	public void setWindow(WindowOutput window) {
		this.window = window;
	}
	public WindowOutput getOutput() {
		return output;
	}
	public void setOutput(WindowOutput output) {
		this.output = output;
	}
	public Metric(String name, WindowOutput window, WindowOutput output) {
		super();
		this.name = name;
		this.window = window;
		this.output = output;
	}
		

	@Override
	public boolean equals(Object obj) {
		
		if(!(obj instanceof Metric))
			return false;
		
		
		Metric m2 = (Metric) obj;
//		System.out.println(m2.name + "\t" + this.name);
		
		return m2.name.equals(this.name);
	}
	@Override
	public int hashCode() {
		return name.hashCode();
	}
	@Override
	public String toString() {
		return "Metric [name = " + name + ", window = " + window + ", output = " + output + "]";
	}
	
}
