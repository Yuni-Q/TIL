var users = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 2, name: 'Choi' },
  { id: 3, name: 'Park' }
];

// 콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환한다.
var result = users.find((item) => item.id === 2);

console.log(result); // { id: 2, name: 'Kim' }

// filter는 콜백함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열을 반환한다.
result = users.filter(function (item) {
  return item.id === 2;
});

console.log(result); // [ { id: 2, name: 'Kim' },{ id: 2, name: 'Choi' } ]