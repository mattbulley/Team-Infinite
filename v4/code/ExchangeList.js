/**
 * ExchangeList class. Represents a list of exchanges with restricted limits.
 */
function ExchangeList() {
  const MIN_COUNT = 2;
  const MAX_COUNT = 99;

  let exchanges = [];

  this.add = function(exchange) {
    if (exchanges.length < MAX_COUNT) {
      for (let i = 0; i < exchanges.length; i++) {
        if (exchange.getId() == exchanges[i].getId()) {
          throw 'Cannot add exchange because its id is not unique.';
        }
      }

      exchanges.push(exchange);
    } else {
      throw 'Cannot add more than ' + MAX_COUNT + ' exchanges.';
    }
  }

  this.getExchanges = function() {
    validateExchangeCount();

    return exchanges;
  }

  this.getNearestExchange = function() {
    validateExchangeCount();

    let nearestExchange = {};

    for (let i = 0; i < exchanges.length; i++) {
      if (i == 0) {
        nearestExchange = exchanges[i];
      } else if (exchanges[i].calculateDistance() < nearestExchange.calculateDistance()) {
        nearestExchange = exchanges[i];
      }
    }

    return nearestExchange;
  }

  function validateExchangeCount() {
    if (exchanges.length < MIN_COUNT ||
        exchanges.length > MAX_COUNT) {
      throw 'Exchange count must be between ' + MIN_COUNT + ' and ' + MAX_COUNT + '.';
    }
  }
}