class Ship{
    constructor(startingPort){
        this.startingPort = startingPort;
    }
}
Ship.prototype.setSail = function () {
    if(this.setSail){
        this.startingPort = false;
    }
}
module.exports = Ship;