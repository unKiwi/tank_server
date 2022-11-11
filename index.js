const Game = require('./src/models/game');

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const game = new Game(io);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit("id", socket.id);

    socket.on('user data', data => {
        console.log(data)
        // create player
        game.addPlayer(socket);
    });

    socket.on('move', data => {
        console.log(data)
    });

    socket.on('click', () => {
        console.log("click")
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
        // delete player
        game.deletePlayer(socket);
    });
});

server.listen(80, () => {
    console.log('listening on *:80');
});