function computePieceNumber(values, amount) {
  if (amount === 0) {
    return 0;
  }
  if (values.length === 0) {
    return -1;
  }
  values = values.sort((a, b) => b - a);
  const val = values[0];

  if (val === amount) {
    return 1;
  }
  if (val > amount) {
    return computePieceNumber(values.slice(1), amount);
  }
  if (val < amount) {
    const number = computePieceNumber(values, amount - val);
    if (number === -1) return -1;
    return number + 1;
  }
}

module.exports = { computePieceNumber };
