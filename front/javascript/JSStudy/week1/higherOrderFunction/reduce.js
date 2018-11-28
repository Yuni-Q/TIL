const arr = [1, 2, 3, 4, 5];

/*
previousValue: 이전 콜백의 반환값
currentValue : 배열 요소의 값
currentIndex : 인덱스
array        : 순회할 배열
*/
const sum = arr.reduce((previousValue, currentValue, currentIndex, array) => {
  console.log(`${previousValue} + ${currentValue} = ${(previousValue + currentValue)}`);
  return previousValue + currentValue; // 결과는 다음 콜백의 첫번째 인자로 전달된다
});

console.log(sum);


const max = arr.reduce((prev, cur) => {
  return prev > cur ? prev : cur;
});

console.log(max);