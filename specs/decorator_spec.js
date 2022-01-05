const assert = require('assert');
const Decorator = require('../decorator');
const Paint = require('../paint');
const Room = require('../room');

describe('Decorator', function() {

    let decorator;
    let paint;
    let paint1;
    let room;

    beforeEach(function() {
        decorator = new Decorator()
    });

    it('should start with an empty paint stock', function() {
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to add a can of paint to paint stock', function() {
        paint = new Paint(5);
        decorator.addCan(paint);
        const actual = decorator.paintStock.length;
        assert.strictEqual(actual, 1);
    });

    it('should be able to calculate total litres paint it has in stock', function() {
        paint = new Paint(5);
        paint1 = new Paint(10);
        decorator.addCan(paint);
        decorator.addCan(paint1);
        const actual= decorator.totalPaint();
        assert.strictEqual(actual, 15);
    });

    it('should be able to calculate whether has enough paint to paint room', function() {
        room = new Room(10, false);
        paint = new Paint(10)
        const actual = decorator.hasEnoughPaint(room, paint);
        assert.strictEqual(actual, true);

    });
});
