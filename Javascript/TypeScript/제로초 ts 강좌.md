# ts 기초

- interface는 extends로 확장할 수 있다.
- 따로따로 적어도 합쳐져서 남의 라이브러리 쉽게 수정할 수 있다.
- 어떤 값이 들어올지 모른다면 여유를 줄 수 있다.

```typescript
interface Example {
  [c: string]: any;
}
```

- type은 유니온이랑 같이 쓰는 경향이 많다. 객체는 interface
- keyof interface으로 인터페이스의 키를 사용 가능
- as로 형변환
- 일반 function은 첫번째 인수에 this: HTMLButtonElement를 사용한다.

```typescript
btn.addEventListener("click", function(this: HTMLButtonElement, e: Event) {});
```

- 작은 집합은 큰 집합에 들어 갈 수 있지만 작은 집합은 큰 집합에 들어 갈 수 없다. 하지만 일치하는게 좋다.
- 타입을 확정하려면 !(느낌표)를 사용하면 된다. 그 외에는 변수로 뺀 다음 if로 null | undefiend가 아님을 명시한다. 위에서 throw를 하는 방법도 있지만 둘 다 에러의 발생 여부가 있기 때문에 고심해 보아야 할 부분이다.
- 타입스크립트가 같은 것인지 판단 못할 경우에는 변수로 빼서 사용하면 인식할 수 있다.

- strictNullChecks가 false면 null과 undefined를 구분하지 않는다.

  - strictNullChecks가 false가 아니면 ?(물음표)의 경우 undefined만 허용하기 때문에 `| null`을 추가해 주어야 합니다.

- 자바 최신 문법에서 클래스 변수의 #(private)이 추가 되었지만 너무 최신 문법이라 호환이 힘들다. typescript에서는 public, protected, private 모두 지원한다.

- interface에서 extends는 포함한 하위 속성으로 타입을 제한하는 용도로 사용한다.

## interface

```typescript
interface obj<T> {
  add: (a: T, b: T) => T;
}

// 아래와 같이 하면 밑에 모든 예제 ERROR 없음
// interface obj {
//   add: (a: string | number, b: string | number) => string | number;
// }

const a: obj<string> = {
  add: (a, b) => a + b
};
const b: obj<number> = {
  add: (a, b) => a + b
};

a.add("a", "b"); // 정상 동작
a.add(1, 2); // ERROR
a.add("a", 2); // ERROR
b.add("a", "b"); // ERROR
b.add(1, 2); // 정상동작
```

## never

```typescript
interface Example {
  // 타입이 never가 되어서 어떠한 것도 넣을 수 없다.
  a: [];
  // string 배열
  b: string[];
  // b: string[]; === c: Array<string>;
  c: Array<string>;
}
```

## 타입 가드

- 기존에 Card인 타입을 Sub로 바꿀 수 있다.

```typescript
function isSub(data: Card): data is Sub {
  if (data.cost) {
    return true;
  }
  return false;
}

if (isSub(data) && data.cost) {
}
```
