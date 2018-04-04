let assert = chai.assert;
let testingGrid = null;
let testingExchangeList = null;

beforeEach(function() {
  testingGrid = new Grid();
  testingExchangeList = new ExchangeList();
});

describe('Unit Tests', function() {
  describe('Grid Tests', function() {
	  
    it('should set grid length X to 20', function() {
      testingGrid.setX(20);
      assert(20, testingGrid.getX());
    });
	
	it('should set grid length Y to 10', function() {
      testingGrid.setY(10);
      assert(10, testingGrid.getY());
    });
	
	it('should throw and error if grid length X is non-integer', function() {
      assert.throws(function() {
		  testingGrid.setX(10.5);
      }, 'Grid size X must be between 0 and 100000.');
    });
	
	it('should throw and error if grid length Y is non-integer', function() {
      assert.throws(function() {
		  testingGrid.setY(3.14159);
      }, 'Grid size Y must be between 0 and 100000.');
    });
	
	it('should set grid length X to 10, grid length Y to 5', function() {
      testingGrid.setSize(10, 5);
      assert(10, testingGrid.getX());
	  assert(5, testingGrid.getY());
    });

    it('should throw an error if grid X is negative', function() {
      assert.throws(function() {
        testingGrid.setSize(-1, 5);
      }, 'Grid size X must be between 0 and 100000.');
    });
	
	it('should throw an error if grid Y is negative', function() {
      assert.throws(function() {
        testingGrid.setSize(10, -45);
      }, 'Grid size Y must be between 0 and 100000.');
    });
	
	it('should throw an error if grid X & grid Y are negative', function() {
      assert.throws(function() {
        testingGrid.setSize(-2, -5);
      }, 'Grid size X must be between 0 and 100000.');
    });
	
	it('should throw an error if grid X is above the maximum (100000)', function() {
      assert.throws(function() {
        testingGrid.setSize(999999, 5);
      }, 'Grid size X must be between 0 and 100000.');
    });
	
	it('should throw an error if grid Y is above the maximum (100000)', function() {
      assert.throws(function() {
        testingGrid.setSize(10, 999999);
      }, 'Grid size Y must be between 0 and 100000.');
    });
	
	it('should throw an error if setting X to a negative value', function() {
      assert.throws(function() {
		  testingGrid.setX(-4);
      }, 'Grid size X must be between 0 and 100000.');
    });
	
	it('should throw an error if setting Y to a negative value', function() {
      assert.throws(function() {
		  testingGrid.setY(-30000);
      }, 'Grid size Y must be between 0 and 100000.');
    });	
	
	it('should throw an error if setting X to a value above 100000', function() {
      assert.throws(function() {
		  testingGrid.setX(100001);
      }, 'Grid size X must be between 0 and 100000.');
    });
	
	it('should throw an error if setting Y to a value above 100000', function() {
      assert.throws(function() {
		  testingGrid.setY(123456);
      }, 'Grid size Y must be between 0 and 100000.');
    });
	
  }); // Grid Tests
  
}); // Unit Tests