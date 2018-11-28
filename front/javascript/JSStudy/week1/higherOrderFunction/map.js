let numbers = [1, 4, 9];

// 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행
let roots = numbers.map((item) => {
  return Math.sqrt(item);
});

// 위 코드의 축약표현은 아래와 같다.
// var roots = numbers.map(Math.sqrt);

// map 메소드는 새로운 배열을 반환한다
console.log('roots', roots);
// map 메소드는 원본 배열은 변경하지 않는다
console.log('numbers', numbers);

numbers = [1, 4, 9];

// 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행
roots = numbers.map((item) => {
  return ++item;
});

// map 메소드는 새로운 배열을 반환한다
console.log('roots', roots);
// map 메소드는 원본 배열은 변경하지 않는다
console.log('numbers', numbers);