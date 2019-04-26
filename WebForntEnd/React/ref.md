
# React에서의 ref
- DOM API(focus, media playback 등)을 사용하는 경우
- 명령형 노드 애니메이션을 호출하는 경우
- DOM 노드가 필요한 라이브러리(예: D3.js)를 사용하는 경우

## class에서 ref
```javascript
class addColorForm extends Componenet {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(e) {
    const { _title, _color} = this.refs
    e.preventDefailt();
    alert(`새로운 색 ${_title.value} ${_color.value}`)
    _title = '';
    _color = '';
    _title.focus();
  }
  
  render() {
    return (
      <form onSubmit={this.submit}>
        <input ref="_title"
          type="text"
          placeholder="색 이름..."
          required
        />
        <input ref="_color"
          type="color"
          required
        />
        <button>추가</button>
      </form>
    )
  }
}
```
- 문자열로 참조를 지정하고 refs로 엘리먼트에 접근하는 방식을 사용하면 문제가 생기는 경우가 있다. 리액트 16부터는 가능하면 참조를 선언할 때 문자열이 아니라 함수를 사용하라고 권장한다(향후 언제든 문자열로 참조를 지정하는 방식이 사용 금지될 수 있다)
```javascript
class addColorForm extends Componenet {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(e) {
    const { _title, _color} = this.refs
    e.preventDefailt();
    alert(`새로운 색 ${_title.value} ${_color.value}`)
    _title = '';
    _color = '';
    _title.focus();
  }
  
  render() {
    return (
      <form onSubmit={this.submit}>
        <input ref="_title"
          type="text"
          placeholder="색 이름..."
          required
        />
        <input ref="_color"
          type="color"
          required
        />
        <button>추가</button>
      </form>
    )
  }
}
```
```javascript
class addColorForm extends Componenet {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(e) {
    const { _title, _color} = this.refs
    e.preventDefailt();
    alert(`새로운 색 ${_title.value} ${_color.value}`)
    _title = '';
    _color = '';
    _title.focus();
  }
  
  render() {
    return (
      <form onSubmit={this.submit}>
        <input ref="_title"
          type="text"
          placeholder="색 이름..."
          required
        />
        <input ref="_color"
          type="color"
          required
        />
        <button>추가</button>
      </form>
    )
  }
}
```


## FC에서 ref
```javascript
const AddColorform = ({onNewColor=>f}) => {
  let _title, _color
  const submit = e => {
    e.preventDefault()
    _title.value = ''
    _color.vaule = '#000000'
    _title.focus()
  }
  return (
    <form onSubmit={submit}>
        <input ref={input => _title = input}
          type="text"
          placeholder="색 이름..."
          required
        />
        <input ref={input => _color = input}
          type="color"
          required
        />
        <button>추가</button>
      </form>
  )
}
```

## hooks에서 ref
```javascript
const inputRef = React.useRef(null);

<input ref={inputRef} />
```
