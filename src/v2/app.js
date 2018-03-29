/**
  Exchange data structure:

  exchange = {
 		id: 'ex:0:0',
    location: {
    	x: 3,
      y: 4
    },
    distance: 0
  }
*/

let grid = {
  x: 0,
  y: 0,
  maxX: 100000,
  maxY: 100000
}

let gridSizeX = 0;
let gridSizeY = 0;
let maxGridSizeX = 100000;
let maxGridSizeY = 100000;

function isGridSizeXValid() {
	return grid.x >= 0 && grid.x <= grid.maxX;
}

function isGridSizeYValid() {
	return grid.y >= 0 && grid.y <= grid.maxY;
}

function createExchange(id, xLocation, yLocation) {
  let location = {
    x: parseInt(xLocation),
    y: parseInt(yLocation)
  };

	return {
  	id: id,
    location: location,
    distance: calculateExchangeDistance(location)
  };
}

function createExchangeId(num1, num2) {
	return 'ex:' + num1 + ':' + num2;
}

function isExchangeIdValid(id) {
	return /^ex:[0-9]:[0-9]$/.test(id);
}

function calculateExchangeDistance(location) {
  return location.x + location.y;
}

function isExchangeLocationValid(location) {
	return location.x <= gridSizeX && location.y <= gridSizeY;
}

/**
 * Takes an array of exchanges and returns an output string that either
 * describes the nearest exchange or an error message if validation fails.
 */
function getNearestExchange(exchanges) {
  let nearestExchange = {};

  for (let i = 0; i < exchanges.length; i++) {
    if (!isExchangeIdValid(exchanges[i].id)) {
      return 'Exchange ' + exchanges[i].id + ' has an invalid id.';
    }

    if (!isExchangeLocationValid(exchanges[i].location)) {
      return 'Exchange ' + exchanges[i].id + ' location is out of range.';
    }

    if (i === 0) {
      nearestExchange = exchanges[i];
    } else if (exchanges[i].distance < nearestExchange.distance) {
      nearestExchange = exchanges[i];
    }
  }

  return 'Nearest exchange: ' + nearestExchange.id +
         ', distance: ' + nearestExchange.distance;
}

function submitForm() {
	grid.x = parseInt($('#gridX').val());
  grid.y = parseInt($('#gridY').val());

  if (!isGridSizeXValid()) {
  	alert('Grid size X must be between 0 and ' + grid.maxX + '.');
    return;
  }
  
  if (!isGridSizeYValid()) {
  	alert('Grid size Y must be between 0 and ' + grid.maxY + '.');
    return;
  }
  
  let id1 = createExchangeId($('#ex1_selectA').val(), $('#ex1_selectB').val());
  let exchange1 = createExchange(id1, $('#ex1XPos').val(), $('#ex1YPos').val());
  
  let id2 = createExchangeId($('#ex2_selectA').val(), $('#ex2_selectB').val());
  let exchange2 = createExchange(id2, $('#ex2XPos').val(), $('#ex2YPos').val());

  let response = getNearestExchange([exchange1, exchange2]);
  alert(response);
}