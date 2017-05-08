var app = require('../app/getPrimes.js');

describe("Get Primes Tests", function(){
  
  describe("Test for Primes",function(){
    it("should return [2,3,5,7,11] for 11", function() {
          expect(app.getPrimes(11)).toEqual([2,3,5,7,11]);
        });

    it("should return [2,3] for 3", function() {
          expect(app.getPrimes(3)).toEqual([2,3]);
      });

    it("should return [2,3,5,7] for 7",function(){
      expect(app.getPrimes(7)).toEqual([2,3,5,7]);
    });

    it("should return [2,3,5,7,11,13,17] for 17",function(){
      expect(app.getPrimes(7)).toEqual([2,3,5,7]);
    });
  });
	
  describe("Invalid Input",function(){
		it("should return 'invalid input' for '5'", function() {
      		expect(app.getPrimes('5')).toEqual('invalid input');
        });

    it("should return 'invalid input' for [1,2,3]", function() {
      		expect(app.getPrimes([1,2,3])).toEqual('invalid input');
    	});

    it("should return 'input cannot be zero' for 0", function() {
          expect(app.getPrimes(0)).toBe('input cannot be zero');
        });

	});

	describe("Negative Input",function(){
		it("should return 'only positive values allowed' for -4", function() {
      		expect(app.getPrimes(-4)).toEqual('only positive values allowed');
        });

		it("should return 'only positive values allowed' for -50", function() {
      		expect(app.getPrimes(-50)).toEqual('only positive values allowed');
        });

	})

	describe("Zero Input",function(){
		it("should return 'input cannot be zero' for 0", function() {
      		expect(app.getPrimes(0)).toBe('input cannot be zero');
      });

    it("should return 'input cannot be empty' for empty", function() {
          expect(app.getPrimes()).toBe('input cannot be empty');
      });
	})
});