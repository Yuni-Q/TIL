function fibonacci(num) {
  var answer = 0;
  if (num <= 1) {
    return num;
  }
  else if (num > 1) {
    answer = fibonacci(num - 1) + fibonacci(num - 2);
  }
  return answer;
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(fibonacci(6));