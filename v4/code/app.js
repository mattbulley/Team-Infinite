/**
 * The main app. Includes functions for processing input and output data
 * within the user interface.
 */

let grid = new Grid();
let exchangeList = new ExchangeList();

function submitExchange() {
  let gridX = parseInt($('#gridX').val());
  let gridY = parseInt($('#gridY').val());

  try {
    grid.setSize(gridX, gridY);
  } catch (exception) {
    alert(exception);
    return;
  }

  let idPart1 = $('#exchangeIdPart1').val();
  let idPart2 = $('#exchangeIdPart2').val();
  let capacity = $('#exchangeCapacity').val();
  let x = $('#exchangeX').val();
  let y = $('#exchangeY').val();
  
  let exchange = new Exchange();

  try {
    exchange.set(idPart1, idPart2, capacity, x, y, grid);
  } catch (exception) {
    alert(exception);
    return;
  }
  
  try {
    exchangeList.add(exchange);
  } catch (exception) {
    alert(exception);
    return;
  }

  $('#exchangeX').val('');
  $('#exchangeY').val('');
  $('#exchangeCapacity').val('');
}

function submitForm() {
  $('#outputMessage').text('');

  try {
    let exchange = exchangeList.getNearestExchange();

    $('#outputMessage').text('Nearest exchange: ' + exchange.getId() +
                             ', distance: ' + exchange.calculateDistance());

    createExchangeGrid();
  } catch (exception) {
    alert(exception);
    return;
  }
}

function createExchangeGrid() {
  $('#exchangeGrid').empty();

  for (let i = 0; i < grid.getX(); i++) {
    let rowId = 'r' + i;
    $('#exchangeGrid').append($('<tr id="' + rowId + '"></tr>'));

    for (let j = 0; j < grid.getY(); j++) {
      let columnId = rowId + 'c' + j;
      $('#' + rowId).append($('<td id="' + columnId + '"></td>'));
      $('#' + columnId).append($('<p></p><p></p>'));
    }
  }

  let homeId = 'r0c0';
  $('#' + homeId + ' p:first').text('home');

  let exchanges = exchangeList.getExchanges();

  for (let i = 0; i < exchanges.length; i++) {
    let id = exchanges[i].getId();
    let location = exchanges[i].getLocation();
    let distance = exchanges[i].calculateDistance();
    
    let columnId = 'r' + location.x + 'c' + location.y;
    
    if (columnId === homeId) {
      $('#' + columnId + ' p:first').text('home, ' + id);
    } else {
      if ($('#' + columnId + ' p:first').text().length === 0) {
        $('#' + columnId + ' p:first').text(id);
      }
    }
    $('#' + columnId + ' p:last').text('d = ' + distance);
  }

  $('#exchangeGrid').show();
}

$(document).ready(function() {
  for (let i = 0; i < 10; i++) {
    $('#exchangeIdPart1').append($('<option></option>').attr('value', i).text(i));
    $('#exchangeIdPart2').append($('<option></option>').attr('value', i).text(i));
  }
});