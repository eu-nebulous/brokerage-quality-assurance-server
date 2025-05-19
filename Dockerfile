FROM  maven:3.9.5-eclipse-temurin AS build

WORKDIR /bqa-server
COPY src/ src/
COPY pom.xml pom.xml

RUN mvn package -Dmaven.test.skip


#
# Package stage
#
FROM docker.io/library/eclipse-temurin:17-jre
COPY --from=build /bqa-server/target/nebulous-bqa-0.0.1-SNAPSHOT.jar nebulous-sla.jar

ENTRYPOINT ["java", "-jar", "nebulous-sla.jar", "nebulous-ontology-server:80"]
EXPOSE 8081
