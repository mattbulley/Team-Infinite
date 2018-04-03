/**
 * Exchange class. Represents an exchange as an id with the format
 * 'ex:[0-9]:[0-9]', customer capacity, and a location [x,y] that fits
 * within a specified grid.
 */
function Exchange() {
  const ID_FORMAT = /^ex:[0-9]:[0-9]$/;
  const MIN_CAPACITY = 0;
  const MAX_CAPACITY = 999;

  let id = '';
  let capacity = 0;
  let location = { x: 0, y: 0 };

  this.set = function(idPart1, idPart2, capacity, x, y, grid) {
    this.setId(idPart1, idPart2);
    this.setCapacity(capacity);
    this.setLocation(grid, x, y);
  }

  this.setId = function(idPart1, idPart2) {
    let newId = 'ex:' + idPart1 + ':' + idPart2;

    if (ID_FORMAT.test(newId)) {
      id = newId;
    } else {
      throw 'Exchange id \'' + newId + '\' is not valid.';
    }
  }

  this.setCapacity = function(newCapacity) {
    newCapacity = parseInt(newCapacity);

    if (newCapacity >= MIN_CAPACITY && newCapacity <= MAX_CAPACITY) {
      capacity = newCapacity;
    } else {
      throw 'Capacity must be between ' + MIN_CAPACITY + ' and ' + MAX_CAPACITY + '.';
    }
  }

  this.setLocation = function(grid, x, y) {
    x = parseInt(x);
    y = parseInt(y);
    let gridX = grid.getX();
    let gridY = grid.getY();

    if (x >= grid.getMinX() && x < gridX &&
        y >= grid.getMinY() && y < gridY) {
      location.x = x;
      location.y = y;
    } else {
      throw 'Location [' + x + ',' + y + '] is out of the grid range [' + gridX + ',' + gridY + '].';
    }
  }

  this.getId = function() { return id; }
  this.getCapacity = function() { return capacity; }
  this.getLocation = function() { return location; }
  this.calculateDistance = function() { return location.x + location.y; }
}