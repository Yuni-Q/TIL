# class
```javascript
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aa: 1,
      bb: 2,
    }
    this.onClick = this.onClick.bind(this)
  }

  function onClick() {
    console.log(Click);
  }
  
  render() {
    return (
      <div>
        {this.state.aa}
      </div>
    );
  }
}

export default App;
```

```javascript
class App extends Component {
  state = {
    aa: 1,
    bb: 2,
  }
  
  onClick = () => {
    console.log(Click);
  }
  
  render() {
    return (
      <div>
        {this.state.aa}
      </div>
    );
  }
}

export default App;
```
- 이럴 경우 반드시 화살표 함수를 사용해야한다(this) 때문에
