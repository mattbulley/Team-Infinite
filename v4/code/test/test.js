let assert = chai.assert;
let testingGrid = null;
let testingExchangeList = null;

beforeEach(function() {
  testingGrid = new Grid();
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
  
});