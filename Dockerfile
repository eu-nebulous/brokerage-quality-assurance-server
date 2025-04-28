FROM maven:3.9.5-eclipse-temurin

WORKDIR /bqa-server

COPY src/ src/
COPY pom.xml .

RUN mvn package -Dmaven.test.skip

WORKDIR /bqa-server/target


CMD ["java", "-jar", "nebulous-ont-0.0.1-SNAPSHOT.jar", "http://localhost:80", "http://localhost:8081"]

EXPOSE 8081