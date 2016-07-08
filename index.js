require('dotenv').load({silent: true});
var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000;

app.use(cors())
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({limit : "50mb", extended: false }))
app.use(bodyParser.json({limit : "50mb"}))
// app.set('view engine', 'pug');

require('./server/routes/sendEmail.js')(app)

app.get('/', function (req, res) {
  res.render('./index.html');
});

app.listen(port, function () {
	var host = this.address().address;
	var x = this.address().port;
	console.log('Example app listening on port', host, x);
});