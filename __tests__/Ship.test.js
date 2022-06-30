const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
    describe('with ports and an itinerary', () => {
        let ship;
        let dover;
        let calais;
        let itinerary;

        beforeEach(() => {
             dover = new Port('Dover');
             calais = new Port('Calais');
             itinerary = new Itinerary([dover, calais]);
             ship = new Ship(itinerary);   
        })
        it('instantiated', () => {
            expect(new Ship(itinerary)).toBeInstanceOf(Object);
        });
        it('has a starting port', () => {
            expect(ship.currentPort).toBe(dover);
          });
        it('can set sail', () => {
            ship.setSail();
    
            expect(ship.currentPort).toBeFalsy();
            expect(ship.previousPort).toBe(dover);
            expect(dover.shipList).not.toBe(ship);
          });
        it('gets added to port on instantiation', () => {
            expect(dover.shipList).toContain(ship);
      });
    });
    
    describe('other methods', () => {
  
      it('can\'t sail further than its itinerary', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);
      
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });
    
    it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais])
        const ship = new Ship(itinerary);
      
        ship.setSail();
        ship.dock();
      
        expect(ship.currentPort).toBe(calais);
        expect(calais.shipList).toContain(ship);
      });  
    });
});
