# JEST

## afterEach()로 데이터 정리하기

- afterEach() 함수로 넘긴 코드는 첫번째 테스트가 실행된 후 호출 되고, 두번째 테스트가 실행된 후에도 호출 된다.

## beforeEach()로 중복 코드 제거하기

- beforeEach() 함수의 인자로 넘어간 코드는 각각의 테스트 함수가 실행되기 전에 매번 실행됩니다.

## beforeAll(), afterAll()

- Jest에는 beforeEach(), afterEach()와 매우 유사하게 생긴 beforeAll(), afterAll() 함수도 있습니다.
- 함수 이름에 유추할 수 있듯이 beforeAll(), afterAll()은 각각 함수의 전 후에 매번 호출되는 것이 아니라, 맨 처음과 맨 끝에 딱 한 번씩만 호출됩니다.

## only(), skip()

- 테스트 파일 안에 테스트 함수에 많은 데 그 중에서 하나만 실패했을 경우, 그 함수만 단독으로 실행해보고 싶을 떄가 있습니다.
- 그럴 때는 해당 테스트 함수 뒤에 .only() 라고 붙여 주면 Jest Runner는 해당 테스트 파일을 실행할 때 .only()가 붙은 함수만 실행해줍니다.
- skip()은 only()에 반대로 작동합니다. 어떤 함수만 빼고 실행해보고 싶을 때 해당 테스트 함수에 only()를 붙여주면 Jest Runner는 해당 함수를 제외하고 다른 테스트 함수들만 실행해줍니다.

## describe(), it()

- Jest의 describe() 함수를 통해 여러 개의 테스트 함수를 묶는 것이 가능합니다.
- test() 함수 대신에 it() 함수를 사용하기도 했는데요. 이 두 함수는 완전히 동일한 기능을 하는 함수입니다. 기존 많이 사용되었던 Mocha나 Jasmin 같은 테스트 라이브러리에서 함수명을 it()을 사용하였기 때문에, Jest에서도 it()을 test() 함수의 별칭으로 제공해주고 있습니다.

## toEqual()

- 테스트 코드를 작성할 때는 객체를 검증해야할 일이 많기 때문에 toEqual() 함수를 가장 많이 접할 수 있습니다.

## toBeTruthy(), toBeFalsy()

- toBeTruthy()는 검증 대상이 이 규칙에 따라 true로 간주되면 테스트 통과이고, toBeFalsy()는 반대로 false로 간주되는 경우 테스트가 통과됩니다.

## toHaveLength(), toContain()

- 배열의 경우에는 배열이 길이를 체크하거나 특정 원소가 존재 여부를 테스트하는 경우가 많습니다.
- toHaveLength() 배열의 길이를 체크할 때 쓰이고, toContain() 특정 원소가 배열에 들어있는지를 테스트할 때 쓰입니다.

## not

- 어떤 Matcher 함수가 불만족하는지를 테스트할 때는 앞에 not을 붙여주면 됩니다.

## toMatch()

- 문자열의 경우에는 단순히 toBe()를 사용해서 문자열이 정확히 일치하는지를 체크하지만, 종종 정규식 기반의 테스트가 필요할 떄가 있는데 toMatch() 함수를 사용하면됩니다.

## toThrow()

- 예외 발생 여부를 테스트해야할 때는 toThrow() 함수를 사용하면 됩니다.
- toThrow() 함수는 인자도 받는데 문자열을 넘기면 예외 메세지를 비교하고 정규식을 넘기면 정규식 체크를 해줍니다.
- toThrow() 함수를 사용할 때 하기 쉬운 실수 인데요. 반드시 expect() 함수에 넘기는 검증 대상을 함수로 한 번 감싸줘야 합니다. 그렇지 않으면 예외 발생 여부를 체크하는 것이 아니라, 테스트 실행 도중 정말 그 예외가 발생하기 때문에 그 테스트는 항상 실패하게 됩니다.

## jest.fn() 사용법

- Jset는 가짜 함수(mock functiton)를 생성할 수 있도록 jest.fn() 함수를 제공합니다.
- 그리고 이 가짜 함수는 일반 자바스크립트 함수와 동일한 방식으로 인자를 넘겨 호출할 수 있습니다.
- 위 가짜 함수의 호출 결과는 모두 undefined 입니다. 어떤 값을 리턴해야할지 아직 알려주지 않았기 때문입니다.
- mockReturnValue(리턴 값) 함수를 이용해서 가짜 함수가 어떤 값을 리턴해야할지 설정해줄 수 있습니다.
- 비슷한 방식으로 mockResolvedValue(Promise가 resolve하는 값) 함수를 이용하면 가짜 비동기 함수를 만들 수 있습니다.
- 뿐만 아니라 mockImplementation(구현 코드) 함수를 이용하면 아예 해당 함수를 통째로 즉석해서 재구현해버릴 수도 있습니다.
- 위와 같이 가짜 함수 용 설계된 Jest Matcher인 toBeCalled\*\*\* 함수를 사용하면 가짜 함수가 몇번 호출되었고 인자로 무엇이 넘어왔었는지를 검증할 수 있습니다.
  - expect(mockFn).toBeCalledTimes(2);
  - expect(mockFn).toBeCalledWith('a');
  - expect(mockFn).toBeCalledWith(['b', 'c']);

## jest.spyOn() 사용법

- mocking에는 스파이(spy)라는 개념이 있습니다. 현실이나 영화 속에서 스파이라는 직업은 “몰래” 정보를 캐내야 합니다.
- 테스트를 작성할 때도 이처럼, 어떤 객체에 속한 함수의 구현을 가짜로 대체하지 않고, 해당 함수의 호출 여부와 어떻게 호출되었는지만을 알아내야 할 때가 있습니다. 이럴 때, Jest에서 제공하는 jest.spyOn(object, methodName) 함수를 이용하면 됩니다.

## toHaveProperty

- expect(user).toHaveProperty('id', 1);
- expect(user).toHaveProperty('name', 'Leanne Graham');

## jest.mock()

- jest.mock() 함수는 첫 번째 인자로 넘어온 모듈 내의 모든 함수를 자동으로 목(mock) 함수로 바꿔줍니다.
