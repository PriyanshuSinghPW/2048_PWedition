function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  // value now represents an index into a progression array (0 = first stage)
  this.value            = (typeof value !== 'undefined') ? value : 0;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};
