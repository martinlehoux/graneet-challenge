function getMaxZeroSequenceLength(number) {
  if (number === 0) return 1;
  const bin = convertToBinary(number).reverse();
  let seq = 0;
  let maxSeq = 0;
  for (const bit of bin) {
    if (bit === 1) {
      maxSeq = Math.max(seq, maxSeq);
      seq = 0;
    } else {
      seq = seq + 1;
    }
  }
  return maxSeq;
}

function convertToBinary(number) {
  const bits = [];
  let k = 2 ** Math.floor(Math.log2(number));
  while (k >= 1) {
    if (k <= number) {
      bits.push(1);
      number = number - k;
    } else {
      bits.push(0);
    }
    k = k / 2;
  }
  return bits;
}

console.log(convertToBinary(5));

module.exports = { getMaxZeroSequenceLength };
