
const express = require("express");
const http = require("http");

const app = express();
const httpServer = http.createServer(app);
const socketIO = require('socket.io')(httpServer, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

socketIO.on('connection',socket=>{
    const id = socket.handshake.query.id;
    socket.join(id);

    socket.on('send-message', ({recipients,text})=>{
        recipients.forEach(recipient =>{
            const newRecipients = recipients.filter(r => r !== recipient)
            newRecipients.push(id);
            socket.broadcast.to(recipient).emit('receive-message', {
                recipients: newRecipients, sender: id, text
            })
        })
    })
})
httpServer.listen(5000);