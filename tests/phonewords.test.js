const { describe } = require("mocha");
const phonewords = require("../phonewords");
const assert = require("chai").assert;

describe("phonewords basic functionality", () => {
  it("Should return correct values for 1 digit numbers", () => {
    const words = phonewords(9);
    const expected = ["w", "x", "y", "z"];
    assert.deepEqual(words, expected, "example entry with one digits");
  });
  it("Should return correct values for 2 digit numbers", () => {
    const words = phonewords(23);
    const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    assert.deepEqual(words, expected, "example entry with two digits");
  });
});

describe("phonewords boundary cases", () => {
  it("Should return an emtpy array for 0 value", () => {
    const words = phonewords(0);
    assert.deepEqual(words, [], "Empty array for 1 value");
  });
  it("Should return an emtpy array for 1 value", () => {
    const words = phonewords(1);
    assert.deepEqual(words, [], "Empty array for 1 value");
  });
});
