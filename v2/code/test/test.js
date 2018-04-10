let assert = chai.assert;
let should = chai.should;

let j = 0

function testArray(i) {
		it('should return true when exchangeID contains ' + i, function() {
					
									dave = 'ex:' + i +':0';
						
					assert.equal(true, isExchangeIdValid(dave));
					
		});
}

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
			
			describe('validating exchange ID', function() {
				
				describe('-', function() {
							for(i = 0; i<10; i++) {
								
								testArray(i)
							}
				});
				
				describe('-', function() {
					
					it('should return false when exchangeID contains a number greater than 9 ex:10:10', function() {
						
						 dave = {
								id: 'ex:10:10',
								location: {
								x: 10,
								y: 10
							}
						}
						assert.equal(false, isExchangeIdValid(dave))
					});
				});
			});


		});
		
		describe('Validating Grid Size', function() {
			
			describe('Grid size Y', function() {
				
					
					it('should return true when y=50', function() {
						grid = {
							x: 0,
							y: 50,
							maxX: 100000,
							maxY: 100000
						}
						assert.equal(true,isGridSizeYValid());
					});
					
					it('should return false when y = 100,001', function() {	
							grid = {
							x: 0,
							y: 100001,
							maxX: 100000,
							maxY: 100000
						}				
						assert.equal(false,isGridSizeYValid());
					});
			});
			
			describe('Grid size X', function() {
				
					
					it('should return true when x = 50', function() {
							grid = {
							x: 50,
							y: 0,
							maxX: 100000,
							maxY: 100000
						}
						assert.equal(true,isGridSizeXValid());
					});
					
					it('should return false when x = 100,001', function() {	
							grid = {
							x: 100001,
							y: 0,
							maxX: 100000,
							maxY: 100000
						}				
						assert.equal(false,isGridSizeXValid());
					});
			});
			
		});
		
	describe('Validating exchange is within grid size', function() {
		
		it('should return true when maxGridSizeX= 10 and maxGridSizeY = 10 and x = 5 and y = 5', function(){
				grid = {
							x: 10,
							y: 10,
							maxX: 100000,
							maxY: 100000
						}	
						
						 dave = {
								id: 'ex:10:10',
								location: {
								x: 10,
								y: 10
							}
			
			assert.equal(true, isExchangeLocationValid(location))
		
		});
		
		it('should return true when maxGridSizeX= 10 and maxGridSizeY = 10 and x = 10 and y = 10', function(){
			
						grid = {
							x: 10,
							y: 10,
							maxX: 100000,
							maxY: 100000
						}	
			
							 dave = {
								id: 'ex:10:10',
								location: {
								x: 10,
								y: 10
							}
			assert.equal(true, isExchangeLocationValid(location))
		
		});
		
				it('should return false when maxGridSizeX= 10 and maxGridSizeY = 10 and x = 11 and y = 11', function(){
						grid = {
							x: 10,
							y: 10,
							maxX: 100000,
							maxY: 100000
						}
	
							 dave = {
								id: 'ex:10:10',
								location: {
								x: 10,
								y: 10
							}

			assert.equal(false, isExchangeLocationValid(dave))
		
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