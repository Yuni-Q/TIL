
# Jest를 이용한 React 단위 테스트
- Jest를 설치하려면 npm i jest-cli --save-dev
- 모듈을 테스트할 때 자동 모의 기능을 사용하지 않도록 설정하려면 jest.dontMock()을 사용한다.
- expect.toBe()를 비롯한 Expect 메서드를 사용할 수 있다.
- TestUtils를 설치하려면 npm i react-addons-test-utils --save-dev를 실행한다.
- TestUtils.Simulate.evenName(node)에서 evenName으로 React 이벤트명(on 접두사 제외)을 사용하면 DOM 이벤트를 시뮬레이션 할 수 있다.
- scry...로 시작하는 메서드는 엘리먼트 여러 개 가져온다.
- find...로 시작하는 메서드는 단일 엘리먼트를 가져온다(엘리먼트가 두 개 이상 있는 경우에는 오류가 발생한다. 정확하게 엘리먼트가 한 개만 있어야 한다)

## 퀴즈
- Jest 테스트 파일을 위치시키는 폴더의 이름은 __test__이다.
- TestUtils는 npm에서 react-addons-test-utils를 설치하여 사용한다.
- TestUtils 메서드 중 HTML 클래스명을 기준으로 단일 컴포넌트를 찾을 수 있는 메서드는 findRenderedDOMComponentWIthClass()이다.
- expect 메서드 중에서 객체의 깊은 비교를 위해 사용하는 것은 expect(OBJECT).toEqual(value) 이다. 반면에 toBe()는 일치 연산자(===)처럼 작동해서 같은 객체인지 확인한다.
- 사용자의 마우스오버 조작을 테스트하는 방법은 TestUtils.Simulate.mouseOver(node).mouseOver 이벤트는 마우스 커서가 올라올 때 발생한다.

## Jest
- 제스트는 테스트를 만들기 위해 describe와 it이라는 두 가지 함수를 사용한다.
- describe는 테스트를 스위트(test suite)를 만들 때 사용하며 it은 각 테스트를 만들 때 사용한다.
- 두 함수 모두 테스트나 스위트의 이름을 첫 번째 인자로 받고 테스트나 테스트 스위트를 포함하는 콜백 함수를 두 번째 인자로 받는다.
- 제스트에는 테스트 스위트를 실행하기 전과 후에 정해진 코드를 실행하도록 해주는 준비(setup)와 정리(teardown) 기능이 있다.
- beforeAll과 afterAll이 각각 테스트 스위트 실행 전과 후에 호출 된다.
- beforeEatch와 afterEatch가 it으로 정의한 각 테스트를 실행기 전과 후에 호출 된다.
- .toBe 매처는 결과를 === 연산자를 사용해 인자와 비교한다.
- .toEqual 매처가 두 객체의 내부까지 깊숙이 비교하는 반면 .toBe 매처는 숫자나 문자열 같은 기본 타입을 검사할 때 사용한다.
- .toBeDefined 매처를 사용하면 변수나 함수의 존재 여부를 검사할 수 있다.

- .not : 이어지는 체인의 비교를 반대로 만든다.
- expect(OBJECT).toBe(value) : 자바스크립트 일치 연산자(===)를 사용했을 때 값이 동일할 것을 예상한다(값뿐만 아니라 타입도 비교한다)
- expect(OBJECT).toEqual(value) : 값을 비교(deep-equal)했을 때 동일할 것을 예상한다.
- expect(OBJECT).toBeFalsy() : 값이 거짓일 것으로 예상한다.
- expect(OBJECT).toBetruthy() : 값이 참일 것으로 예상한다.
- expect(OBJECT).toBeNull : 값이 null일 것으로 예상한다.
- expect(OBJECT).toBeUndefined() : 값이 정의되지 않을 것으로 예상한다.
- expect(OBJECT).toBeDefined() : 값이 정의될 것으로 예상한다.
- expect(OBJECT).toMatch(regexp) : 값이 정규표현식에 일치할 것으로 예상한다.

## Javascirpt에서 공식적인 정의에 의한 거짓
- false
- 0
- "(공백 문자열)
- null
- undefiend
- NaN(Not a Number : 숫자가 아님)

## TestUtils
- scryRenderedDOMComponentsWithTag() : 다수의 엘리먼트. 태그명을 아는 경우에 사용한다.
- findRenderedDOMComponentWIthTag() : 단일 엘리먼트. 고유한 태그명을 아는 경우에 사용한다. 컴포넌트의 다른 엘리먼트에서 해당 태그명을 사용하지 않는 경우다.
- scryRenderedDOMComponentsWithClass() : 다수의 엘리먼트. 클래스명을 아는 경우에 사용한다.
- findRenderedDOMComponentWIthClass() : 단일 앨리먼트. 고유한 클래스명을 아는 경우에 사용한다.
- scryRenderedDOMComponentsWithType() : 다수의 엘리먼트. 유형을 아는 경우에 사용한다.
- findRenderedDOMComponentWIthType() : 단일 엘리먼트. 유형을 아는 경우에 사용한다.

## 엔자임
- 엔자임(Enzyme)은 에어비앤비(Airbnb)가 만든 리액트 컴포넌트 테스트 유틸리티다. 
- 엔자임을 사용하려면 테스트 중에 컴포넌트와 상호작용하고 컴포넌트를 렌더링할 때 필요한 react-addons-test-utils를 설치해야 한다. 추가로 react-dom을 설치해야 한다.
- 엔자임을 사용하면 쉽게 컴포넌트를 렌더링하고 렌더링한 출력을 순회할 수 있다.
- 엔자임은 테스트나 조건 검사 프레임워크가 아니다. 엔자임은 테스트를 위해 리액트 컴포넌트를 렌더링하는 과정을 처리하고 자식 엘리먼트를 순회하거나 상태나 프로퍼티를 검증하거나, 이벤트를 시뮬레이션하거나, DOM에 대한 질의를 던질 때 필요한 도구를 제공한다.

### 엔자임 도구
- shallow : 단위 테스트를 위해 컴포넌트를 한 단계 렌더링해준다.
- mount : 브라우저 DOM을 사용해 컴포넌트를 렌더링한다. 컴포넌트 생애주기 전체를 테스트해야 하거나 자식 엘리먼트의 상태나 프로퍼티를 테스트해야 한다면 mount가 필요하다.
- render : 컴포넌트로 정적 HTML 마크업을 렌더링할 때 필요하다. render가 있으면 컴포넌트가 적절한 HTML을 생성하는지 테스트할 수 있다.
- 엔자임은 제이쿼리와 비슷한 함수를 제공한다. find 메서드와 셀렉터 문법을 사용해 결과 DOM을 검색할 수 있따.
- 엔자임은 이벤트를 시뮬레이션하고 그 이벤트가 발생 되었는지 검증해주는 도구를 제공한다. 이를 위해 목 함수(mock function)을 제공한다.

