
# Redux를 이용한 데이터 다루기
- 단방향 데이터 흐름은 React 앱에 예측가능성과 유지보수의 편의를 제공한다.
- Flux는 React와 단방향 데이터 흐름을 다룰 때 권장되는 아키텍처다.
- Redux는 Flux 아키텍처의 구현체 중 가장 인기가 좋다.
- Redux의 connect() 메서드는 스토어의 데이터에 접근할 수 있게 해주고 액션을 스토어에 전달 할 수 있으며, 이는 컨테이너 컴포넌트에 필요한 기능이다.
- Redux의 Provider 컴포넌트가 자식 컴포넌트에서 스토어에 접근할 수 있게 해주므로 수동으로 스토어 속성을 전달하지 않아도 된다.
- 리듀서는 switch / case 문 또는 handleActions 메서드를 사용하여 액션을 새로운 상태에 적용하는 리듀서 함수가 있는 파일이다. 리듀서는 현재 상태와 액션을 입력받아 새로운 상태를 출력한다.
- Redux의 combineReducers 메소드를 사용하면 여러 개의 리듀서를 편리하게 결합할 수 있으므로 리듀서를 여러 개의 모듈 또는 파일로 분리하는 데 도움이 된다.

## 퀴즈
- 자바스크립트의 리듀서 Array.reduce()의 콜백함수에 전달되는 두가지 인자는 누산 값과 현재 값이다. 두 가지 인자 없이는 목록을 요약 할 수 없다.
- Redux는 페이스 북의 Flux(flux 라이브러리)와 비교해 볼대 간결함, 거대한 계발 생태계, 좀 더 나은 개발자 경험을 제공한다.
- Provider 컴포넌트를 생성할 때 사용하는 방법은 <Provider stroe={createStore(reducers)}>
- Redux는 Flux 정의에 따르지만 디스패처를 필요로 하지 않는다. 따라서 Redux의 구현이 더 단순하다.