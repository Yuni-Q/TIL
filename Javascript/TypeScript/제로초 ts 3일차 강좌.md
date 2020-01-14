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
- 타입을 확정하려면 !(느낌표)를 사용하면 된다. 그 외에는 변수로 뺀 다음 if로 null | undefiend가 아님을 명시한다.
- 타입스크립트가 같은 것인지 판단 못할 경우에는 변수로 빼서 사용하면 인식할 수 있다.
