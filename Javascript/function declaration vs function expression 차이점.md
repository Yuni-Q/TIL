# function declaration vs function expression 차이점

## function과 자바스크립트

- 자바스크립트는 다른 언어들보다도 function이 아주 중요한 위치를 차지하고 있다. 다른 언어에서는 class나 object가 중요한 위치에 있다고 한다면, 자바스크립트는 그 위치에 function이 있는 것이다. 이러한 자바스크립트는 function과 함께 object, 그리고 closure의 특성까지 합쳐져서 현재의 새로운 자바스크립트만의 개발 패러다임이 형성된 것이다.
```javascript
function sayYeah() { //#1: function declaration 
  console.log("Yeah");
};
sayYeah();

var sayHo = function () { //#2: function expression
  console.log("Ho");
};
sayHo();
```
- 위는 함수의 대표적인 두가지 선언 방식이다.
- 이 두가지는 거의 비슷하다. 일단 호출되는 방식은 위의 두가지가 동일하다. 하지만 위와 아래의 차이점은 바로 함수가 생성되는 시점이다.
- 위의 #1는 함수는 자바스크립트가 로드될 때 생성하게 되고, 현재 함수가 선언되는 해당 context에 함수와 같은 이름의 local 변수가 생성되고, 그 변수에 sayYeah() 함수가 들어가는 것이다.
- 그 반면, #2는 해당하는 행이 실제로 실행되기 전까지 함수가 생성되지 않는다. 이것은 run타임/parse타임의 차이라고 볼수도 있지만, 좀더 깊이 들어가게 되면 또 딱 'parse' 타임이라고 볼수도 없다. 만약 global에 function declaration을 했을 경우에는 거의 parse타임과 일치하게 되는 것이 맞지만 다른 function scope 안에 넣게 된다면, 예를 들면 아래와 같을 때에는 언제 생성되는지 알면 좋을 것이다.
```javascript
function hello() { // #3 
  console.log(sayHello());
  function sayHello() {
    return "Whats up";
  }
}
```
- 위와 같은 경우 hello()는 글로벌 scope에 있지만, sayHello()는 아니다. 따라서 만약 내부 함인 sayHello()를 hello()가 parse되는 초기 parse타임에 같이 바로 정의를 하고 호출가능하도록 파싱을 한다면, hello()의 context에 부여하는 것은 언제 hello()가 호출될지도 모르고 hello가 어떠한 context를 가질지도 확실하지 않은데다 sayHello가 접근이 불가능한 scope에 있는 것이므로 다소 비효율적인 설계임을 느낄 수 있을 것이다. 따라서 실제 설계가 어떻게 되어있는지는 조금 뒤에 함수가 호출되면 내부적으로 일어나는 순서를 보면서 조금 깊게 들어가보자.

```javascript
function hello() {    // #4
  console.log(sayHello());   // error!!
  var sayHello = function () {    //#5
    return "Whats up";
  };
}
```
- \#3의 경우는 문제 없이 잘 돌아가지만, #4의 경우는 에러가 난다. 왜냐하면 function expression은 #5가 실제로 실행되기 전까지는 sayHello 함수가 생성되지 않고, #3의 경우는 미리 함수가 생성되기 때문에 에러가 안난다

```javascript
var sayWow = function sayWhat(what) {
  console.log(what);
  if (what && what.length < 10) {
    sayWhat(what + "-" + what));
  }
};
```
- 이것은 named function 경우는 함수가 재귀함수일 경우 사용하게 된다. 함수 내부에서 재귀로 자기 함수를 다시 호출하고자 할 때에 sayWhat()을 다시 호출할 수 있다. 그냥 sayWow()를 해도 되기는 하지만 자바스크립트에서는 재귀함수를 위처럼 하는 것이 안전하다. 예를 들면 아래와 같은 경우 에러를 방지할 수 있기 때문이다.

