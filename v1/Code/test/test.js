let assert = chai.assert;

describe('Unit Tests', function() {
	
  describe('createExchangeId(num1, num2)', function() {
	  
    it('should return ex:0:1 when num1=0 and num2=2', function() {
      assert.equal('ex:0:1', createExchangeId(0, 1));
    });
	
	it('should return ex:1:3 when num1=1 and num2=3', function() {
	  assert.equal('ex:1:3', createExchangeId(1, 3));
	});
	
  });
  
});