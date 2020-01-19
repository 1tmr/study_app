// This Set initialize core modules for the application
const express = require('express'),
      http = require('http');
// adding new routes
const info = require('./routes/info');

// here we are initializing our application with EXPRESS libraries
var app = express();

app.set('view engine', 'pug');

// this will set a PORT of the application, so we will connect it with
// localhost:3000
app.set('port', 3000);

// this will let us get a return when we open the URL
app.get('/', function (req,res) {
  res.send("HELLO THERE!");
});

app.use('/info', info);

// this deck is initalizing HTTP protocol
http.createServer(app).listen(app.get('port'), function() {
  console.log('running on ' + app.get('port'));
});
