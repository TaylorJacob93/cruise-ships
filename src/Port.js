(function exportPort(){
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
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
}());
