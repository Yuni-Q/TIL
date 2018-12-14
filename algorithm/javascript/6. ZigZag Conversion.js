// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let j = 0
  let k = 0
  let result = []
  let result2 = "";
  for(let i = 0 ; i < s.length; i+=1){
      if(!k){
          if(!result[j]) result[j] = ""    
          result[j] += s[i]
          j += 1;
      } else {
          result[k] += s[i]
          k -= 1;
      }
      
      if(j === numRows){
          if(numRows < 2){
              k = 0;
              j = 0;
          } else {
              k = numRows-2;
              j = 0;
          }
      }   
  }
  console.log(result)
  for(let i = 0 ; i < numRows; i+=1){
      if(!result[i]) result[i] = "" 
      result2 += result[i]
  }
  
  return result2;
  
};