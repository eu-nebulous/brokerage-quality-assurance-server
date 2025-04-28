package org.seerc.nebulous.bqa;

import org.seerc.nebulous.bqa.rest.OntologyConnection;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BrokerageQualityAssurance{
	public static void main(String[] args) {
		
		OntologyConnection.getInstance(args[0]);
<<<<<<< HEAD
=======
		System.out.println(args[0]);
>>>>>>> a1fa093ead017f858208806a506ddbe48d6f6846
		SpringApplication.run(BrokerageQualityAssurance.class, args);
	}

}