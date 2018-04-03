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

let exchanges = [];
let grid = {
  x: 0,
  y: 0,
  maxX: 100000,
  maxY: 100000
}

function isGridSizeXValid() {
	return grid.x >= 0 && grid.x <= grid.maxX;
}

function isGridSizeYValid() {
	return grid.y >= 0 && grid.y <= grid.maxY;
}

function createExchange(id, xLocation, yLocation) {
  let isIdValid = isExchangeIdValid(id);

  if (!isIdValid) {
    return {
        isSuccess: false,
        message: 'Exchange ' + id + ' has an invalid id.'
      };
  }

  let isIdUnique = isExchangeIdUnique(id);

  if (!isIdUnique) {
    return {
        isSuccess: false,
        message: 'Exchange ' + id + ' does not have a unique id.'
      };
  }

  let location = {
    x: parseInt(xLocation),
    y: parseInt(yLocation)
  };

  if (!isExchangeLocationValid(location)) {
    return {
      isSuccess: false,
      message: 'Exchange ' + id + ' location is out of range.'
    };
  }

	exchanges.push({
  	id: id,
    location: location,
    distance: calculateExchangeDistance(location)
  });

  return {
    isSuccess: true
  };
}

function createExchangeId(num1, num2) {
	return 'ex:' + num1 + ':' + num2;
}

function isExchangeIdValid(id) {
	return /^ex:[0-9]:[0-9]$/.test(id);
}

function isExchangeIdUnique(id) {
  for (let i = 0; i < exchanges.length; i++) {
    console.log('id1: ' + id + ', id2: ' + exchanges[i].id);
    if (exchanges[i].id === id) {
      return false;
    }
  }

  return true;
}

function calculateExchangeDistance(location) {
  return location.x + location.y;
}

function isExchangeLocationValid(location) {
	return location.x >= 0 && location.x < grid.x &&
         location.y >= 0 && location.y < grid.y;
}

/**
 * Takes an array of exchanges and returns an output string that either
 * describes the nearest exchange or an error message if validation fails.
 */
function getNearestExchange(gridX, gridY, rawExchangeData) {
  exchanges = [];
  grid.x = gridX;
  grid.y = gridY;

  if (!isGridSizeXValid()) {
    alert('Grid size X must be between 0 and ' + grid.maxX + '.');
    return;
  }
  
  if (!isGridSizeYValid()) {
    alert('Grid size Y must be between 0 and ' + grid.maxY + '.');
    return;
  }

  for (let i = 0; i < rawExchangeData.length; i++) {
    let response = createExchange(rawExchangeData[i].id, rawExchangeData[i].x, rawExchangeData[i].y);

    if (!response.isSuccess) {
      return response;
    }
  }

  let nearestExchange = {};

  for (let i = 0; i < exchanges.length; i++) {
    if (i === 0) {
      nearestExchange = exchanges[i];
    } else if (exchanges[i].distance < nearestExchange.distance) {
      nearestExchange = exchanges[i];
    }
  }

  return {
    isSuccess: true,
    message: 'Nearest exchange: ' + nearestExchange.id +
             ', distance: ' + nearestExchange.distance
  };
}

function createExchangeGrid() {
  $('#grid').empty();

  for (let i = 0; i < grid.x; i++) {
    let rowId = 'r' + i;
    $('#grid').append($('<tr id="' + rowId + '"></tr>'));

    for (let j = 0; j < grid.y; j++) {
      let columnId = rowId + 'c' + j;
      $('#' + rowId).append($('<td id="' + columnId + '"></td>'));
      $('#' + columnId).append($('<p></p><p></p>'));
    }
  }

  let homeId = 'r0c0';
  $('#' + homeId + ' p:first').text('home');

  for (let i = 0; i < exchanges.length; i++) {
    let columnId = 'r' + exchanges[i].location.x + 'c' + exchanges[i].location.y;
    
    if (columnId === homeId) {
      $('#' + columnId + ' p:first').text('home, ' + exchanges[i].id);
    } else {
      if ($('#' + columnId + ' p:first').text().length === 0) {
        $('#' + columnId + ' p:first').text(exchanges[i].id);
      }
    }
    $('#' + columnId + ' p:last').text('d: ' + exchanges[i].distance);
  }
}

function submitForm() {
	let gridX = parseInt($('#gridX').val());
  let gridY = parseInt($('#gridY').val());
  
  let exchange1Id = createExchangeId($('#ex1_selectA').val(), $('#ex1_selectB').val());
  let exchange2Id = createExchangeId($('#ex2_selectA').val(), $('#ex2_selectB').val());
  let exchange1X = $('#ex1XPos').val();
  let exchange1Y = $('#ex1YPos').val();
  let exchange2X = $('#ex2XPos').val();
  let exchange2Y = $('#ex2YPos').val();

  let rawExchangeData = [
    {
      id: exchange1Id,
      x: exchange1X,
      y: exchange1Y,
    },
    {
      id: exchange2Id,
      x: exchange2X,
      y: exchange2Y,
    }
  ];

  let response = getNearestExchange(gridX, gridY, rawExchangeData);

  if (response.isSuccess) {
    createExchangeGrid();
  }

  alert(response.message);
}

$(document).ready(function() {
  for (let i = 0; i < 10; i++) {
    $('#ex1_selectA').append($('<option></option>').attr('value', i).text(i));
    $('#ex1_selectB').append($('<option></option>').attr('value', i).text(i));
    $('#ex2_selectA').append($('<option></option>').attr('value', i).text(i));
    $('#ex2_selectB').append($('<option></option>').attr('value', i).text(i));
  }
});