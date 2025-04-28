package org.seerc.nebulous.bqa;

import org.seerc.nebulous.bqa.rest.OntologyConnection;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BrokerageQualityAssurance{
	public static void main(String[] args) {
		
		OntologyConnection.getInstance(args[0]);

		SpringApplication.run(BrokerageQualityAssurance.class, args);
	}

}