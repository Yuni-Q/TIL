
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
  localStorage['redux-store'] = JSON.stringify(store.getState())
)
```

## 미들웨어를 스토어에 적용하기
- storeFactory를 만든다. 팩트리는 스토어를 만드는 과정을 관리하는 함수다.

```javascript
const store = storeFactory(initialData)
```

```javascript
import { createStore,
  combineReducers,
  applyMiddleware } from 'redux'
import { color, sort } from 'reducers'
import stateData from './initalState'

const logger = store => next => action => {
  let result
  console.groupCollapsed('디스패칭', action.type)
  console.log('이전 상태', store.getState())
  console.log('액션', action)
  result = next(action)
  console.log('다음 상태', store.getState())
  console.groupEnd()
}

const saver = store => next => action => {
  let result = next(action)
  localStorage['redux-store'] = JSON.stringify(store.getState())
  return result
}

const storeFactory = (initalState = stateData) =>
  applyMiddleware(logger, saver)(createStore)(
    combineReducers({color, sort}),
    (localStorage['redux-store']) ?
      JSON.parse(localStorage['redux-store']) :
      initalState
  )

export default storeFactory
```