```javascript
var doStep = function nextStep(step) {
  if (step > 0) {
    console.log("Step! : " + this.name);
    nextStep.call(this, step - 1);
  }
}; 
var person = { name: "stranger", walk: doStep };
person.walk(5);
var unikys = { name: "unikys", run: doStep };
unikys.run(10);
```
- 위와 같이 다른 객체의 변수로 함수를 부여하는 경우 두 함수는 재귀함수가 각자 선언된 context를 따라가게 되므로 예상치 못하는 에러를 방지할 수 있게 되는 것이다. 이렇게 함수를 선언하게 되면 외부에서 함수를 접근할 수 있는 방법은 변수로 선언된 'doStep'으로만 할 수 있고, 함수 내부에서는 'nextStep'으로도 접근이 가능하다. 물론 위의 경우는 nextStep 내부 scope에서 doStep 변수가 접근이 가능하지만, 함수를 변수로 넘겨서 다른 scope로 넘어가는 경우 또 이야기가 달라질 수 있다.

## function의 활용
- 단순한 함수로 사용
  - 단순한 함수로 사용하는 것은 모든 언어에서 일반적이다. 변수로 선언하는 것은 위의 #2인 경우로 볼 수 있다. 이것은 단순히 변수에 할당할 때 보다는 네임스페이스나 모듈에 함수를 부여할 때 이용된다.
- 변수로 선언해서 사용
- 다른 함수의 인자로 넘겨서 사용
  - 다른 함수의 인자로 넘겨서 사용하는 것은 콜백 함수에서 자주 발견할 수 있다. 이러한 콜백함수를 인자로 넘겨줄 수 있는 강점이 자바스크립트의 가장 큰 장점중 하나이다.
  - event delegation 까지 가게 된다면 이러한 강점에 다시 한번 감탄하며 다른 언어에서도 이렇게 편하게 한다면 얼마나 좋을까 생각하게 될지도 모른다. 
- 동적으로 생성해서 사용
  - 새로운 함수를 Function객체로 생성하여 사용할수도 있다. Function의 경우에는 인자의 수는 정해져있지 않으며, 전부다 생성되는 함수의 인자 변수명으로 사용되고, 마지막 인자만 함수 내부에 들어갈 소스코드 스트링으로서 활용된다. 이러한 경우 함수 내부의 소스코드가 스트링으로 동적으로 할당이 가능하게 되므로 사용자의 데이터나 서버의 데이터에 따라 다른 함수를 생성할 수 있게 된다.
- 객체를 생성할 때 사용
  - 객체를 생성할 때 사용되는 것은 바로 생성자이다. 이것은 constructor로 모든 자바스크립트 객체가 가지고 있는 생성자로의 레퍼런스의 주인이 되기도 하는 것이다. 바로위의 예에서 new Function() 과 같이 하는 것이 함수를 생성자로서 사용하는 것이다. 라이브러리에서 이러한 생성자로서의 활용을 많이 할 것이다.
- scope를 생성할 때 사용
  - scope를 생성할 때에는 이전의 강좌에서 읽어보면 이해할 수 있을 것이다. 하지만 이것은 closure로 활용하게 됨으로써 각 function이 자기만의 저장소를 가질 수 있도록 해줄 수 있는 또 다른 응용 방법으로도 활용하게 될 것이다. 이것은 나중에 closure에 대해서 자세하게 다룰 때 다시 한번 공부해보자.

## 내부 function이 선언되는 '정확한' 타이밍
- 로컬에 함수가 있는 경우에는 흔히들 말하는 '컴파일 타임'에 파싱되어 정의되어있는 것으로 알고 있을 수가 있는데, 스크립트 언어에서 내부 함수는 약간 다른 파싱 프로세스를 가지는 경우가 많다. 자바스크립트의 경우도 그러한데, 일단 원론적으로 함수가 호출되면 이루어지는 내부적인 구조를 Ecmascript 5 로부터 가져와서 한번 살펴보자. 아래는 Ecmascript 5 에서 정의하고 있는 함수가 호출 되었을 때 하게 되는 일들을 쓴 것이다.
  1. If the function code is strict code, set the ThisBinding to thisArg.
  2. Else if thisArg is null or undefined, set the ThisBinding to the global object.
  3. Else if Type(thisArg) is not Object, set the ThisBinding to ToObject(thisArg).
  4. Else set the ThisBinding to thisArg.
  5. Let localEnv be the result of calling NewDeclarativeEnvironment passing the value of the [[Scope]] internal property of F as the argument.
  6. Set the LexicalEnvironment to localEnv.
  7. Set the VariableEnvironment to localEnv.
  8. Let code be the value of F’s [[Code]] internal property.
  9. Perform Declaration Binding Instantiation using the function code code and argumentList as described in 10.5.
