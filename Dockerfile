FROM openjdk:18
EXPOSE 8080
ADD target/cloud-maturity-docker.jar cloud-maturity-docker.jar
ENTRYPOINT ["java", "-jar", "/cloud-maturity-docker.jar"]