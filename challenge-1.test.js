const { computePieceNumber } = require("./challenge-1.js");
const test = require("node:test");
const assert = require("node:assert");

test("it should use nothing to compute an amount of 0", () => {
  assert.equal(computePieceNumber([], 0), 0);
});

test("it should not find a solution when no values are provided", () => {
  assert.equal(computePieceNumber([], 2), -1);
});

test("it should find a solution when a value equals the amount", () => {
  assert.equal(computePieceNumber([3], 3), 1);
});

test("it should find when it's possible to compute the amount", () => {
  const values = [
    500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
  ];

  assert.equal(computePieceNumber(values, 626.5), 6);
});

test("it should find when it's impossible to compute the amount", () => {
  const values = [500, 200, 100, 50, 20, 10, 5];

  assert.equal(computePieceNumber(values, 626.5), -1);
});

test("it should find when it's not a canonical system", () => {
  const values = [3, 2];

  assert.equal(computePieceNumber(values, 7), 3);
});
