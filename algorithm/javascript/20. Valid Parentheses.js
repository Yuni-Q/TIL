// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

 /* @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
  let closeMap = {
      ')' : '(',
      '}' : '{',
      ']' : '['
  };
  let charStack = [];
  
  // validate input
  if(s === "")
      return true;
  if(!s)
      return false;
  
  for(let i = 0; i<s.length; i++){
      let curChar = s.charAt(i);
      let topElement;
      if(closeMap[curChar] !== undefined){
          topElement = (charStack.length===0) ? '#' : charStack.pop();
          if(topElement !== closeMap[curChar])
              return false;
      }else{
          charStack.push(curChar);
      }
  }
  return charStack.length === 0;
};