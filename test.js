var assert = require('chai').assert;
var add = require('./index.js');
var sub = require('./sub.js');
var work = require('./work.js')
var isThree = require('./isThree.js')
var onlineCount = require('./online_count.js')
var expect = require('chai').expect;

describe('#add()', function() {

  context('without arguments', function() {
    it('should return 0', function() {
      expect(add()).to.equal(0)
    })
  })
  
  context('with number arguments', function() {
    it('should return sum of arguments', function() {
      expect(add(1, 2)).to.equal(3)
    })
    
    it('should return argument when only one argument is passed', function() {
      expect(add(5)).to.equal(5)
    })
  })
  
  context('with non-number arguments', function() {
    it('should throw error', function() {
      expect(function() {
        add(1, 2, '3', [4], 5)
      }).to.throw(TypeError, 'add() expects only numbers.')
    })
  })
})

describe('#sub()', function() {
    context('without arguments', function() {
      it('should return 0', function() {
        expect(sub()).to.equal(0)
      })
      it('should return -6', function() {
          expect(sub(4,2)).to.equal(-6)
      })
      it('should return 0 when inputs are 0', function() {
          expect(sub(0,0)).to.equal(0)
      })
    })
})

describe('#work()', function() {
    context("it should return proper value", function() {
        it('should return 1 if true', function(){
            expect(work(true)).to.equal(1)
        })
        it('should return 2 if false', function(){
            expect(work(false)).to.equal(2)
        })
    })
})

describe('#isThree()', function() {
    context("it should return number if it is divisible by 3", function() {
        it('should return 6 if given array of 4-5', function() {
            expect(isThree([4,5,6])).to.equal(6)
        })
        it('should return 3 if given array of 1-3', function() {
            expect(isThree([1,2,3])).to.equal(3)
        })
    })
    
})

describe('#onlineCount', function() {
    context("it should return number of people online", function() {
        it('should return 2 if 2 people are online', function() {
            expect(onlineCount({'alcia' : 'online', 'dave': 'online'})).to.equal(2)
        })
        it('should return 0 if 0 people are online', function() {
            expect(onlineCount({'alcia' : 'offline', 'dave': 'offline'})).to.equal(0)
        })
        it('should accept an object', function() {
            expect(onlineCount({}))
        })
    })
})