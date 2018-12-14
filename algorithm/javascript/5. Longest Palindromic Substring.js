// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let length = s.length;
  if (0 === length) return "";
  if (1 === length || (new Set(s.split(""))).size === length) return s.charAt(0);
  if (s === s.split("").reverse().join("")) return s;
  let cache = [""];
  let charInit1 = charInit2 = "";
  for (let char1, char2, pos = 0; length > 1; s = s.slice(0, -1), charInit1 = char1, charInit2 = char2, length--) {
      char1 = s.charAt(length-1);
      char2 = s.charAt(length-2);
      let ltrs = char1 + char2;
      pos = s.indexOf(ltrs);
      let lastPos = s.indexOf(cache[cache.length - 1]);
      if (charInit1 === char1 && charInit2 === char2 && lastPos === pos) continue;
      while (~pos) {
          let subStr = s.slice(pos + 1, -1);
          switch (subStr.length) {
              case 0:
                  cache.push(char1 + char1);
                  break;
              case 1:
                  cache.push(char1 + subStr + char1);
                  break;
              case 2:
                  cache.push(char1 + char2 + char2 + char1);
                  break;
          }
          if (subStr === subStr.split("").reverse().join("")) {
              cache.push(char1 + subStr + char1);
              break;
          }
          pos = s.indexOf(ltrs, pos + 1);
      }
  }
  return (cache.reduce((max, item) => item.length > max.length ? item : max, "")) || s.charAt(0);
};
