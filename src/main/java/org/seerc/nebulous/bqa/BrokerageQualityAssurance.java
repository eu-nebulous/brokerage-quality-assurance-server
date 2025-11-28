package org.seerc.nebulous.bqa;

import org.seerc.nebulous.bqa.rest.EXNConnection;
import org.seerc.nebulous.bqa.rest.OntologyConnection;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BrokerageQualityAssurance{
	public static void main(String[] args) {
		System.out.println("THIS IS A TEST LINE \n\n");
		OntologyConnection.getInstance("http://nebulous-ontology-server:80");
		EXNConnection.getInstance();
		SpringApplication.run(BrokerageQualityAssurance.class, args);
	}

}
