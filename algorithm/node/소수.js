
var M = parseInt('60');
var result = 0;
var result2 = 0;
var N = parseInt('100')
for (var j = N; j >= M; j--) {
  var a = false;
  if (j <= 1) {
    continue;
  }
  if (j == 2) {
    result = j;
    result2 += j;
    continue;
  }
  for (var i = 2; i <= (j / 2); i++) {
    if (j % i == 0) {
      a = true;
      break;
    }
  };
  if (a == false) {
    result = j;
    result2 += j;
  }
};
if (result2 == 0) {
  console.log(-1);
} else {
  console.log(result2);
  console.log(result);
}