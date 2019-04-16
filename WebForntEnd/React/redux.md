
# 리덕스

## 액션

## 디스패치

## 리듀서

## 스토어
```javascript
import { createStore, combineReducers } from 'redux'
import { color, sort } from './reducers'

const store = createStore(
  combineReducers({ color, sort}),
  initalState
)

console.log(store.getState().color.length)
```

## 스토어 구독하기
```javascript
store.subscribe(() =>
  console.log('색 개수:', store.getState().colors.length)
)
```
## 리스너 해제
```javascript
const logState = () => console.log('다음 상태', store.getState())

const unsubscribeLogger = store.suscribe(logState)

// 구독을 해제하거 싶을 때 호출
unsubscribeLogger()
```

## localStorage에 저장하기
```javascript
const store = createStore(
  combineReducers({ color, sort}),
  (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) :
    {}
)

store.subscribe(() =>
  localStorage['redux-store'] = JSON.stringfy(store.getState())
)
```
