FROM openjdk:8-jdk-alpine

ENV JAR_FILE=spring-rabbit-mq-receiver-0.1.jar

RUN apk update && apk add maven

EXPOSE 8080

WORKDIR /app

COPY . .

RUN mvn clean package

ENTRYPOINT java -jar ./target/$JAR_FILE
