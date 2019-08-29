# 함수를 호출하는 방법과 THIS의 이해

## 함수(function)의 호출

- his가 어떻게 결정되는지 알려면 일단 먼저 함수를 호출하는 방법에 대하여 알아보아야한다. 함수의 호출은 크게 4가지로 분류할 수 있다.
  - 1. 일반 함수로의 호출
    - 함수 뒤에 괄호를 붙여서 호출하는 것이다.
  ```javascript
  function say(something) {
    alert(something);
  }
  say("ho"); // #1
  ```
  - 2. 멤버 함수로의 호출
  ```javascript
  var unikys = {
    say: function (something) {
      alert(something);
    }
  }
  unikys.say("hello"); // #2
  ```
  - 3. call 함수를 이용한 호출
  - 4. apply 함수를 이용한 호출
- call과 apply 함수는 자바스크립트만의 독특한 내장 함수로, Function 객체에 기본적으로 들어있는 함수이다. 정확히 말하자면 Function.prototype에 들어있는 함수이다. 브라우져의 개발자 콘솔을 열어서 Function.prototype.call과 Function.prototype.apply를 쳐보면 내장 함수로 되어있는 것을 확인할 수 있다.
- call과 apply의 다른점은 이후의 인자를 직접 객체로 하나하나 넘겨주느냐, 또는 배열로 넘겨주느냐의 차이이다. 지금 당장은 이들 둘의 차이를 크게 느끼기 힘들겠지만, 둘은 약간 다르게 활용이 가능하다.

## 호출 방법에 따라 this가 결정되는 방법
```javascript
function whatsThis() {
  return this.toString();
}
var unikys = {
  what: whatsThis,
  toString: function () {
    return "[object unikys]";
  }
};

whatsThis(); // #1
unikys.what(); // #2
whatsThis.call(); // #3
whatsThis.apply(unikys); // #4
unikys.what.call(undefined); // #5
unikys.what.apply(unikys); // #6
```
- 1: this = window
  - 하나씩 살펴보면 #1인 경우는 글로벌 window 객체가 this로 설정되었다. 이렇게 #1처럼 호출할 때에는 숨은 인자가 있어서 그 인자는 바로 this가 되는 것인데, 숨은 인자는 기본값으로 window가 들어가게 된다 (ECMAScript5의 strict 모드에서는 이 부분 동작이 다른데, 조금 뒤에 알아보자). 나머지 다른 호출 방법에 의해 함수를 호출하게 되면 바로 이 숨은 인자가 다르게 설정되는 것이다. 이에 대한 정확하게 돌아가는 내용은 나머지 호출 방법들을 살펴보고 ECMAScript 5의 스펙에서 살펴보자.
- 2: this = unikys
  - 그럼 #2의 경우는 unikys.what()으로 호출한 경우는 이 숨은 인자로 unikys 객체가 넘어가는 것이다. 따라서 #2인 경우에는 this가 멤버변수로 호출한 객체가 되는 것이다. 하지만 같은 함수더라도 호출하는 방법이 다르면 this가 또 바뀌게 된다. 위의 예에서 아래의 소스를 실행하면 다시 this가 바뀌게 되는 것을 확인할 수 있다.
  - 이렇게 this가 함수나 scope 기반으로 결정되는 것이 아니라 호출 방법에 의하여 결정되다보니 많은 C나 자바 개발자들은 엄청난 혼란의 도가니에 빠질 것이다. 하지만 이 개념은 지금 이러한 숨은 인자의 존재만 잘 이해하고 있으면 제대로 활용할 수 있을 것이다.
- 3: this = window
  - 이제 #3번의 경우를 살펴보면, Function의 기본 내장 함수인 call 함수로 호출하고 있는데 인자가 없다. 자바스크립트에서는 함수에 인자가 부족해도, 많아도 호출하는데 전혀 지장이 없고, 만약에 인자가 적다면 기본값으로 undefined가 들어가게 된다. 이 이야기를 왜 하느냐하면, 바로 call함수와 apply 함수인 경우 위에서 #1과 #2에서 말한 this를 나타내는 '숨은 인자'가 1번째 인자로 나오게 되기 때문이다. 즉, call함수와 apply 함수의 첫번째 인자가 바로 this가 되는 것이다. 만약 첫번째 인자에 undefined나 null을 넘겨주거나 아무 인자 없이 호출하게 되면 #1에서 호출하는 것과 마찬가지인 것이다. 즉, #1과 #2를 각각 call 함수로 나타내보면 아래와 같이 되는 것이다.
