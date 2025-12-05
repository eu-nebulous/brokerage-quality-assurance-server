package org.seerc.nebulous.bqa.rest;

import java.util.concurrent.TimeUnit;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;	

@RestController
public class BQAGetController {
	private OntologyConnection ontology = OntologyConnection.getInstance();
	private EXNConnection conn = EXNConnection.getInstance();
//	private SLAConnection slaGenerator = SLAConnection.getInstance();
	

	@GetMapping("/validate")
	public void validate(@RequestParam String uuid) {
		int counter = 0;
		while(!ontology.hasPolicy(uuid) && counter < 5) {
			counter++;
			try {
				TimeUnit.SECONDS.wait(1);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		boolean valid = ontology.validate("SLA_" + uuid);
		System.out.println(uuid + ": " + valid);
		
		String corrId= ontology.getCorrelationId(uuid);
		ontology.removePolicy(uuid);
		
		conn.sendValidation(uuid, corrId, valid);
	}
	
}
