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
		//"http://localhost:808" < OK
		//http://nebulous-ontology-server:80
		//http://nebulous-ontology-server:80
		WebClient c = WebClient.create(args[0]);
		String ret = c.get().uri("/").retrieve().bodyToMono(String.class).block();
		System.out.println(String.format("Request  to ontology server done %s",ret));	

		System.out.println("Ontology URL: " + args[0]);
		//OntologyConnection oc = OntologyConnection.getInstance("localhost:808");
		
		//oc.countInstances("%7BPOLICY_4bd231d6-2092-45c3-985a-7a31425039da%7D");
		
		EXNConnection.getInstance();
		System.out.println("Set up Complete.");
		SpringApplication.run(BrokerageQualityAssurance.class, args);
	}


}
