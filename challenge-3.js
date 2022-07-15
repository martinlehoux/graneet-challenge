function bestScore(map) {
  const cache = new Map();
  const lines = map.length;
  const cols = map[0].length;

  function step(line, col) {
    if (lines === line) return 0;
    if (cols === col) return 0;
    const cached = cache.get(cacheKey(map, line, col));
    if (cached !== undefined) return cached;
    const res =
      map[line][col] + Math.max(step(line + 1, col), step(line, col + 1));
    cache.set(cacheKey(map, line, col), res);
    return res;
  }
  return step(0, 0);
}

function cacheKey(map, line, col) {
  return line * map[0].length + col;
}

module.exports = { bestScore };
