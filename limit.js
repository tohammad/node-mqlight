var mqlight = require('mqlight');
var opts = {
  service: "amqp://localhost:5674"
};

for (var i = 1; i <= 50; ++i) {
  client = mqlight.createClient(opts);
  var printStarted = function(count) {
    return function() {console.log('Client ' + count + ' started');};
  }
  var printError = function(count) {
    return function(error) {
      console.log('Client ' + count + ' failed to start due to ' + error);
    };
  };
  client.on('started', printStarted(i));
  client.on('error', printError(i));
}