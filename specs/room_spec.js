const assert = require('assert');
const Room = require('../room');

describe('Room', function() {

    let room;
    beforeEach(function() {
        room = new Room(10, false)
    });

    it('should have an area in squar metres', function() {
        const actual = room.area;
        assert.strictEqual(actual, 10);
    });

    it('should start not painted', function() {
        const actual = room.isPainted;
        assert.strictEqual(actual, false);
    });

    it('should be able to be painted', function() {
        room.painted();
        const actual = room.isPainted;
        assert.strictEqual(actual, true);
    });
});