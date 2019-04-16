# context
```javascript
class App extends Component {
  getChildContext() {
    return {
      store: this.props.stroe
    }
  }
}

app.childCntextTypes = {
  store: PropTypes.object.isRequired
}
```
- 먼저 컨텍스트를 컴포넌트에 추가하려면 getChildContext 생애주기 함수를 사용해야 한다.
- 다음으로 컴폰넌트 인스턴스에 childCntextTypes를 지정하고 컨텍스트 객체를 정의해야 한다. 이는 proprTypes나 defaultProps를 컴포넌트 인스턴스에 추가하느 것과 비슷하다. 하지만 컨텍스트를 사용하려면 반드시 이 단계를 거쳐야 한다.
- 상태가 없는 함수형 컴포넌트의 경우 컨텍스트 객체가 두 번째 인자로 전달된다(첫 번째 인자는 프로퍼티다). 여기서도 contextTypes 정의가 없으면 컨텍스트에서 스토어를 가져올 수 없다.
- 컴포넌트 클래스에서는 this.context로 컨텍스트에 접근할 수 있다.
