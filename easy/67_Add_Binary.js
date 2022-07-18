/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  if (a.length < 52 && b.length < 52)
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
  else {
    return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
  }
}

module.exports = addBinary;
