const assert = require('chai').assert;
const server  = require('../server');

describe("Server Testing", () => {
    it("should return 'hello'", () => {
        assert.equal(server.sayHello(), "hello");
    })
})