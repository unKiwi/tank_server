const Tank = require('./tank');

module.exports = class Player {
    constructor() {
        this.tank = new Tank(0, 0);
    }
}