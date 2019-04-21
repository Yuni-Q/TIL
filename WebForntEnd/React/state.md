# state

## state에서 preState 사용
```javascript
this.setState((preState) => {
  return {
    value: preState.value + 1,
  }
})
```