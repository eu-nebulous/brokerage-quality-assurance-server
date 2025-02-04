package org.seerc.nebulous.bqa.components;

import java.io.IOException;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

 class ConstraintDeserialiser extends JsonDeserializer<Constraint> {

	@Override
	public Constraint deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JacksonException {
		ObjectMapper mapper = (ObjectMapper) p.getCodec();
        ObjectNode root = mapper.readTree(p);
        
        if(root.has("operands"))
        	return mapper.readValue(root.toString(), ComplexConstraint.class);
        else
        	return mapper.readValue(root.toString(), SimpleConstraint.class);
	}

}
