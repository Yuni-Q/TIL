
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