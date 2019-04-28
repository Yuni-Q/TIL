# return array
- 반드시 key가 필요
- <> </>로 감싸는게 더욱 일반적
- 보기 힘들 것이다.
```jsx
class App extends Component {
  render() {
    return [
      <div key={1}>1</div>
      <div key={2}>2</div>
      <div key={3}>3</div>
      <div key={4}>4</div>
    ]
  }
}

export default App;
```