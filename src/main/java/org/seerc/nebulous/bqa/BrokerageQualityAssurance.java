package org.seerc.nebulous.bqa;

import org.seerc.nebulous.bqa.rest.EXNConnection;
import org.seerc.nebulous.bqa.rest.OntologyConnection;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.reactive.function.client.WebClient;

@SpringBootApplication
public class BrokerageQualityAssurance{
	public static void main(String[] args) {
		
		System.out.println("Tryingo request to ontology server");
		System.out.println(String.format("Base URL: \"%s\"", args[0]));
		
		WebClient c = WebClient.create(args[0]);
		String ret = c.get().uri("/").retrieve().bodyToMono(String.class).block();
		System.out.println(String.format("Request  to ontology server done %s",ret));	

		System.out.println("Ontology URL: " + args[0]);
		OntologyConnection oc = OntologyConnection.getInstance( args[0]);
		int res = oc.countInstances("Thing");
		System.out.println(String.format("oc.countInstances %d",res));
		EXNConnection.getInstance();
		System.out.println("Set up Complete.");
		SpringApplication.run(BrokerageQualityAssurance.class, args);
	}


}
