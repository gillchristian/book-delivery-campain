
'use strict';
var express = require('express');
var app     = express();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);

// set static files location ------------------------------------------------
// used for requests that our frontend will make ----------------------------
app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var bookCount = 0;

io.on('connection', function(socket){
  io.emit('current count', bookCount);

  socket.on('add books', function(count){
    bookCount += count || 1;
    io.emit('increase count', bookCount);
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
