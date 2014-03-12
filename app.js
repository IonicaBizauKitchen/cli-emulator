var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.post('/command', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({result: 'Hello world\nMulti-line!!'}));
});

var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});
