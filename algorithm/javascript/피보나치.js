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

// 다른 문제

// 문제 설명
// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

// 예를들어

// F(2) = F(0) + F(1) = 0 + 1 = 1
// F(3) = F(1) + F(2) = 1 + 1 = 2
// F(4) = F(2) + F(3) = 1 + 2 = 3
// F(5) = F(3) + F(4) = 2 + 3 = 5
// 와 같이 이어집니다.

// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

// 제한 사항
// * n은 1이상, 100000이하인 자연수입니다.

function solution(n) {
  var answer = 0;
  if(n < 3) {
      return 1;
  }
  var a = 1;
  var b = 1;
  var c = 0;
  for(var i = 3 ; i <= n  ; i += 1){
      c = b;
      b = (a + b) % 1234567;
      a = c
  }
  return b % 1234567;
}

// 재귀로 작성하면 안되게 만들어 놓은 문제
