(function exportController() {
  class Controller {
    constructor(ship) {
      this.ship = ship;
      this.initialiseSea;

      document.querySelector('#sailButton').addEventListener('click', () => {
        this.setSail();
      });
    }

    renderPorts(ports) {
      const portsElement = document.querySelector("#ports");
      portsElement.style.width = '0px';

      ports.forEach((port, index) => {
        const newPortElement = document.createElement('div');
        newPortElement.className = 'port';
        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;
        portsElement.appendChild(newPortElement);
        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;
      });
    }
    initialiseSea() {
      const backgrounds = [
        './images/water0.png',
        './images/water1.png',
      ];
      let backgroundIndex = 0;
      window.setInterval(() => {
        document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
        backgroundIndex += 1;
      }, 1000);
    }
  
    renderShip(){
      const ship = this.ship

      const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
      const shipElement = document.querySelector('#ship');
      
      shipElement.style.top = `${portElement.offsetTop + 32}px`;
      shipElement.style.left = `${portElement.offsetLeft - 32}px`;
  }
  setSail(){
    this.ship = ship;

    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    let nextPortIndex = currentPortIndex + 1;
    let nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);

    this.rendermessage(`Now departing ${ship.currentPort.name}!`);

    const shipElement = document.querySelector('#ship');
    const sailInterval = setInterval(() => {
    const shipLeft = parseInt(shipElement.style.left, 10);

    if (shipLeft === (nextPortElement.offsetLeft - 32)) {
    ship.setSail();
    ship.dock();
    this.rendermessage(`Ship has docked at ${ship.currentPort.name}!`);
    clearInterval(sailInterval);
  }

    shipElement.style.left = `${shipLeft + 1}px`;
    }, 20);

    nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);

    if (!nextPortElement) {
      this.rendermessage(`${ship.currentPort.name} is the end of the line!`);
    }
  }
  rendermessage(messageElement){
    const message = document.createElement('div');
    
    message.id = 'message';
    message.innerHTML = messageElement;

    const viewPort = document.querySelector('#viewport');
    viewPort.appendChild(message);


    setTimeout(() => {
    viewPort.removeChild(message)
    }, 2000);

  }
}
  
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Controller;
} else {
  window.Controller = Controller;
}
}());