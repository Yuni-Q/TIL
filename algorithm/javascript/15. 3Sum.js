// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function (nums) {
  const result = [];
  //
  function QuickSort(arr) {
    if (arr.length == 0) { return []; }
    const middle = arr[0];
    const len = arr.length;
    const left = [], right = [];
    for (let i = 1; i < len; ++i) {
      if (arr[i] < middle) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return QuickSort(left).concat(middle, QuickSort(right));
  }
  //
  // nums = nums.sort(function(a,b){return a-b});
  nums = QuickSort(nums)
  for (i = 0; i < nums.length; i += 1) {
    if (0 < nums[i]) {
      break;
    }
    for (j = i + 1; j < nums.length; j += 1) {
      if (0 < nums[i] + nums[j]) {
        break;
      }
      for (k = j + 1; k < nums.length; k += 1) {
        if (0 === nums[i] + nums[j] + nums[k]) {
          const temp = [nums[i], nums[j], nums[k]];
          const aa = JSON.stringify(result);
          const bb = JSON.stringify(temp);
          if (aa.indexOf(bb) < 0) result.push(temp);
        } else {
          if (0 < nums[i] + nums[j] + nums[k]) {
            break;
          }
        }
      }
    }
  }
  //     let single = result.reduce(( a, b ) => {
  //         aa = JSON.stringify(a)
  //         bb = JSON.stringify(b)
  // 	if( aa.indexOf(bb) < 0 ) a.push(b) ;
  //         // console.log(a.indexOf(b) < 0)
  //         // console.log(a,b)
  // 	return a ;
  // }, []) ; // <-- 초기값 빈 배열 세팅!
  return result//.sort()
  // const rslt = [];
  // nums = nums.sort()
  // for(let i = 0 ; i < nums.length ; i++){ if(i == 0 || (i > 0 && nums[i-1] != nums[i])){
  //             let low = i+1;
  //             let high = nums.length - 1;
  //             let sum = nums[i] * -1;
  //             while(low < high){
  //                 if(nums[low] + nums[high] == sum){
  //                     rslt.push([nums[i], nums[low], nums[high]]);
  //                     while(low < high && nums[low] == nums[low+1])   low++;
  //                     while(low < high && nums[high] == nums[high-1]) high--;
  //                     low++;
  //                     high--;
  //                 }else if(nums[low] + nums[high] < sum){
  //                     while(low < high && nums[low] == nums[low+1])   low++;
  //                     low++;
  //                 }else{
  //                     while(low < high && nums[high] == nums[high-1]) high--;
  //                     high--;
  //                 }
  //             }
  //         }
  //     }

  // return rslt.sort();
};