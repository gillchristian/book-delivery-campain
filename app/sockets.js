'use strict';

module.exports = socketsHadlers;

/**
 * Set the socket events and handlers
 *
 * @param {object}  http server
 */
function socketsHadlers(http){
  // --- counter sockets ---
  var io = require('socket.io')(http);
  var bookCount = 10000; // TODO grab real number, backup system
  io.on('connection', socket => {
    // emit the current count to every user when it conects
    io.emit('current count', bookCount);

    // increase book count and emit new amount to all users
    socket.on('add books', count =>{
      bookCount += count || 1;
      io.emit('increase count', bookCount);
    });
  });

  const contenders = [
    {id: 1, name: 'Batman', selected: false, votes: 0},
    {id: 2, name: 'Superman', selected: false, votes: 0},
  ];
  // --- counter sockets ---
  io.on('connection', socket => {
    let current = JSON.stringify(contenders);
    io.emit('current contenders set', current);

    socket.on('vote', voted => {
      contenders.map(item => {
        if(item.id == voted)
          item.votes++;
      })
    });

  });
}
