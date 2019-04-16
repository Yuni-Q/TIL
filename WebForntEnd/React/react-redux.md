# react-redux
```javascript
<Provider stroe={store}>
  <App />
</Provider>
```

## 리액트 리덕스 connect
```javascript
import ColorList from './ColorList'

const mapStateToProps = state =>
({
  color: [...state.colors].sort(sortFuction(state.sort))
})

const mapDispatchToProps = dispatch =>
({
  onRemove(id) {
    dispatch(removeColor(id))
  },
  onRate(id, rating) {
    dispatch(rateColor(id, rating))
  }
})

export const Colors = connet(
  mapStateToProps,
  mapDispatchToPropsm
)(ColorList)
```
- connect는 컴포넌트를 반환하는 함수를 반환하는 고차 함수다.
- connect는 프로바이더와 함께 작동한다. 프로바이더는 스토어를 컨텍스트에 추가하고 connect는 스토어를 가져와서 사용하는 컴포넌트를 만든다. connect를 사용할 때는 컨텍스트를 걱정할 필요가 없다.