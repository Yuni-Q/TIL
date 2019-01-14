
// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];

  const recursiveSubsets = (nums, cur, index) => {
    result.push(cur.slice());
    for (let i = index; i < nums.length; i++) {
      cur.push(nums[i]);
      console.log(cur)
      recursiveSubsets(nums, cur, i + 1);
      cur.pop();
    }
  };

  recursiveSubsets(nums, [], 0);
  return result;
};