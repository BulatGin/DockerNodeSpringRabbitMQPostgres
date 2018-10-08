# DockerNodeSpringRabbitMQPostgres

Simple test application with
- NodeJs as front server,
- Spring as back server
- RabbitMQ for servers communication;

Additionally, application containerized using Docker and Docker Compose.

_______________

Front server receive messages using browser form, then send it to RabbitMQ, from where Spring pull message and print it.
