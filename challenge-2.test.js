const { getMaxZeroSequenceLength } = require("./challenge-2");

const test = require("node:test");
const assert = require("node:assert");

test("it should handle 0", () => {
  assert.equal(getMaxZeroSequenceLength(0), 1);
});

test("it should handle 1", () => {
  assert.equal(getMaxZeroSequenceLength(1), 0);
});

test("it should handle a number with several sequences", () => {
  assert.equal(getMaxZeroSequenceLength(123456), 6);
});

test("it should handle a number with only ones", () => {
  assert.equal(getMaxZeroSequenceLength(65535), 0);
});

test("it should handle a random numbe", () => {
  assert.equal(getMaxZeroSequenceLength(296), 3);
});