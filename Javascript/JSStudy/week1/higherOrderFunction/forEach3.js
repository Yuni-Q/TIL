Array.prototype.myForEach = function (f) {
  // 첫번재 매개변수에 함수가 전달되었는지 확인
  if (!f || {}.toString.call(f) !== '[object Function]') {
    throw new TypeError(f + ' is not a function.');
  }

  for (var i = 0; i < this.length; i++) {
    // 배열 요소의 값, 요소 인덱스, 순회할 배열을 매개변수에 전달하고 콜백 함수 호출
    f(this[i], i, this);
  }
};

let total = 0;

[0, 1, 2, 3].myForEach((item, index, array) => {
  console.log(`[${index}]: ${item} of [${array}]`);
  total += item;
});

console.log('Total: ', total);