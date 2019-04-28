# jsx에서 if와 for 사용
- 즉시 실행 함수 이용
```jsx
class App extends Component {
  render() {
    return (
      <div className="App">
        {() => {
          if(true) {
            return <div>aa</div>
          }
        }()

        }
      </div>
    );
  }
}

export default App;
```
- 위 방법보다 함수로 빼거나 자식 컴포넌트로 분리하는게 좋다.
- 자식 컴포넌트로 분리하는게 가장 좋다.