- 4: this = unikys
- 5: this = window
- 6: this = unikys
- 위와 같이 참수를 호출할 때에 call이나 apply 함수의 첫번째 인자를 자동으로 설정해주는 것과 같은 동작을 하게 되는 것이다. 이렇게 보면 #4, #5, 그리고 #6의 동작하는 방법을 이해할 수 있을 것이다. call과 apply를 이용하게 되면 첫번째 인자가 this가 되는 것이다.

1. 현재 함수가 strict 모드면 일단 this를 thisArg(숨은 인자)로 설정한다.
2. strict모드가 아니고, thisArg가 undefined나 null이면 this를 글로벌(window) 객체로 설정한다.
3. 만약 thisArg가 Object가 아니면 this를 ToObject(thisArg)로 설정한다.
4. 위의 경우들이 아니라면 this를 thisArg로 설정한다.

- 전체적인 흐름을 보면 일단 strict모드가 아니므로 1 단계는 넘어가고, 2 단계에서 thisArg가 설정되지 않았을 경우 (undefined, null인 경우) window 글로벌 객체로 설정하는 것이 위의 예에서 #1과 #3, #5에 해당하는 경우이고, 이때에 [object Window]가 리턴된 것을 확인할 수 있다. 3 단계에서는 Object가 아닌 primitive type이 thisArg로 넘어온 경우 처리하는 단계로 아래와 같이 primitive type를 thisArg로 넘겨주면 그것을 Object로 바꿔서 잘 동작하는 것을 확인할 수 있다.
- 마지막 4 단계는 thisArg로 정상적인 Object가 넘어왔을 경우 this를 thisArg로 설정하는 것을 볼 수 있다. 이는 위의 예에서 #2, #4, #6의 경우에 해당하여 unikys 객체가 thisArg로 넘어와서 this로 설정된 것을 볼 수 있다.

## ECMAScript 5 strict mode
- strict 모드에 대해서는 따로 번외로 한번 다뤄야할 정도로 자바스크립트의 동작과 문법을 바꾸거나 제한하는 모드이다. 이것은 현재의 엄청 '자유로운' 자바스크립트에서 다소 '제한적인(strict)' 자바스크립트로 설정하는 것으로, 기존에는 없었던 syntax 에러들을 유발시키게 된다. 하지만 없던 에러가 생긴다는 것이 나쁜 것은 아니고, 자바스크립트가 너무 자유로워 실수, 오타 하나로 생긴 오류를 잡는 것이 엄청 힘들었던 것을 방지하고자하는 것이 바로 이 strict mode인 것이다.
  - 변수는 무조건 선언하고 사용해야한다. (글로벌 변수 덮어씌우기 방지)
  - get과 set을 통하여 readonly등을 명확하게 설정하여 덮어씌우기 방지
  - 지울수 없는 속성을 지우는 경우 에러 발생 (Object.prototype 등)
  - 중복된 변수 선언 금지
- strict모드에서 들어가게 되는 경우 위와 같이 자바스크립트가 제한적이 되어서 보안이나 서로 다른 자바스크립트 라이브러리의 영역을 침범하는 경우를 개선하고자 한 것이다. strict mode를 사용하는 방법은 간단하다. 소스의 맨 위에 "use strict"; 를 추가하거나 strict 모드를 사용할 함수의 맨 위에 "use strict";를 추가하면 된다. 문자열이기 때문에 strict 모드를 지원하지 않은 브라우져에서는 그냥 넘어가게 되지만, strict 모드를 적용하게 되면 일부 동작들은 달라지게 될 것이므로, 적용을 하고자 한다면 이 둘의 차이에 대하여 정밀한 기능 테스트를 해야할 것이다.
- 위에서 whatsThis()를 호출하면 리턴되는 this가 undefined인 것이 기존의 [object Window] 였던 것과 바뀌게 된다. 이는 위의 내부 프로세스 1 단계에서 undefined가 오든, null이 오든 strict 모드인 경우 바로 this로 설정하는 것을 보면 이해할 수 있게 될 것이다. 이렇게 this를 제한하는 것은 함수의 잘못된 호출로 인하여 this를 이용해서 global의 데이터가 덮어씌워지거나 수정되는 것을 방지하고자 생긴 것이다. 만약 strict 모드로 한다면 this의 이해할 수 없는 동작도 조금은 방지할 수 있을지도 모른다.
- 그래도 strict 모드의 성급한 도입은 아직 모든 브라우져가 100% 지원하고 있지 않기 때문에 조심해야할 것이므로 이후에는 strict 모드에 대한 고려는 배제하도록 하자.

