module.exports = function gcd(a, b) {
  let n = a % b;

  if (n == 0) {
    return b;
  }

  if (a < b) {
    let temp = a;
    a = b;
    b = temp;
  }

  while (n != 0) {
    n = a % b;
    a = b;
    b = n;
  }

  return a;
};
