const Decorator = function() {
    this.paintStock = [];
}

Decorator.prototype.addCan = function(can) {
    this.paintStock.push(can);
}

Decorator.prototype.totalPaint = function() {
    let sum = 0;
    for (var can of this.paintStock) {
        sum += can.litres;
    }
    return sum;
}




module.exports = Decorator;