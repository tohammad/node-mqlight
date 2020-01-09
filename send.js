var mqlight = require('mqlight');
const sendClient = mqlight.createClient({service: 'amqp://localhost:5674'});
for (var i = 1; i <= 3; ++i) {
  let topic = 'public';
  sendClient.on('started', function() {
  
  });

  sendClient.send(topic, 'Hello World!', function (err, data) {
    console.log('Sent: %s', data);
    sendClient.stop();
  });

  sendClient.send(topic, 'Hello World111!', function (err, data) {
    console.log('Sent: %s', data);
    sendClient.stop();
  });
}