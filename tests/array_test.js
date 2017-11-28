var
  assert = chai.assert,
  expect = chai.expect;

function testOnArray(object, methodName) {
  expect(object[methodName].bind(object, 'fewfqew')).to.throw(Error);
}

var array, clone;

describe("Check tasks for array and object", function () {

  describe("1. isArray(array)", function () {
    it("should return true if argument is array", function () {
      assert.equal(arrays.isArray([1, 2, 3, 4]), true);
    });

    it("should return false if argument is string", function () {
      assert.equal(arrays.isArray('jqkrbgkwegewr'), false);
    });

    it("should return false if argument is object", function () {
      assert.equal(arrays.isArray({1: 2}), false);
    });

    it("should return true if argument empty array", function () {
      assert.equal(arrays.isArray([]), true);
    });

  });

  describe("2. cloneArray(array)", function () {

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
      clone = arrays.cloneArray(array);
    });

    it("should return error if send not array", function () {
      testOnArray(arrays, "cloneArray"); 
    });

    it("should return array with the same length as a pass array", function () {
      expect(array.length).to.equal(clone.length);
    });

    it("should change clone array and not change original", function () {
      clone.push(6);
      expect(array.length).to.not.equal(clone.length);
    });

    it("should return array clone with nested array", function () {
      array = [1, 2, 3, [4, 5]];
      clone = arrays.cloneArray(array);
      expect(array.length).to.equal(clone.length);
    });

    it("should change clone nested array and not change original nested", function () {
      array = [1, 2, 3, [4, 5]];
      clone = arrays.cloneArray(array);
      clone[3].push(6);
      expect(array[3].length).to.not.equal(clone[3].length);
    });

  });

  describe("3. removeFalse(array)", function () {

    it("should return error if send not array", function () {
      testOnArray(arrays, "removeFalse");
    });

    it("should remove 'null', '0', '', 'false', 'undefined' and 'NaN' values from an array.", function () {
      var cleanedArray = arrays.removeFalse([NaN, 0, 15, false, -22, '',undefined, 47, null]);
      expect(cleanedArray).to.deep.equal([15, -22, 47]);
    });

  });
});