- 여기서 argument라던가 this를 정의하고, 변수 등 scope를 정의하는 부분을 넘어가고 나면, 마지막 9번 항목에 보면 Declaration binding instantiation이 일어난다고 한다. 이것은 function code와 argumentList를 이용해서 내부 함수에서 정의된 함수를 변수나 로컬 함수처럼 binding 한다는 것이다. 즉, 함수 안에 함수를 쓰게 되면 해당하는 내부 함수는 외부 함수가 호출 될 때 9번 단계에 의하여 그때에 선언하게 되는 것이다. 굳이 이것까지 알 필요는 없겠지만, function declaration과 function expression이 서로 다른 시기에 파싱되어 정의된다는 점, 그리고 function declaration은 정확하게는 '컴파일 타임'은 아니라는 점은 지식으로 가지고 있다면 좋을 것이다.
- 위와 같은 사실을 알게 되었다면 맨위의 sayHello() 예에서 조금이라도 더 최적화를 하려면 어떻게 해야하는지 고민이 가능할 것이다. 만약 함수가 확실하게 사용될 것이라면 function declaration으로, 함수가 선택적으로 서로 다른 함수가 호출 될 것이라면 function expression을 사용하는 것이 위의 9번 단계에서 조금 더 나은 퍼포먼스를 보장할 수 있을 것이다. 하지만 사실 이러한 차이는 피부로는 와닿지 않으므로 어떻게 사용하든 상관은 없지만 머리로만 인식을 하고 있자.

## function 함수 생성 방법 성능 비교

- 위의 #1 function declaration과 #2 function expression 두가지 함수 선언 방법이 있지만, 두 가지 생성 과정이 다르기 때문에 성능 또한 다를 것이다. 이 두가지의 성능면에서 차이가 없다고 많이들 하겠지만 더 깊이 들어가면 두 가지 방법의 성능 차이가 있기는 있다. 다만 중요한 것은 이것은 자바스크립트 엔진에 따라 독립적인 차이가 되는 것이다.
- 전체적으로 보면 function declaration이 성능이 좋고, 파이어폭스에서는 function expression이 성능이 좋다. 따라서 고려하고 있는 타겟 브라우져에 따라 다른 개발 방법론을 만들어야 성능이 개선될 것이다. 하지만 일반화를 조금 시켜보면 function declaration이 대체로 성능이 좋기 때문에, 더 사용을 하면 된다는 것을 알 수 있다. 물론 전부다 적용되는 것은 아니므로 조심스러운 태도로 이러한 주장을 펼치면 될 것이다.
- 이렇게 서로 다른 퍼포먼스가 나오는 이유는 자바스크립트 엔진과 브라우져의 성능 차이이다. 다른 것보다도 자바스크립트 엔진이 이러한 것에 크게 영향을 미치므로 일반적인 자바스크립트 엔진의 특징과 서로 다른 엔진이 어떻게 다르게 작동하는지 살짝 맛볼 수 있을 것이다.

## 정리
- 함수는 변수로, 인자로, 리턴값으로, scope를 생성할 때 다양하게 활용된다.
- 함수를 선언하는 방법은 크게 function declaration과 function expression이 있다. 
- new Function()을 통해서 스트링으로 함수를 동적으로 생성할 수 있다.
- function declaration은 컴파일 타임, 정확히는 외부 함수/글로벌 환경이 생성될때 파싱된다.
- function expression은 해당하는 줄이 실행 될 때 파싱된다.
- 멤버 변수로 정의할 때/변수로 활용할 때 function expression이 유용하다.
- 대체적인 퍼포먼스는 function declaration이 좋지만 단정할 수는 없다.

출처: https://unikys.tistory.com/305 [All-round programmer]