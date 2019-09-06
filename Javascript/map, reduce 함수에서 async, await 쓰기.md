# map, reduce 함수에서 async/await 쓰기

## map

- await 는 Promise 객체 를 실행하고 기다려주지만, Promise 배열 로는 그렇게 할 수 없기 때문입니다.
- 여기엔 두가지 방법이 있습니다.
  - Promise.all 은 배열 내의 모든 Promise 가 통과될 때까지 기다리는 Promise 를 반환하고, Promise.race 는 도중에 하나라도 실패하면 즉시 리턴되는 Promise 를 반환합니다.
  - 설명이 좀 어렵게 쓰여있지만, 배열 내의 모든 Promise 를 중간에 거부(reject or Exception)가 발생하더라도 다 실행하려면 Promise.all 을, 거부 발생시 중도에 중단하려면 Promise.race 를 쓰면 됩니다.

## reduce

- 이 문제를 해결하는데는 두가지 방법이 있습니다.

1. Promise.all 사용
- 첫번째 방법은 아까 Array.map 에서 사용했던 Promise.all 을 통해 Promise 를 사용하는 부분의 데이터를 따로 받아온 후 Array.reduce 를 사용하는 방법입니다.
- 결과값이 어느 index 에서 매칭되는지 알고 있으니 사용할 수 있는 방법인데, 뭔가 깔끔한 느낌은 아니네요. 그래도 어쨌든 우리가 원하는 결과를 얻을 수 있습니다.

2. Promise.resolve 사용
- Promise.resolve 는 넘겨준 값을 그대로 resolve 해주는 Promise 를 리턴합니다. 이런 용도로 사용하는 Promise 의 prototype function 으로, 아래의 두 줄은 같은 동작을 하는 Promise 객체입니다.
- 뭔가 많이 복잡해보이지만, 실질적으로는 result 가 Promise.resolve 로 대체된 것이 다입니다. Array.reduce 의 누산되는 결과값을 그냥 값 으로 쓰는게 아니라 Promise.resolve(값) 으로 쓰는거죠.

### 두 방식의 차이
- 코드가 다르다는 것 외에, 두 방식은 실제로 조금 다르게 동작합니다. Promise.all 은 배열 안의 모든 Promise 를 한번에 실행하여 결과를 취합하고, Promise.resolve 를 사용한 Array.reduce 는 각 iteration 을 순차적으로 실행하게 됩니다. 따라서 이 부분이 둘 중 "어떤 방식을 사용할 것인가" 를 결정하는데 중요한 요소입니다. 순서가 중요하다면 2. 의 방식을, 순서가 중요하지 않은 경우 1. 의 방식을 사용하는 것이 비동기 작업의 퍼포먼스 측면에서 더 좋은 결과를 얻게 됩니다.

---

출처 : [map, reduce 함수에서 async/await 쓰기](https://velog.io/@minsangk/2019-09-06-0209-%EC%9E%91%EC%84%B1%EB%90%A8-eik06xy8mm)