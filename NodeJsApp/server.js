const express = require('express');
const bodyParser = require('body-parser');
const amqp = require('amqplib/callback_api');
const app = express();
const port = 8800;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
amqp.connect('amqp://api-user:qwerty008@rabbitmq/', function(error, connection) {
    require('./app/routes')(app, connection);
});
app.listen(port);
console.log("Server started at " + port);