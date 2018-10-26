
var count = parseInt('5');
var result = 0;
var su = '1 2 3 4 5'.split(' ');
for (var j = 0; j < count; j++) {
  var s = parseInt(su[j]);
  var a = false;
  if (s <= 1) {
    continue;
  }
  if (s == 2) {
    result++;
    continue;
  }
  for (var i = 2; i <= (s / 2); i++) {
    if (s % i == 0) {
      a = true;
      break;
    }
  };
  if (a == false) {
    result++;
  }
};
console.log(result);