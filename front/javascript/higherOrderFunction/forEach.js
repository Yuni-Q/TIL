let total = 0;
let testArray = [1, 3, 5, 7, 9];

// forEach 메소드는 원본 배열을 변경하지 않는다.
testArray.forEach(function (item, index, array) {
  console.log(`[${index}] =  + ${item}`);
  total += item;
});

console.log(total); // 25
console.log(testArray); // [ 1, 3, 5, 7, 9 ]

testArray = [1, 2, 3, 4];

// 원본 배열을 변경하려면 콜백 함수의 3번째 인자를 사용한다.
testArray.forEach((item, index, array) => {
  array[index] = Math.pow(item, 2);
});

console.log(testArray); // [ 1, 4, 9, 16 ]

// forEach 메소드는 for 문과는 달리 break 문을 사용할 수 없다.
// [1, 2, 3].forEach(function (item, index, array) {
//   console.log(`[${index}] =  + ${item}`);
//   if (item > 1) break; // SyntaxError: Illegal break statement
// });