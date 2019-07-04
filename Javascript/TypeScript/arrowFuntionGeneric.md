# arrowFuntionGeneric

```typescript
class Stack<T> {
  private data: T[] = [];

  constructor() {}

  push(item: T): void {
    this.data.push(item);
  }

  pop(): T {
    return this.data.pop();
  }
}

const a = <T extends {}>(x: T): T => {
  return x;
};

const identity = <T extends {}>(arg: T): T => {
  return arg;
};
```

<>가 HTML태그가 아니라 제네릭이라는 힌트를 extends로 주면 된다.
