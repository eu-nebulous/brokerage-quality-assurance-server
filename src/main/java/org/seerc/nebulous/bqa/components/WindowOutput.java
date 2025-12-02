package org.seerc.nebulous.bqa.components;

public class WindowOutput {
	private String type;
	private Number value;
	private String unit;
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Number getValue() {
		return value;
	}
	public void setValue(Number value) {
		this.value = value;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	@Override
	public String toString() {
		return "WindowOutput [type = " + type + ", value = " + value + ", unit = " + unit + "]";
	}
	
	
}
