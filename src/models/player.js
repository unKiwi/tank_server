const utils = require('../utils');
const Tank = require('./tank');

module.exports = class Player {
    constructor(map) {
        this.tank = new Tank(
            utils.randInt(0, map.width) + 0.5,
            utils.randInt(0, map.height) + 0.5,
        );
    }
}