## arguments
- 이것은 함수를 호출하게 되면 함수 내부에서 기본적으로 존재하게 되는 변수이고, 자바스크립트의 함수들이 기본적으로 인자의 수에 제한없이 유동적으로 활용가능한 것이 바로 arguments가 있기 때문이다. 이 arguments와 apply를 이용하면 위의 this에서 일어나는 혼란을 다소 억제시킬 수 있는 bind 함수를 만들 수 있다.
- arguments라는 함수 내부의 변수를 통해서 인자로 넘어온 값을 순차적으로 접근할 수 있다. 위의 두 번째 경우에는 arguments[0] === "unikys", arguments[1] === "tistory"가 되어 접근이 가능하다. arguments가 생긴것은 length도 있고, 배열처럼 []로 index 기반 데이터 접근도 가능하여 Array 배열과 상당히 비슷하여 헷갈릴수도 있지만, Array와는 다른 객체이다.
- 위와 같이 length도 있고, []로도 접근이 가능하지만 .slice(1) 함수를 호출하면 에러가 난다. arguments는 Array가 아니기 때문에 Array의 기본 내장함수가 없기 때문이다. 하지만, arguments가 생긴 것은 Array와 거의 비슷하기 때문에 Array의 함수를 가져와서 사용할 수도 있다. call과 apply을 이용해서 this를 수정하면 다른 객체의 함수가 마치 내 함수인 것처럼 사용할 수 있다.
- arguments 자체는 slice와 splice 함수가 없지만, call을 이용해서 Array의 기능을 똑같이 적용한 것을 확인할 수 있다. 이렇게 call과 apply를 통해 다른 객체의 함수를 마치 자신의 함수인 것처럼 사용을 할수도 있지만, 이는 내부 프로세스가 어떻게 돌아가는지 알고, 어떠한 영향을 미치는지 알고 있을 때 활용 가능할 것이다.

## this를 고정시키는 bind 함수

## 정리

- 각 함수의 호출 방법에 따라 this가 결정되는 방법은 아래 표와 같이 정리할 수 있다.

| 호출 방식 | this |
| - | - |
| func(args); | window |
| "use strict";<br />func(args); | undefined |
| obj.func(args); | obj |
| func.call(obj, args); | obj (첫번째 인자) |
| func.apply(obj, args); | obj (첫번째 인자) |
- arguments는 함수로 들어온 인자의 정보를 저장하고 있으며, Array와 비슷하지만 Array는 아니다.
- call이나 apply를 이용하면 다른 객체의 함수가 내것인양 사용할 수 있다.
- bind 함수를 이용하면 this를 고정시킬 수 있다. (직접 구현도 가능하고, ECMAScript5 이상에 기본 내장함수로 포함되어있다.

## 덤: call vs apply

- 사실 두개의 다른 점을 느끼기에는 많이 힘들 것이다. 하지만, call은 함수의 인자의 수가 항상 고정일 때 이용하면 좋고, apply는 위의 bind와 같이 인자의 수가 고정이 아니라 유동적일 때 배열에다가 인자를 다 넣어서 호출을 할 때 이용하면 편하다. 속도는 아무래도 객체를 하나 덜 생성해도 되는 call이 좋을거라 생각하지만, 체감은 별로 없을 것이다.
- call과 apply 두개만 놓고 보면 call이 살짝 더 빠르기는 하지만 array를 생성하는 등의 상황을 따져본다면 아주 큰 차이는 없을 것이다. 실제로 테스트를 해보려면 아래 사이트에서 해보면 된다.

출처: https://unikys.tistory.com/306 [All-round programmer]