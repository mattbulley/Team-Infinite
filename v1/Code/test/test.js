let assert = chai.assert;
let should = chai.should;

describe('Unit Tests', function() {
		
		describe('createExchangeId(num1, num2)', function() {
			
			describe('checking exchangeID format', function() {
	  
				it('should return ex:0:1 when num1=0 and num2=2', function() {
					assert.equal('ex:0:1', createExchangeId(0, 1));
				});
	
				it('should return ex:1:3 when num1=1 and num2=3', function() {
					assert.equal('ex:1:3', createExchangeId(1, 3));
				});	
	
		});
		
		describe('Validating Grid Size', function() {
			
			describe('Grid size Y', function() {
				
					
					it('should return true when y=50', function() {
						gridSizeY = 50;
						assert.equal(true,isGridSizeYValid());
					});
					
					it('should return false when y = 100,001', function() {	
						gridSizeY = 100001;					
						assert.equal(false,isGridSizeYValid());
					});
			});
			
			describe('Grid size X', function() {
				
					
					it('should return true when x = 50', function() {
						gridSizeX = 50;
						assert.equal(true,isGridSizeXValid());
					});
					
					it('should return false when x = 100,001', function() {	
						gridSizeX = 100001;					
						assert.equal(false,isGridSizeXValid());
					});
			});
			
		});
		
	describe('Calculating distance', function() {
			
			it('should return 10 when x=5 and y=5', function() {
				  dave = {
							id: 'ex:0:0',
							location: {
							x: 5,
							y: 5
							}
				  }
					assert.equal(10, calculateDistance(dave));
			});
			
				it('should return 50 when x=30 and y=20', function() {
				  dave = {
							id: 'ex:0:0',
							location: {
							x: 30,
							y: 20
							}
				  }
					assert.equal(50, calculateDistance(dave));
		});
	});
	
	describe('Finding the closest Exchange', function()	{
		
			it('should return ex:0:0 when ex0:0 is at (1,1) and ex:1:0 is at (10,10)', function() {
				  dave = {
							id: 'ex:0:0',
							location: {
							x: 1,
							y: 1
							}
				  }
				  dave1 = {
							id: 'ex:1:0',
							location: {
							x: 10,
							y: 10
							}
				  }
				  assert.equal('ex:0:0',getNearestExchangeId(dave, dave1))
				  
			});
			
			it('should return ex:1:0 when ex0:0 is at (10,10) and ex:1:0 is at (1,1)', function() {
				  dave = {
							id: 'ex:0:0',
							location: {
							x: 10,
							y: 10
							}
				  }
				  dave1 = {
							id: 'ex:1:0',
							location: {
							x: 1,
							y: 1
							}
				  }
				  assert.equal('ex:1:0',getNearestExchangeId(dave, dave1))
				  
			});
	});

});