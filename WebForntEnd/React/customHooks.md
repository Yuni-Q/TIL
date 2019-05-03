# custom hooks
```javascript
const userInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = (e) => {
    setter(e.target.value);
  };
  return [value, handler];
}
```
- custom hooks에서는 예외적으로 useState를 함수 안에 사용해도 괜찮다.
