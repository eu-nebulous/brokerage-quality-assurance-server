package org.seerc.nebulous.bqa.rest;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.apache.qpid.protonj2.client.Message;
import org.apache.qpid.protonj2.client.exceptions.ClientException;
import org.junit.rules.Timeout;
import org.seerc.nebulous.bqa.components.Policy;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import eu.nebulouscloud.exn.Connector;
import eu.nebulouscloud.exn.core.Consumer;
import eu.nebulouscloud.exn.core.Context;
import eu.nebulouscloud.exn.core.Handler;
import eu.nebulouscloud.exn.core.Publisher;
import eu.nebulouscloud.exn.handlers.ConnectorHandler;
import eu.nebulouscloud.exn.settings.StaticExnConfig;

public class EXNConnection {
	
	private static EXNConnection singleton = null;
	private static ConnectorHandler connectionHandler;
	private static Handler metaConstraintsHandler;
	private static Connector conn;
	private static Publisher bqaVerification;
	private static Consumer metaConstraints;
    private static OntologyConnection ontology = OntologyConnection.getInstance();
    
	private EXNConnection() {
		
	
		connectionHandler = new ConnectorHandler() {
			@Override
			public void onReady(Context context) {
				super.onReady(context);
				
			}
		};
		metaConstraintsHandler = new Handler() {
		    @SuppressWarnings("unchecked")
			@Override
		    public void onMessage(String key, String address, Map body, Message message, Context context) {
		    	
		    	
		    	ObjectMapper objectMapper = new ObjectMapper();
		    	Map<String, Object> map = null;
				try {
					String uuid = (String) message.property("application");
					ontology.removePolicy(uuid);

					map = objectMapper.readValue((String) body.get("slMetaConstraints"), new TypeReference<Map<String,Object>>(){});
			        
					
					if(ontology.countInstances("{POLICY_" + uuid + "}") > 0) {
						for(String indName : ontology.getInstances("partOf value POLICY_" + uuid)) {
							System.out.println(indName);
							ontology.deleteIndividual(indName);
						}
						ontology.deleteIndividual("POLICY_" + uuid);
					}
					
//					
//					System.out.println(map.get("children"));
					if(((List) map.get("children")).size() == 1)
						map = (Map<String, Object>) ((List) map.get("children")).get(0);
					
					Policy p = Policy.ConstructPolicy(map, uuid); //fix!
//			        System.out.println(p.getRules());
					while(!ontology.createPolicy(p));
				
					
					OntologyConnection.addPolicy(uuid, message.correlationId().toString());
//					System.out.println("POLICY: " + p);
				} catch (JsonProcessingException | ClientException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		    }
		};

		bqaVerification = new Publisher("bqa-reply", "eu.nebulouscloud.ontology.bqa.reply", true, true);
		metaConstraints = new Consumer("bqa",        "eu.nebulouscloud.ontology.bqa", metaConstraintsHandler, true, true);
		
		conn = new Connector("eu", connectionHandler , List.of(bqaVerification), List.of(metaConstraints), new StaticExnConfig("nebulous-activemq",5672,"admin","admin",5));

		conn.start();
		

	}
	public static EXNConnection getInstance() {
		if(singleton == null)
			singleton = new EXNConnection();
		
		return singleton;
	}
	
	public void sendValidation(String uuid, String correlationId, boolean valid) {
     
		bqaVerification.send(Map.of("uuid", uuid, "valid", valid, "message", 
			valid ? "The application is valid" : "The application is not valid"),
			uuid,  Map.of("correlation-id", correlationId));
	
	}
	
}

