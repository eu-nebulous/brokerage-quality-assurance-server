package org.seerc.nebulous.bqa;

import org.seerc.nebulous.bqa.rest.EXNConnection;
import org.seerc.nebulous.bqa.rest.OntologyConnection;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BrokerageQualityAssurance{
	public static void main(String[] args) {

		System.out.println("Ontology URL: " + args[0]);
		OntologyConnection.getInstance(args[0]);
		EXNConnection.getInstance();
		System.out.println("After");
		SpringApplication.run(BrokerageQualityAssurance.class, args);
	}


}
