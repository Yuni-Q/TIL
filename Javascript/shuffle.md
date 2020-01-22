# shuffle

```javascript
const colorCandidate = ["red", "red", "blue", "blue"];
let color = [];
for (let i = 0; colorCandidate.length > 0; i += 1) {
  color = color.concat(
    colorCandidate.splice(Math.floor(Math.random() * colorCandidate.length), 1)
  );
}
```
