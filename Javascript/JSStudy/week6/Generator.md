---
title: 2019-01-22-yuniq
author: yuniq
---

# 2019년 1월 22일 퀴즈

- 다음 중 올바른 것을 모두 고르세요.
  1. 제너레이터는 함수이다.
  1. 제너레이터 객체는 순회 가능한(iterable) 값이 아니다.
  1. 제너레이터 함수는 일반함수와 같이 함수 선언식, 함수 표현식, 메소드로 선언할 수 있다.
  1. 제너레이터 함수의 흐름은 반드시 함수의 마지막 라인까지 실행하여 해당 함수가 종료할 때까지 진행된다.
  1. 제너레이터 객체는 이터레이터(iterator)이지만 이터러블(iterable)하지 않다.

- 해당 코드의 마지막 출력물을 예측하세요
```javascript
// 제너레이터 함수 선언
function* genFunc() {
  console.log('제너레이터 함수 시작');
  yield 1;
  console.log('제너레이터 함수 재시작');
  yield 2;
  console.log('제너레이터 함수 종료');
}

// 제너레이터 함수 호출. 제너레이터 객체를 생성하고 반환한다.
const generator = genFunc();

// 처음 실행
console.log(generator.next());
// 제너레이터 함수 시작
// { value: 1, done: false }

// 두번째 실행
console.log(generator.next());
// 제너레이터 함수 재시작
// { value: 2, done: false }

// 마지막 실행
console.log(generator.next());
// 제너레이터 함수 종료
// { value: undefined, done: true }

console.log(generator.next());

console.log(generator.next());
```