var express = require('express');
var app = express();
var server = require('http').createServer(app).listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(client){
	client.emit('welcome', {greetings:'Welcome to Chat Room!'});
	client.on('message', broadcastMessage);
	client.on('user-join', registerUsername);

	function broadcastMessage(msg){
		client.get('username', function(err, username){
			if(!username)
			username = DEFAULT_USERNAME;
		var broadcastMsg = {
			msgOwner:username,
			msgContent:msg
		};
		client.broadcast.emit('message', broadcastMsg);
		});
	}

	function registerUsername(username){
		client.set('username', username);
		var systemInfo = {
			msgOwner:'System',
			msgContent:'Your current username is ' + username
		};
		client.emit('info', systemInfo);
	}
});
app.use(express.static(__dirname + '/public'));
app.get('/js/socket.io.js', function(req, res) {
	res.setHeader('Content-Type', 'text/javascript');
	res.sendfile('node_modules/socket.io/node_modules/socket.io-client/dist/socket.io.js');
});
app.post('/command', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({result: 'Hello world\nMulti-line!!'}));
});


//var server = app.listen(3000, function() {
//	console.log('Listening on port %d', server.address().port);
//});
