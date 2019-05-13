# Redux Saga

## Generator
```javascript
function* generator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}
```

## Saga 반복 1 (while)
```javascript
function* watchLogin() {
  while(true) {
    yield take(LOG_IN);
    yield delay(2000);
    yield put({
      type: LOG_IN_SUCCESS,
    });
  }
}
```
- put은 dispatch와 같다

## Saga 반복 2 (takeEvery)
```javascript
function* watchLogin() {
    yield takeEvery(LOG_IN, function*() {
      yield delay(2000);
      yield put({
        type: LOG_IN_SUCCESS,
      });
    });
  }
}
```
- takeEvery는 여러번 눌러도 여러번 실행 되어야 할때 사용

## Saga 반복 3 (takeEvery)
```javascript
function* watchLogin() {
    yield takeLatest(LOG_IN, function*() {
      yield delay(2000);
      yield put({
        type: LOG_IN_SUCCESS,
      });
    });
  }
}
```
- takeLatest는 이전 요청이 끝나지 않은게 있다면 이전 요청을 취소합니다.

## fork와 call
- fork는 비동기적 함수 호출
- call은 동기적 함수 호출

## 그외
- race, cancel, select, throttle, debounce 이펙트 등이 자주 사용 됩니다.
