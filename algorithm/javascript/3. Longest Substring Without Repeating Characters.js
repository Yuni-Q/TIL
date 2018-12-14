// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0;
  if (s.length < 2) return s.length;
  var ls = s[0]; // longest string
  var cs = s[0]; // current string
  for (var i = 1; i < s.length; i++) {
      var index = cs.indexOf(s[i]); // get index of current character in current string
      console.log(index);
      if (index > -1) { // found the character in current string
          if (cs.length > ls.length) {
              ls = cs; // update longest string
          }
          cs = cs.substring(index + 1,cs.length) + s[i]; // remove the first part of the string which contains repeated character
      } else {
          cs = cs + s[i]; 
      }        
  }
  if (cs.length > ls.length) {
      ls = cs;                
  }
  return ls.length;
};