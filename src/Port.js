class Port{
    constructor(name){
        this.name = name; 
        this.shipList = [];
        }
    addShip(ship){
        this.shipList.push(ship);
    }
    removeShip(ship){
        this.shipList.pop(ship);
    }
}

module.exports = Port;