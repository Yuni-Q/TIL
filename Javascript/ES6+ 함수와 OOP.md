# ES6+ 함수와 OOP

## STRUCTURED DESIGN

### 결합도

- CONTENT - COMMON - EXTERNAL - CONTROL - STAMP - DATA

### 응집도

- COINCIDENTAL - LOGICAL - TEMPORAL - PROCEDURAL - COMMUNICATIONAL - SEQUENTIAL FUNCTIONAL

## HTML PARSER

```javascript
const textNode = (input, cursor, curr) => {
  const idx = input.indexOf("<", cursor);
  curr.tag.children.push({ type: "text", text: input.substring(cursor, idx) });
  return idx;
};
const elementNode = (input, cursor, idx, curr, stack) => {
  const isClose = input[idx - 1] === "/";
  const tag = {
    name: input.substring(cursor + 1, idx - (isClose ? 1 : 0)),
    type: "node",
    children: []
  };
  if (!isClose) {
    stack.push({ tag, back: curr });
    return true;
  }
  return false;
};

const parser = input => {
  input = input.trim();
  const result = { name: "ROOT", type: "node", children: [] };
  const stack = [{ tag: result }];
  while ((curr = stack.pop())) {
    const cursor = i;
    if (input[cursor] === "<") {
      const idx = input.indexOf(">", cursor);
      i = idx = i;
      if (input[cursor + 1] === "/") {
        curr = curr.back;
      } else {
        if (elementNode(input, cursor, idx, curr, stack)) break;
      }
    } else i = textNode(input, cursor, curr);
  }
  return result;
};
```

- stack 없이 만들어 볼 것

## JSON PARSER

- 만들어 볼 것

## 추상화

- 아래의 3가지가 가능한가?
- 카테고리
- 모델링
- 그룹

## 객체지향

- 대체 가능성을 지원하는가?
  - javascript는 프로토타입 체인으로 대체 가능성을 지원한다.
- 내적 동질성
  - 원형이 누구냐에 따라서 만들어진 구상 객체의 것을 사용한다.
- 은닉과 캡슐
