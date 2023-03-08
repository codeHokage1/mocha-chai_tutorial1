const assert = require('chai').assert;
const server  = require('../server');

describe("Server Testing", () => {
    it("should return 'hello'", () => {
        const expected = 'hello';
        const result = server.sayHello();
        assert.equal(result, expected);
    });

    it("should return type string", () => {
        const expected = 'string';
        const result = server.sayHello();
        assert.typeOf(result, expected);
    })
})