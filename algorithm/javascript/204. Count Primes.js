// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n < 2) return 0;

  const pNs = new Array(n).fill(1);

  for (let i = 2; i < n; i++) {
    if (pNs[i] === 1) {
      for (let j = i + i; j < n; j = j + i) {
        pNs[j] = 0;
      }
    }
  }

  return pNs.filter(n => n).length - 2;
};
