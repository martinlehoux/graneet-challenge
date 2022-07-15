const { bestScore } = require("./challenge-3");

const test = require("node:test");
const assert = require("node:assert");

test("it should work for a single cell map", () => {
  assert.equal(bestScore([[4]]), 4);
});

test("it should work for a single line map", () => {
  assert.equal(bestScore([[5, 7]]), 12);
});

test("it should work for a single col map", () => {
  assert.equal(bestScore([[5], [7]]), 12);
});

test("it should work for a complex map", () => {
  const map = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 0, 9],
  ];

  assert.equal(bestScore(map), 25);
});

test("it should work for a complex map", () => {
  const map = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ];

  assert.equal(bestScore(map), 3);
});
