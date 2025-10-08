package org.seerc.nebulous.bqa.rest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.qpid.protonj2.client.Message;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import eu.nebulouscloud.exn.Connector;
import eu.nebulouscloud.exn.core.Consumer;
import eu.nebulouscloud.exn.core.Context;
import eu.nebulouscloud.exn.core.Handler;
import eu.nebulouscloud.exn.core.Publisher;
import eu.nebulouscloud.exn.core.SyncedPublisher;
import eu.nebulouscloud.exn.handlers.ConnectorHandler;
import eu.nebulouscloud.exn.settings.StaticExnConfig;

public class EXNConnection {
	
	private static EXNConnection singleton = null;
	private static ConnectorHandler h;
	private static Handler h1;
	private static Connector conn;
	private static Publisher fotis;
	private static Consumer f;
	
	private EXNConnection() {
		
	
		h = new ConnectorHandler() {
			@Override
			public void onReady(Context context) {
				super.onReady(context);
				context.getPublisher("eu-ontology-ontology-bqa").send(null, null);
//				context.getPublisher("eu-app-get-publisher").send(Map.of("appId", "e2f237e2-82a5-472b-862f-8017800bd404"));
				
			}
		};
		h1 = new Handler() {
		    @Override
		    public void onMessage(String key, String address, Map body, Message message, Context context) {
		        System.out.println(body);
		    }
		};

		fotis= new Publisher("eu-ontology-ontology-bqa-reply", "eu.nebulouscloud.ontlogy.bqa.reply", true, true);
		f = new Consumer("eu-ontology-ontology-bqa", "eu.nebulouscloud.ontlogy.bqa", h1);
		conn = new Connector("eu", h , List.of(fotis), List.of(), new StaticExnConfig("localhost",5672,"admin","admin",5));

		conn.start();

	}
	public static EXNConnection getInstance() {
		if(singleton == null)
			singleton = new EXNConnection();
		
		return singleton;
	}
	

	
}

