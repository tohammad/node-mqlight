var mqlight = require('mqlight');

var recvClient = mqlight.createClient({service: 'amqp://localhost:5674'});

var topicPattern = 'public';
recvClient.on('started', function() {
  recvClient.subscribe(topicPattern);
  recvClient.on('message', function(data, delivery) {
    console.log('Recv: %s', data);
  });
});