const Paint = function(litres) {
    this.litres = litres;
}

Paint.prototype.isEmpty = function() {
    if (this.litres === 0) {
        return true;
    }
    return false;
}



module.exports = Paint;