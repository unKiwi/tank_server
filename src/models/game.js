const Map = require('./map');
const Player = require('./player');

module.exports = class Game {
    tps = 20;
    map = new Map();
    players = {};

    constructor(io) {
        this.io = io;
        setInterval(() => {
            io.emit("state", this.getState());
        }, 1000 / this.tps);
    }

    getState() {
        let tanks = {}
        Object.keys(this.players).forEach(key => {
            tanks[key] = this.players[key].tank;
        });
        return {
            map: this.map,
            tanks: tanks,
        }
    }

    addPlayer(socket) {
        socket.emit("id", socket.id)
        this.players[socket.id] = new Player(this.map);
        console.log(this.getState())
    }

    deletePlayer(socket) {
        delete this.players[socket.id];
    }
}