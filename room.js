const Room = function(area, isPainted) {
    this.area = area;
    this.isPainted = isPainted;
}

Room.prototype.painted = function() {
    this.isPainted = true;
}


module.exports = Room;