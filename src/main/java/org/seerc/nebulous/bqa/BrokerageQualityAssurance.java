package org.seerc.nebulous.bqa;

import org.seerc.nebulous.bqa.rest.EXNConnection;
import org.seerc.nebulous.bqa.rest.OntologyConnection;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BrokerageQualityAssurance{
	public static void main(String[] args) {
		
		OntologyConnection.getInstance(args[0]);
		System.out.println(args[0]);
		EXNConnection.getInstance();
		SpringApplication.run(BrokerageQualityAssurance.class, args);
	}

}