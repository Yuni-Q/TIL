// Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

// Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

 

// Example:

// Input: 
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const result = {};
  let sol = 0;
  let t = ""; 
  const lower = paragraph.toLowerCase()
  const clear = lower.replace(/,/gi, " "); 
  const values = clear.split(' ');
  for(i of values){
      let val = i;
      if(val.charCodeAt(val.length-1) < 97 || val.charCodeAt(val.length-1) > 122 ){
          val = val.substr(0, val.length -1);
          console.log('vvv',val)
      }
      console.log(val)
      if(result[val]){
          result[val] += 1;
      } else {
          result[val] = 1;
      }
  }
  for(val in result){
      if(result[val] > sol) {
          if(banned.includes(val) === false && val !== ''){
              sol = result[val]
              t = val
          }
      }
  }
  return t
};

//  좋은 코드
// /**
//  * @param {string} paragraph
//  * @param {string[]} banned
//  * @return {string}
//  */
// var mostCommonWord = function(paragraph, banned) {
//   const table = {}
//   const bannedSet = new Set(banned)
//   paragraph.toLowerCase().match(/\w+/g).map((word) => {
//     if (!bannedSet.has(word)) {
//       table[word] = (table[word] || 0) + 1;
//     }
//   })
// return findHighest(table)
// };

// const findHighest = (table) => {
// let highest = 0
// let highestWord = ''
// for (word in table) {
//   if (table[word] > highest) {
//     highest = table[word]
//     highestWord = word
//   }
// }
// return highestWord
// }