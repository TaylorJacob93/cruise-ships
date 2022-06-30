const itinerary = require('../src/Itinerary.js');

class Ship{
    constructor(itinerary){
        this.itinerary = itinerary;
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
        this.currentPort.addShip(this);
    }


    setSail() {
        const itinerary = this.itinerary;
        const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

        if (currentPortIndex === (itinerary.ports.length - 1)) {
            throw new Error('End of itinerary reached');
    }
        this.previousPort = this.currentPort;
        this.currentPort.removeShip(this);
        this.currentPort = null;
        
    }
    
    dock(){
        const indexOfPreviousPort = this.itinerary.ports.indexOf(this.previousPort);
        const indexOfNextPort = indexOfPreviousPort + 1;
        this.currentPort = this.itinerary.ports[indexOfNextPort];
        this.currentPort.addShip(this);

    }
}
module.exports = Ship;