package org.seerc.nebulous.bqa.rest;

import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.seerc.nebulous.bqa.components.ComparisonOperator;
import org.seerc.nebulous.bqa.components.SimpleConstraint;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

public class OntologyConnection{

	private static OntologyConnection singleton = null;
	
	private WebClient client;

	private OntologyConnection(String host) {
		System.out.println(host);

		client = WebClient.create(host);
			
	}
	
	public static OntologyConnection getInstance(String host) {
		if(singleton == null)
			singleton = new OntologyConnection(host);
		
		
		return singleton;
	}
	
	public static OntologyConnection getInstance() {
		return singleton;
	}

	public void getSimpleConstraintBqa(SimpleConstraint constraint, String constraintName) {
		constraint.setFirstArgument(getInstances("inverse%20leftOperand%20value%20" + constraintName).get(0));
		Object secArg = getDataProperty(constraintName, "odrl:rightOperand").get(0); //FIX 
		if(secArg instanceof String)
			constraint.setSecondArgument(((String) secArg).split("\"")[1]);
		else
			constraint.setSecondArgument(secArg);
		constraint.setOperator(ComparisonOperator.valueOf((String) getInstances("inverse%20operator%20value%20" + constraintName).get(0)));
	}
	
	public void getSimpleConstraintSla(SimpleConstraint constraint, String constraintName) {
		constraint.setFirstArgument(getInstances("inverse%20firstArgument%20value%20" + constraintName).get(0));
		Object secArg = getDataProperty(constraintName, "owlq:secondArgument").get(0); //FIX 
		if(secArg instanceof String)
			constraint.setSecondArgument(((String) secArg).split("\"")[1]);
		else
			constraint.setSecondArgument(secArg);
		constraint.setOperator(ComparisonOperator.valueOf((String) getInstances("inverse%20operator%20value%20" + constraintName).get(0)));
	}
	public String createIndividual(String individualURI, String classURI) {
		return client.post().uri(URI.create("/create/individual"))
				.accept(MediaType.APPLICATION_JSON)
				.contentType(MediaType.APPLICATION_JSON)
				.body(BodyInserters.fromValue(new CreateIndividualPostBody (individualURI, classURI)))
			    .retrieve().bodyToMono(String.class).block();
	}
	
	public String createIndividualExpression(String individualURI, String classURI) {
		return client.post().uri(URI.create("/create/individual/expression"))
				.accept(MediaType.APPLICATION_JSON)
				.contentType(MediaType.APPLICATION_JSON)
				.body(BodyInserters.fromValue(new CreateIndividualPostBody (individualURI, classURI)))
			    .retrieve().bodyToMono(String.class).block();
	}
	
	public String createObjectProperty(String objectPropertyURI, String domainURI, String rangeURI) {
		return client.post().uri(URI.create("/create/objectProperty"))
				.accept(MediaType.APPLICATION_JSON)
				.contentType(MediaType.APPLICATION_JSON)
				.body(BodyInserters.fromValue(new CreateObjectPropertyPostBody(objectPropertyURI, domainURI, rangeURI)))
			    .retrieve().bodyToMono(String.class).block();
	}
	
	public String createDataProperty(String dataPropertyURI, String domainURI, Object value) {
		return client.post().uri(URI.create("/create/dataProperty"))
				.accept(MediaType.APPLICATION_JSON)
				.contentType(MediaType.APPLICATION_JSON)
				.body(BodyInserters.fromValue(new CreateDataPropertyPostBody(dataPropertyURI, domainURI, value)))
			    .retrieve().bodyToMono(String.class).block();
	}
	
	public int countInstances(String dlQuery) {
		return client.get().uri(URI.create("/countInstances?dlQuery=" + dlQuery))
					.retrieve().bodyToMono(Integer.class).block();
	}
	public String createClassExpressionClass(String classURI, String classExpression) {
		return client.post().uri(URI.create("/create/class/expression"))
				.accept(MediaType.APPLICATION_JSON)
				.contentType(MediaType.APPLICATION_JSON)
				.body(BodyInserters.fromValue(new CreateClassExpressionClassPostBody(classURI, classExpression)))
			    .retrieve().bodyToMono(String.class).block();
	}
	public List<String> getInstances(String dlQuery) {
		return new ArrayList<String>(Arrays.asList(client.get().uri(URI.create("/get/instances?dlQuery=" + dlQuery))
				.retrieve().bodyToMono(String[].class).block()));
	}
	public boolean dataPropertyExists(String dataProperty) {
		return client.get().uri(URI.create("/exists/dataProperty?dataProperty=" + dataProperty))
				.retrieve().bodyToMono(Boolean.class).block();
	}
	public boolean classExists(String cls) {
		return client.get().uri(URI.create("/exists/class?class=" + cls))
				.retrieve().bodyToMono(Boolean.class).block();
	}
	
	
	public List<String> getSuperClasses(String dlQuery) {
		return new ArrayList<String>(Arrays.asList(client.get().uri(URI.create("/get/superclasses?dlQuery=" + dlQuery ))
				.retrieve().bodyToMono(String[].class).block()));
	}
	public List<String> getSubClasses(String dlQuery) {
		return new ArrayList<String>(Arrays.asList(client.get().uri(URI.create("/get/subclasses?dlQuery=" + dlQuery ))
				.retrieve().bodyToMono(String[].class).block()));
	}
	public List<String> getEquivalentClasses(String dlQuery) {
		return new ArrayList<String>(Arrays.asList(client.get().uri(URI.create("/get/equivalentClasses?dlQuery=" + dlQuery ))
				.retrieve().bodyToMono(String[].class).block()));
	}
	
	public List<Object> getDataProperty(String individualName, String dataProperty) {
		return Arrays.asList(client.get().uri(URI.create("/get/dataProperty?individualName=" + individualName + "&dataProperty=" + dataProperty))
				.retrieve().bodyToMono(Object[].class).block());
	}
	public List<DataPropertyValuesResult> getDataPropertyValues(String individualName, String dataProperty) {
		return Arrays.asList(client.get().uri(URI.create("/get/dataProperty/values?individualName=" + individualName + "&dataProperty=" + dataProperty))
				.retrieve().bodyToMono(DataPropertyValuesResult[].class).block());
	}
	
}
