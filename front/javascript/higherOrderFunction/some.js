// 배열 내 요소 중 10보다 큰 값이 1개 이상 존재하는지 확인
let res = [2, 5, 8, 1, 4].some((item) => {
  return item > 10;
});
console.log(res);

res = [12, 5, 8, 1, 4].some((item) => {
  return item > 10;
});
console.log(res);

// 배열 내 요소 중 특정 값이 1개 이상 존재하는지 확인
res = ['apple', 'banana', 'mango'].some((item) => {
  return item === 'banana';
});
console.log(res);