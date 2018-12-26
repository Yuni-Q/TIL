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
  var rtn = [];
  if (nums.length < 3) {
    return rtn;
  }
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      return rtn;
    }
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    for (var j = i + 1, k = nums.length - 1; j < k;) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        rtn.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] == nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] == nums[k + 1]) {
          k--;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return rtn;
};

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */


// var threeSum = function (nums) {
//   const result = [];
//   //
//   function QuickSort(arr) {
//     if (arr.length == 0) { return []; }
//     const middle = arr[0];
//     const len = arr.length;
//     const left = [], right = [];
//     for (let i = 1; i < len; ++i) {
//       if (arr[i] < middle) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
//     return QuickSort(left).concat(middle, QuickSort(right));
//   }
//   //
//   // nums = nums.sort(function(a,b){return a-b});
//   nums = QuickSort(nums)
//   const len = nums.length
//   console.log(nums)
//   for (i = 0; i < len; i += 1) {
//     if (0 < nums[i]) {
//       break;
//     }
//     for (j = i + 1; j < len; j += 1) {
//       if (0 < nums[i] + nums[j]) {
//         break;
//       }
//       if (nums[len - 1] < (nums[i] + nums[j] * -1)) {
//         break;
//       }
//       // for (k = j + 1; k < len; k += 1) {
//       for (k = len - 1; k > j; k -= 1) {
//         // if(nums[k]<0){
//         // break;
//         // }
//         // if (0 < nums[i] + nums[j] + nums[k]) {
//         // break;
//         // }
//         if (0 === nums[i] + nums[j] + nums[k]) {
//           const temp = [nums[i], nums[j], nums[k]];
//           const aa = JSON.stringify(result);
//           const bb = JSON.stringify(temp);
//           if (aa.indexOf(bb) < 0) {
//             result.push(temp);
//             break;
//           } else {
//             break;
//           }
//         }
//       }
//     }
//   }
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
// };

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */


// var threeSum = function (nums) {
//   const result = [];
//   //
//   function QuickSort(arr) {
//     if (arr.length == 0) { return []; }
//     const middle = arr[0];
//     const len = arr.length;
//     const left = [], right = [];
//     for (let i = 1; i < len; ++i) {
//       if (arr[i] < middle) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
//     return QuickSort(left).concat(middle, QuickSort(right));
//   }
//   //


//     nums = QuickSort(nums)
//     const len = nums.length
//     for (i = 0; i < len; i += 1) {
//         if (0 < nums[i]) {
//             break;
//         }
//     for (j = i + 1; j < len; j += 1) {
//         if (0 < nums[i] + nums[j]) {
//             break;
//         }
//         if(nums[len-1] < (nums[i] + nums[j] * -1)){
//             break;
//         }
//         // for (k = j + 1; k < len; k += 1) {
//         for (k = len - 1; k > j; k -= 1) {
//             if (0 === nums[i] + nums[j] + nums[k]) {
//                 const temp = [nums[i], nums[j], nums[k]];
//                 const aa = JSON.stringify(result);
//                 const bb = JSON.stringify(temp);
//                 if (aa.indexOf(bb) < 0) {
//                     result.push(temp);
//                 }
//                 break;
//             }
//         }
//     }
//   }
//   return result
// };


// var threeSum = function(nums) {
//   let num = nums.sort()
// if(num==null) return null;
//   console.log(num)
//       const res = [];
//       for (let i = 0; i < num.length-2; i++) {
//           if(i==0 || (i>0 && num[i]!=num[i-1])){ // remove duplicate
//               let left = i+1, right = num.length-1;
//               while(left<right){
//                   let sum = num[i] + num[left] + num[right];
//                   if(sum<0){
//                       while(left<right && num[left]==num[left+1]) left++; // remove duplicate
//                       left++;
//                   } else if(sum>0){
//                       while(left<right && num[right]==num[right-1]) right--; // remove duplicate
//                       right--;
//                   } else {
//                       res.push([num[i], num[left], num[right]]);
//                       while(left<right && num[left]==num[left+1]) left++; // remove duplicate
//                       while(left<right && num[right]==num[right-1]) right--; // remove duplicate
//                       left++;
//                       right--;
//                   }
//               }
//           }
//       }
//       return res;
// };