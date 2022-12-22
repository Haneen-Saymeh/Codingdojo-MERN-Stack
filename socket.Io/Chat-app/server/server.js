// server.js
const express = require('express');
const app = express();
 
const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000')
);
 
// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server, { cors: true });
io.on("connection", socket=>{
  socket.on("start", data=>socket.emit("start", "Welcome to the Chat"));
  socket.on("join", data=>socket.broadcast.emit("join", "joined the chat"));
  
  
    socket.on("chat", data=>io.emit("chat", data));
})