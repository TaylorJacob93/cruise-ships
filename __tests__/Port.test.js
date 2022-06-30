const Port = require('../src/Port.js');

describe("Port", () => {
    it("instantianted", () => {
        const port = new Port('Dover');
            expect(new Port()).toBeInstanceOf(Object)
        });
    
    it("Ports name constructor works", () => {
            const port = new Port('Sydney');
            expect(port.name).toBe('Sydney');
        });
    it('adds ship correctly to port', () => {
        const port = new Port('Dover');
        const ship = jest.fn()
        port.addShip(ship);

        expect(port.shipList).toContain(ship);
    });
    it('removes a ship correctly', () => {
        const port = new Port('Dover');
        const titanic = jest.fn();
        const sailboat = jest.fn();

        port.addShip(titanic);
        port.addShip(sailboat);
        port.removeShip(sailboat);

        expect(port.shipList).toEqual([titanic]);
    });
});