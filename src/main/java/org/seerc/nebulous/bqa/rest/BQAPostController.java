package org.seerc.nebulous.bqa.rest;

import java.util.List;

import org.seerc.nebulous.bqa.components.Constraint;
import org.seerc.nebulous.bqa.components.Policy;
import org.seerc.nebulous.bqa.components.RecurseConstraint;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BQAPostController {
	private OntologyConnection ontology = OntologyConnection.getInstance();
	
	@PostMapping("create/policy")
	public void createPolicy(@RequestBody Policy policy) {
		
		String policyName = "neb:POLICY_" + policy.getAsset();
		ontology.createIndividual("odrl:Set", policyName);
		
		ontology.createObjectProperty("odrl:hasPolicy", policy.getAsset(), policyName);
		
		List<Constraint> constraints = policy.getRules();
		
		for(int i = 0; i < constraints.size(); i++) {
			
			String ruleName = policyName + "_RULE_" + i;
					
			ontology.createIndividual(ruleName, "odrl:Duty");
			
			ontology.createObjectProperty("odrl:obligation", policyName, ruleName);
			ontology.createObjectProperty("odrl:action", ruleName, "neb:permit");
			
			RecurseConstraint rc = new RecurseConstraint(ruleName + "_CONSTRAINT", policy.getAsset());
					
			ontology.createObjectProperty("odrl:constraint", ruleName, rc.buildConstraint(constraints.get(i)));

		}
	}
	
	
	
	
	
	

}
