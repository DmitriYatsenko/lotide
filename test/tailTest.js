const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
    it("returns [2, 3] for [1, 2, 3]", () => {
        assert.strictEqual(tail([1, 2, 3]), [2, 3]);
    });
    it("returns '5' for ['5']", () => {
        assert.strictEqual(tail(['5']), []);
    });
});