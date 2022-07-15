function computePieceNumber(values, amount) {
  const cache = new Map();
  cache.set(0, 0);

  function step(amount) {
    amount = Number(amount.toFixed(5));
    if (cache.get(amount) !== undefined) return cache.get(amount);
    const usable = values.filter((val) => val <= amount);
    if (usable.length === 0) {
      cache.set(amount, -1);
      return -1;
    }
    const solutions = usable
      .map((val) => step(amount - val))
      .filter((res) => res >= 0);
    const result = solutions.length > 0 ? Math.min(...solutions) + 1 : -1;
    cache.set(amount, result);
    return result;
  }

  return step(amount);
}

computePieceNumber([3], 3);

module.exports = { computePieceNumber };
