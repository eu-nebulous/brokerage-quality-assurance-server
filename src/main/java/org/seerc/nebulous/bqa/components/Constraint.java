package org.seerc.nebulous.bqa.components;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(using = ConstraintDeserialiser.class)
public interface Constraint {

}
