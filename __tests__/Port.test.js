const Port = require('../src/Port.js');

describe("Port", () => {
    it("instantianted", () => {
            expect(new Port()).toBeInstanceOf(Object)
        });
    it("Ports name constructor works", () => {
            const port = new Port('Sydney');
            expect(port.name).toBe('Sydney');
        });
    });