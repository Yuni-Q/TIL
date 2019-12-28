# 리덕스

- 컴포넌트 코드로부터 상태 관리 코드를 분리할 수 있다.
- 서버 렌더링 시 데이터 전달이 간편하다.
- 로컬 스토리지에 데이터를 저장하고 불러오는 코드를 쉽게 작성할 수 있다.
- 같은 상탯값을 다수의 컴포넌트에서 필요로 할 때 좋다.
- 부모 컴포넌트에서 깊은 곳에 있는 자식 컴포넌트에 산태값을 전달 할 때 좋다.
- 알림창과 같은 전역 컴포넌트의 상탯값을 관리할 때 좋다.
- 페이지가 전환 되어도 데이터는 살아 있어야 할 때 좋다.

## 리덕스 사용 시 따라야 할 세 가지 원칙

- 전체 상탯값을 하나의 객체 저장한다.
- 상탯값은 불변 객체다.
- 상탯값은 순수 함수에 의해서만 변경되어야 한다.

## 액션

## 디스패치

## 리듀서

## 스토어

```javascript
import { createStore, combineReducers } from "redux";
import { color, sort } from "./reducers";

const store = createStore(combineReducers({ color, sort }), initalState);

console.log(store.getState().color.length);
```

## 스토어 구독하기

```javascript
store.subscribe(() => console.log("색 개수:", store.getState().colors.length));
```

## 리스너 해제

```javascript
const logState = () => console.log("다음 상태", store.getState());

const unsubscribeLogger = store.suscribe(logState);

// 구독을 해제하거 싶을 때 호출
unsubscribeLogger();
```

## localStorage에 저장하기

```javascript
const store = createStore(
  combineReducers({ color, sort }),
  localStorage["redux-store"] ? JSON.parse(localStorage["redux-store"]) : {}
);

store.subscribe(
  () => (localStorage["redux-store"] = JSON.stringify(store.getState()))
);
```

## 미들웨어를 스토어에 적용하기

- storeFactory를 만든다. 팩트리는 스토어를 만드는 과정을 관리하는 함수다.

```javascript
const store = storeFactory(initialData);
```

```javascript
import { createStore, combineReducers, applyMiddleware } from "redux";
import { color, sort } from "reducers";
import stateData from "./initalState";

const logger = store => next => action => {
  let result;
  console.groupCollapsed("디스패칭", action.type);
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  result = next(action);
  console.log("다음 상태", store.getState());
  console.groupEnd();
};

const saver = store => next => action => {
  let result = next(action);
  localStorage["redux-store"] = JSON.stringify(store.getState());
  return result;
};

const storeFactory = (initalState = stateData) =>
  applyMiddleware(logger, saver)(createStore)(
    combineReducers({ color, sort }),
    localStorage["redux-store"]
      ? JSON.parse(localStorage["redux-store"])
      : initalState
  );

export default storeFactory;
```
