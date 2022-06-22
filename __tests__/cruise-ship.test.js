const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const { expect } = require('expect');

describe('Ship', () => {
    it('instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a starting point', () => {
        const port = new Port ('Dover');
        const ship = new Ship(port);
        expect(ship.Port).toBe(port);
    })
    it("setting sail", () => {
        const ship = new Ship(Port);
        ship.setSail();
        expect(ship.Port).toBeFalsy();
    });
});
describe("Dock", () => {
    it("changing dock with dock method", () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);
        const newPort = new Port('Liverpool');

        ship.dock(newPort);

        expect(ship.Port).toBe(newPort);
    });
});