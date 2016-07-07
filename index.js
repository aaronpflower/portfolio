require('dotenv').load({silent: true});
var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser')

app.use(cors())
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({limit : "50mb", extended: false }))
app.use(bodyParser.json({limit : "50mb"}))

require('./server/routes/sendEmail.js')(app)

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});