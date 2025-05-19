package org.seerc.nebulous.bqa.rest;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.reactive.function.client.WebClient;

public class SLAConnection{

	private static SLAConnection singleton = null;
	
	private WebClient client;

	private SLAConnection() {
		client = WebClient.create("http://nebulous-service-level-agreement-generator:8081"); //localhost:80
			
	}
	
	public static SLAConnection getInstance() {
		if(singleton == null)
			singleton = new SLAConnection();
		

		return singleton;
	}
	
	public List<String> getMetrics(String assetName) {
		return Arrays.asList(client.get().uri("get/metrics?slaName=" + assetName).retrieve().bodyToMono(String[].class).block());
	}
	
}
