
// 시간 초과
var input = '2 20'.split(' ');
var M = parseInt(input[0]);
var N = parseInt(input[1]);
var result = new Object(N);
var p = []
var count = 0;
for (var i = 2; i <= N; i++) {
  if (!result[i]) {
    // 추가
    p[count++] = i;
    // i의 배수 지우기
    for (var j = i + i; j <= N; j += i) {
      result[j] = true;
    }
  }
}
for (var i = 0; i <= p.length; i++) {
  if (p[i] >= M) {
    console.log(p[i]);
  }
}