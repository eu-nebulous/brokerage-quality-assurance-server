package org.seerc.nebulous.bqa.rest;

import java.net.URI;

import org.seerc.nebulous.bqa.components.SLA;
import org.springframework.web.reactive.function.client.WebClient;

public class SLAConnection {
	private static SLAConnection singleton = null;
	private WebClient client;

	private SLAConnection(String host) {
		client = WebClient.create(host); //localhost:80
	}
	
	public static SLAConnection getInstance(String host) {
		if(singleton == null)
			singleton = new SLAConnection(host);
		return singleton;
	}
	
	public static SLAConnection getInstance() {
		return singleton;
	}
	
	public SLA getSLA(String slaName) {
		System.out.println("SLA");
		return client.get().uri("/query/sla?slaName=" + slaName)
					.retrieve().bodyToMono(SLA.class).block();
	}
}
