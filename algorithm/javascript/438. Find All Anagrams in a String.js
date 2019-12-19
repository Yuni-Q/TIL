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
  const result = [];
  if (!s || !s.length) {
    return result;
  }
  if (p.length > s.length) {
    return result;
  }
  const map = {};
  for (let i = 0; i < p.length(); i++) {
    let c = p.charAt(i);
    if (map.containsKey(c)) {
      map.put(c, map.get(c) + 1);
    } else {
      map.put(c, 1);
    }
  }
  let match = 0;
  for (let i = 0; i < s.length(); i++) {
    let c = s[i];
    if (!!map[c]) {
      map[c] -= 1;
      if (map[c] == 0) {
        match++;
      }
    }
    if (i >= p.length) {
      c = s[i - p.length];
      if (map.containsKey(c)) {
        map.put(c, map.get(c) + 1);
        if (map.get(c) == 1) {
          match--;
        }
      }
    }
    if (match == map.size()) {
      result.add(i - p.length() + 1);
    }
  }
  return result;
};
