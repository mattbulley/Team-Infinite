let assert = chai.assert;
let testingGrid = null;
let testingExchange = null;
let testingExchangeList = null;

beforeEach(function() {
  testingGrid = new Grid();
  testingExchange = new Exchange();
  testingExchangeList = new ExchangeList();
});

describe('Unit Tests', function() {
  describe('Grid Tests', function() {
	  
    it('should set grid length x to 20', function() {
      testingGrid.setSize(20, 20);
      assert(20, testingGrid.getX());
    });

    it('should throw an error if grid x is negative', function() {
      assert.throws(function() {
        testingGrid.setSize(-1, 5);
      }, 'Grid size X must be between 0 and 100000.');
    });
	
  });

  describe('Exchange Tests', function() {
    describe('ID Tests', function() {
      
      it('should set the id correctly using the valid id format \'ex:0:0\'', function() {
        testingExchange.setId(0, 0);
        assert('ex:0:0', testingExchange.getId());
      });

      it('should set the id correctly using the valid id format \'ex:9:9\'', function() {
        testingExchange.setId(9, 9);
        assert('ex:9:9', testingExchange.getId());
      });

      it('should throw an error if idPart1 is less than 0', function() {
        assert.throws(function() {
          testingExchange.setId(-1, 5);
        }, 'Exchange id \'ex:-1:5\' is not valid.');
      });

      it('should throw an error if idPart2 is less than 0', function() {
        assert.throws(function() {
          testingExchange.setId(4, -1);
        }, 'Exchange id \'ex:4:-1\' is not valid.');
      });

      it('should throw an error if idPart1 is greater than 9', function() {
        assert.throws(function() {
          testingExchange.setId(10, 5);
        }, 'Exchange id \'ex:10:5\' is not valid.');
      });

      it('should throw an error if idPart2 is greater than 9', function() {
        assert.throws(function() {
          testingExchange.setId(6, 10);
        }, 'Exchange id \'ex:6:10\' is not valid.');
      });
    });

    describe('Capacity Tests', function() {
      let capacity = 500;

      it('should set the capacity of ' + capacity, function() {
        testingExchange.setCapacity(capacity);
        assert(capacity, testingExchange.getCapacity());
      });

      it('should throw an error if capacity is less than 0', function() {
        assert.throws(function() {
          testingExchange.setCapacity(-1);
        }, 'Capacity must be between 0 and 999.');
      });

      it('should throw an error if capacity is greater than 999', function() {
        assert.throws(function() {
          testingExchange.setCapacity(-1);
        }, 'Capacity must be between 0 and 999.');
      });
    });
  });
});