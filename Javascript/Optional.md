
# Optional
- Optional (null-safe) in javascript
- 옵셔널로 널 체클 할 수 있다.
- 추후에 자세히 살펴보자

```javascript

function optionalAccess(obj, path, def) {
  const propNames = path.replace(/\]|\)/, "").split(/\.|\[|\(/);

  return propNames.reduce((acc, prop) => acc[prop] || def, obj);
}

const obj = {
  items: [{ hello: "Hello" }]
};

console.log(optionalAccess(obj, "items[0].hello", "def")); // Prints Hello
console.log(optionalAccess(obj, "items[0].he", "def")); // Prints def
```