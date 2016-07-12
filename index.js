require('dotenv').load({silent: true});

var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var server = require('http').createServer(app); 
var io = require('socket.io')(server);
var twitter = require('twitter');

app.use(cors())
app.use(bodyParser.urlencoded({limit : "50mb", extended: false }))
app.use(bodyParser.json({limit : "50mb"}))
app.use(express.static('dist'))

app.set('view engine', 'pug');
app.set('views', './public/pug');

require('./server/routes/sendEmail.js')(app)

app.get('/', function (req, res) {
	res.render('index');
});

server.listen(port, function () {
	var host = this.address().address;
	var x = this.address().port;
	console.log('Example app listening on port', x);
});

// Twitter Stream
var twitterStream = new twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
var stream = null;
var users = [];
var hashtag = '#ColdSpringsFire, #CoWx, #mlb'

io.on("connection", function(socket) {
	if(users.indexOf(socket.id) === -1) {
		users.push(socket.id)
		logConnectedUsers()
	}

	socket.on("disconnect", function(o) {
		var index = users.indexOf(socket.id);
		if(index != -1) {
			users.splice(index, 1);
			logConnectedUsers();
		}
	});


	twitterStream.stream('statuses/filter', { track: hashtag }, function(stream) {
		stream.on('data', function (data) {
			io.sockets.emit('tweet', data.text);
			console.log(data.text);
		});
		stream.on('error', function(error) {
	    	console.log(error);
		}); 
	});
});

// // A log function for debugging purposes
function logConnectedUsers() {
    console.log("CONNECTED USERS " + users.length);
}
