/**
  Exchange data structure:

  exchange = {
 		id: 'ex:0:0',
    location: {
    	x: 3,
      y: 4
    }
  }
*/

let gridSizeX = 0;
let gridSizeY = 0;
let maxGridSizeX = 100000;
let maxGridSizeY = 100000;

function isGridSizeXValid() {
	return gridSizeX >= 0 && gridSizeX <= maxGridSizeX;
}

function isGridSizeYValid() {
	return gridSizeY >= 0 && gridSizeY <= maxGridSizeY;
}

function calculateDistance(exchange) {
	return exchange.location.x + exchange.location.y;
}

function getNearestExchangeId(exchange1, exchange2) {
	let distance1 = calculateDistance(exchange1);
  let distance2 = calculateDistance(exchange2);
  
  if (distance1 <= distance2) {
  	return exchange1.id;
  } else {
  	return exchange2.id;
  }
}

function createExchange(id, xLoc, yLoc) {
	return {
  	id: id,
    location: {
    	x: parseInt(xLoc),
      y: parseInt(yLoc)
    }
  };
}

function createExchangeId(num1, num2) {
	return 'ex:' + num1 + ':' + num2;
}

function isExchangeIdValid(exchange) {
	return /^ex:[0-9]:[0-9]$/.test(exchange.id);
}

function isExchangeLocationValid(exchange) {
	return exchange.location.x <= gridSizeX &&
  			 exchange.location.y <= gridSizeY;
}

function submitForm() {
	gridSizeX = parseInt($('#gridX').val());
  gridSizeY = parseInt($('#gridY').val());

	let id1 = createExchangeId($('#ex1_selectA').val(), $('#ex1_selectB').val());
  let exchange1 = createExchange(id1, $('#ex1XPos').val(), $('#ex1YPos').val());
  
  let id2 = createExchangeId($('#ex2_selectA').val(), $('#ex2_selectB').val());
  let exchange2 = createExchange(id2, $('#ex2XPos').val(), $('#ex2YPos').val());
  
  if (!isGridSizeXValid()) {
  	alert('Grid size X must be between 0 and ' + maxGridSizeX + '.');
    return;
  }
  
  if (!isGridSizeYValid()) {
  	alert('Grid size Y must be between 0 and ' + maxGridSizeY + '.');
    return;
  }
  
  if (!isExchangeIdValid(exchange1)) {
  	alert('Exchange 1 id is invalid.');
    return;
  }
  
  if (!isExchangeIdValid(exchange2)) {
  	alert('Exchange 2 id is invalid.');
    return;
  }
  
  if (exchange1.id === exchange2.id) {
  	alert('Exchange ids must be different.');
    return;
  }
  
  if (!isExchangeLocationValid(exchange1)) {
  	alert('Exchange 1 location is out of range.');
    return;
  }
  
  if (!isExchangeLocationValid(exchange2)) {
  	alert('Exchange 2 location is out of range.');
    return;
  }
  
  if (calculateDistance(exchange1) <= calculateDistance(exchange2)) {
  	alert(exchange1.id);
  } else {
  	alert(exchange2.id);
  }
}