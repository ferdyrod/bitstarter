var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var msg = fs.readFileSync('./index.html');
  var buf = new Buffer (msg);
  response.send(buf.tostring('utf-8',0,buf.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
