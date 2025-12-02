package org.seerc.nebulous.bqa;

import org.seerc.nebulous.bqa.rest.EXNConnection;
import org.seerc.nebulous.bqa.rest.OntologyConnection;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BrokerageQualityAssurance{
	public static void main(String[] args) {

		String ontologyHost = "http://nebulous-ontology-server:80";
		System.out.println(ontologyHost);
		OntologyConnection.getInstance(ontologyHost);
		EXNConnection.getInstance();
		System.out.println("After");
		SpringApplication.run(BrokerageQualityAssurance.class, args);
	}


}
