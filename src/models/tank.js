const config = require("../config");
const utils = require("../utils");

module.exports = class Tank {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.movingDirection = utils.randInt(0, 359);
        this.cannonDirection = utils.randInt(0, 359);
        this.color = {
            r: utils.randInt(config.colorContrast, 255 - config.colorContrast),
            g: utils.randInt(config.colorContrast, 255 - config.colorContrast),
            b: utils.randInt(config.colorContrast, 255 - config.colorContrast),
        }
    }
}