const result = [1, 2, 3, 4, 5].filter((item, index, array) => {
  console.log(`[${index}] =  ${item}`);
  return item % 2; // 홀수만을 필터링한다 (1은 true로 평가된다)
});

console.log(result);