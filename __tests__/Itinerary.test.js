const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

describe('Itinerary', () => {
    it('instantiated', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
    it('checks if Itinerary contains ports', ()  => {
        const port1 = jest.fn();
        const port2 = jest.fn();
        const itinerary = new Itinerary([port1, port2])
        expect(itinerary.ports).toEqual([port1, port2])
    })
});