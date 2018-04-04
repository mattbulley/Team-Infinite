/**
 * Grid class. Represented as a two dimensional integer grid cell,
 * defined by dynamically set x and y lengths.
 */
function Grid() {
  const MIN_X = 0;
  const MIN_Y = 0;
  const MAX_X = 100000;
  const MAX_Y = 100000;

  let x = 0;
  let y = 0;

  this.setSize = function(x, y) {
    this.setX(x);
    this.setY(y);
  }

  this.setX = function(newX) {
    newX = parseInt(newX);

    if (newX >= MIN_X && newX <= MAX_X) {
      x = newX;
    } else {
      throw 'Grid size X must be between ' + MIN_X + ' and ' + MAX_X + '.';
    }
  }

  this.setY = function(newY) {
    newY = parseInt(newY);
    
    if (newY >= MIN_Y && newY <= MAX_Y) {
      y = newY;
    } else {
      throw 'Grid size Y must be between ' + MIN_Y + ' and ' + MAX_Y + '.';
    }
  }

  this.getX = function() { return x; }
  this.getY = function() { return y; }
  this.getMinX = function() { return MIN_X; }
  this.getMinY = function() { return MIN_Y; }
}