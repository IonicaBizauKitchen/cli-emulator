var port = Number(process.env.PORT || 3000),
    express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/public'));
app.get('/js/socket.io.js', function(req, res) {
	res.setHeader('Content-Type', 'text/javascript');
	res.sendfile('node_modules/socket.io/node_modules/socket.io-client/dist/socket.io.js');
});

server.listen(port, function() {
	console.log("Express server lisening on port %d", server.address().port);
});

io.sockets.on('connection', function(client){
	client.on('user-join', registerUsername);
	client.on('stdin', receiveCommand);
	client.on('stdout', commandResponse);

	function registerUsername(username){
		if (username == 'user') client.join('user')
		if (username == 'command') client.join('command')
	}
	function receiveCommand(msg) {
		console.log(msg);
		client.broadcast.to('command').emit('stdin', msg.command);
	}
	function commandResponse(msg) {
		console.log(msg);
		client.broadcast.to('user').emit('stdout', msg.command);
	}
});
