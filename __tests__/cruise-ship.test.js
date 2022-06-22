const Ship = require('../src/Ship.js');

describe('Ship', () => {
    it('instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a starting point', () => {
        const ship = new Ship('Dover');
        expect(ship.startingPort).toBe('Dover');
    })
});