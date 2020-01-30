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
