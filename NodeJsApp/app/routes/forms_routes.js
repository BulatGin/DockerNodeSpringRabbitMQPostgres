bodyParser = require('body-parser').json();

module.exports = function (app, connection) {
	app.post('/forms', bodyParser, function(request, response) {
		var body = request.body;
		console.log(error);
		connection.createChannel(function(error, channel) {
			var queue = 'demo-queue';
			channel.assertQueue(queue);
			console.log(body);
			channel.sendToQueue(queue, new Buffer(JSON.stringify(body)));
			console.log("Sent to MQ");
		});
      response.sendStatus(200);
	});
};