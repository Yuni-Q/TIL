// 438. Find All Anagrams in a String
// https://leetcode.com/problems/find-all-anagrams-in-a-string/
// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  if (!s.length) return [];
  let uniqCharCount = 0;
  let arr = new Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    let c = p.charCodeAt(i) - 97;
    if (arr[c] === 0) uniqCharCount++;
    arr[c]++;
  }
  let out = [];
  for (let i = 0; i < s.length; i++) {
    let c = s.charCodeAt(i) - 97;
    arr[c]--;
    if (arr[c] === 0) uniqCharCount--;
    if (i >= p.length) {
      let c = s.charCodeAt(i - p.length) - 97;
      arr[c]++;
      if (arr[c] > 0) uniqCharCount++;
    }
    if (uniqCharCount === 0) {
      out.push(i - p.length + 1);
    }
  }
  return out;
};
