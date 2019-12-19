// https://leetcode.com/problems/4sum/
// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Note:

// The solution set must not contain duplicate quadruplets.

// Example:

// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  const res = [];
  const newNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < newNums.length - 3; i++) {
    if (i > 0 && newNums[i - 1] == newNums[i]) continue;
    for (let j = i + 1; j < newNums.length - 2; j++) {
      if (j > i + 1 && newNums[j - 1] === newNums[j]) continue;
      let k = j + 1;
      let m = newNums.length - 1;
      while (k < m) {
        let sum = newNums[i] + newNums[j] + newNums[k] + newNums[m];
        if (sum === target) {
          res.push([newNums[i], newNums[j], newNums[k], newNums[m]]);
          ++k;
          --m;
          while (k < m && newNums[k - 1] === newNums[k]) ++k;
          while (k < m && newNums[m] === newNums[m + 1]) --m;
        } else if (sum < target) {
          ++k;
        } else {
          --m;
        }
      }
    }
  }
  return res;
};
