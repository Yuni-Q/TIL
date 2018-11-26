// 함수를 인자로 전달받고 함수를 반환하는 고차 함수
const makeCounter = (predicate) => {
  // 자유 변수
  let num = 0;
  // 클로저
  return () => {
    num = predicate(num);
    return num;
  };
}

// 보조 함수
const increase = (n) => {
  return ++n;
}

// 보조 함수
const decrease = (n) => {
  return --n;
}

const increaser = makeCounter(increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

const decreaser = makeCounter(decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2