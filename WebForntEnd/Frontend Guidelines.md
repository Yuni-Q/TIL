# Frontend Guidelines

## HTML

### Semantics

HTML5는 콘텐츠를 정확하게 설명하기 위해 많은 의미 론적 요소를 제공합니다. 풍부한 어휘를 통해 이익을 얻으십시오.

```html
<!-- bad -->
<div id="main">
  <div class="article">
    <div class="header">
      <h1>Blog post</h1>
      <p>Published: <span>21st Feb, 2015</span></p>
    </div>
    <p>…</p>
  </div>
</div>

<!-- good -->
<main>
  <article>
    <header>
      <h1>Blog post</h1>
      <p>Published: <time datetime="2015-02-21">21st Feb, 2015</time></p>
    </header>
    <p>…</p>
  </article>
</main>
```

사용중인 요소의 의미를 이해했는지 확인하십시오. 시맨틱 요소를 중립적으로 사용하는 것보다 잘못된 방법으로 사용하는 것이 더 나쁩니다.

```html
<!-- bad -->
<h1>
  <figure>
    <img alt="Company" src="logo.png" />
  </figure>
</h1>

<!-- good -->
<h1>
  <img alt="Company" src="logo.png" />
</h1>
```

### Brevity

코드를 간결하게하십시오. 오래된 XHTML 습관을 잊어 버려라.

```html
<!-- bad -->
<!doctype html>
<html lang=en>
  <head>
    <meta http-equiv=Content-Type content="text/html; charset=utf-8" />
    <title>Contact</title>
    <link rel=stylesheet href=style.css type=text/css />
  </head>
  <body>
    <h1>Contact me</h1>
    <label>
      Email address:
      <input type=email placeholder=you@email.com required=required />
    </label>
    <script src=main.js type=text/javascript></script>
  </body>
</html>

<!-- good -->
<!doctype html>
<html lang=en>
  <meta charset=utf-8>
  <title>Contact</title>
  <link rel=stylesheet href=style.css>

  <h1>Contact me</h1>
  <label>
    Email address:
    <input type=email placeholder=you@email.com required>
  </label>
  <script src=main.js></script>
</html>
```

> 의문 : head와 body를 쓰지 않는 것이 좋은것인가?

### Accessibility

접근성은 고려 사항이어서는 안됩니다. 웹 사이트를 개선하기 위해 WCAG 전문가 일 필요는 없습니다. 다음과 같이 큰 차이를 만드는 작은 것들을 수정하여 즉시 시작할 수 있습니다.

- alt 속성을 올바르게 사용하는 방법 배우기
- 귀하의 링크와 버튼이 같은 것으로 표시되어 있는지 확인하십시오 (<div class = button> atrocities)
- 색에 독점적으로 의존하지 않고 정보를 전달할 수 있습니다.
- 폼 컨트롤에 명시 적으로 레이블 지정

```html
<!-- bad -->
<h1><img alt="Logo" src="logo.png" /></h1>

<!-- good -->
<h1><img alt="Company" src="logo.png" /></h1>
```

> 의문 : 적절한 예시인지 잘 모르겠다.

### Language & character encoding

언어를 정의하는 것은 선택 사항이지만 항상 루트 요소에 선언하는 것이 좋습니다.  
HTML 표준에서는 페이지에서 UTF-8 문자 인코딩을 사용해야합니다. 선언되어야하며 Content-Type HTTP 헤더에서 선언 할 수 있지만 항상 문서 수준에서 선언하는 것이 좋습니다.

```html
<!-- bad -->
<!DOCTYPE html>
<title>Hello, world.</title>

<!-- good -->
<!DOCTYPE html>
<html lang="en">
  <meta charset="utf-8" />
  <title>Hello, world.</title>
</html>
```

### Performance

콘텐츠 앞에 스크립트를로드해야하는 타당한 이유가없는 한 페이지 렌더링을 차단하지 마십시오. 스타일 시트가 무거울 경우, 처음에 꼭 필요한 스타일을 분리하고 별도의 스타일 시트에 2 차 선언의 로딩을 연기하십시오. 두 개의 HTTP 요청은 하나보다 훨씬 느리지 만 속도에 대한 인식이 가장 중요한 요소입니다.

```html
<!-- bad -->
<!DOCTYPE html>
<meta charset="utf-8" />
<script src="analytics.js"></script>
<title>Hello, world.</title>
<p>...</p>

<!-- good -->
<!DOCTYPE html>
<meta charset="utf-8" />
<title>Hello, world.</title>
<p>...</p>
<script src="analytics.js"></script>
```

## CSS

### Semicolons

세미콜론은 기술적으로 CSS의 구분 기호이지만 항상 종결 자로 취급하십시오.

```css
/* bad */
div {
  color: red;
}

/* good */
div {
  color: red;
}
```

### Box model

상자 모델은 전체 문서에 대해 이상적으로 동일해야합니다. 전역 \* {상자 크기 : 테두리 상자; } 괜찮지 만 특정 요소의 기본 상자 모델은 변경하지 마십시오.

```css
/* bad */
div {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

/* good */
div {
  padding: 10px;
}
```

### Flow

요소를 피할 수 있으면 기본 동작을 변경하지 마십시오. 가능한 한 자연스러운 문서 흐름의 요소를 유지하십시오. 예를 들어 이미지 아래의 공백을 제거해도 기본 표시를 변경해서는 안됩니다.

```css
/* bad */
img {
  display: block;
}

/* good */
img {
  vertical-align: middle;
}
```

마찬가지로, 피할 수있는 경우 요소를 흐름에서 제거하지 마십시오.

```css
/* bad */
div {
  width: 100px;
  position: absolute;
  right: 0;
}

/* good */
div {
  width: 100px;
  margin-left: auto;
}
```

### Positioning

CSS에서 요소를 배치하는 방법은 여러 가지가 있습니다. Flexbox 및 Grid와 같은 최신 레이아웃 사양을 선호하고 일반적인 문서 흐름에서 요소를 제거하지 마십시오 (예 : position : absolute).

### Selectors

DOM에 단단히 결합 된 선택기를 최소화하십시오. 선택기가 3 개의 구조적 의사 클래스, 자손 또는 형제 결합자를 초과 할 때 일치시킬 요소에 클래스를 추가하는 것을 고려하십시오.

```css
/* bad */
div:first-of-type :last-child > p ~ *

/* good */
div:first-of-type .info
```

선택기에 과부하가 걸리지 않도록주의하십시오.

```css
/* bad */
img[src$="svg"],
ul > li:first-child {
  opacity: 0;
}

/* good */
[src$="svg"],
ul > :first-child {
  opacity: 0;
}
```

### Specificity

재정의하기 어려운 값과 선택자를 만들지 마십시오. !important의 사용을 최소화하고 피하십시오!

```css
/* bad */
.bar {
  color: green !important;
}
.foo {
  color: red;
}

/* good */
.foo.bar {
  color: green;
}
.foo {
  color: red;
}
```

### Overriding

스타일 재정의는 선택기와 디버깅을 더욱 어렵게 만듭니다. 가능하면 피하십시오.

```css
/* bad */
li {
  visibility: hidden;
}
li:first-child {
  visibility: visible;
}

/* good */
li + li {
  visibility: hidden;
}
```

### Inheritance

상속 될 수 있는 스타일 선언을 복제하지 마십시오.

```css
/* bad */
div h1,
div p {
  text-shadow: 0 1px 0 #fff;
}

/* good */
div {
  text-shadow: 0 1px 0 #fff;
}
```

### Brevity

코드를 간결하게하십시오. 속기 속성을 사용하고 필요하지 않을 때 여러 속성을 사용하지 마십시오.

```css
/* bad */
div {
  transition: all 1s;
  top: 50%;
  margin-top: -10px;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-left: 10px;
}

/* good */
div {
  transition: 1s;
  top: calc(50% - 10px);
  padding: 5px 10px 20px;
}
```

### Language

수학보다 영어를 더 좋아합니다.

```css
/* bad */
:nth-child(2n + 1) {
  transform: rotate(360deg);
}

/* good */
:nth-child(odd) {
  transform: rotate(1turn);
}
```

### Vendor prefixes

오래된 공급업체 접두사를 공격적으로 제거하십시오. 이 옵션을 사용해야 하는 경우 표준 속성 앞에 삽입하십시오.

```css
/* bad */
div {
  transform: scale(2);
  -webkit-transform: scale(2);
  -moz-transform: scale(2);
  -ms-transform: scale(2);
  transition: 1s;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  -ms-transition: 1s;
}

/* good */
div {
  -webkit-transform: scale(2);
  transform: scale(2);
  transition: 1s;
}
```

### Animations

애니메이션을 통한 전환 즐겨찾기 불투명도 및 변환 이외의 다른 특성을 애니메이션화하지 마십시오.

```css
/* bad */
div:hover {
  animation: move 1s forwards;
}
@keyframes move {
  100% {
    margin-left: 100px;
  }
}

/* good */
div:hover {
  transition: 1s;
  transform: translateX(100px);
}
```

### Units

가능한 경우 단위 없는 값을 사용하십시오. 상대 단위를 사용하는 경우 rem. 밀리초보다 초 선호.

```css
/* bad */
div {
  margin: 0px;
  font-size: 0.9em;
  line-height: 22px;
  transition: 500ms;
}

/* good */
div {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  transition: 0.5s;
}
```

### Colors

투명성이 필요한 경우 rgba를 사용하십시오. 그렇지 않으면 항상 16진수 형식을 사용하십시오.

```css
/* bad */
div {
  color: hsl(103, 54%, 43%);
}

/* good */
div {
  color: #5a3;
}
```

### Drawing

리소스가 CSS로 쉽게 복제될 수 있는 경우 HTTP 요청을 피하십시오.

```css
/* bad */
div::before {
  content: url(white-circle.svg);
}

/* good */
div::before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
}
```

### Hacks

Don't use them.

```css
/* bad */
div {
  // position: relative;
  transform: translateZ(0);
}

/* good */
div {
  /* position: relative; */
  will-change: transform;
}
```

## JavaScript

### Performance

성능보다 읽기 쉽고 정확하며 표현력이 좋다. JavaScript는 기본적으로 성능 병목 현상이 되지 않을 것이다. 대신 이미지 압축, 네트워크 액세스 및 DOM 리플로우와 같은 것을 최적화하십시오. 이 문서의 지침 하나만 기억하면 이 지침을 선택하십시오.

```javascript
// bad (albeit way faster)
const arr = [1, 2, 3, 4];
const len = arr.length;
var i = -1;
var result = [];
while (++i < len) {
  var n = arr[i];
  if (n % 2 > 0) continue;
  result.push(n * n);
}

// good
const arr = [1, 2, 3, 4];
const isEven = n => n % 2 == 0;
const square = n => n * n;

const result = arr.filter(isEven).map(square);
```

### Statelessness

당신의 기능을 순수하게 유지하도록 노력하라. 모든 기능은 이상적으로 부작용을 발생시키지 않아야 하며 외부 데이터를 사용하지 않아야 하며 기존 개체를 변형하는 대신 새로운 개체를 반환해야 한다.

```javascript
// bad
const merge = (target, ...sources) => Object.assign(target, ...sources);
merge({ foo: "foo" }, { bar: "bar" }); // => { foo: "foo", bar: "bar" }

// good
const merge = (...sources) => Object.assign({}, ...sources);
merge({ foo: "foo" }, { bar: "bar" }); // => { foo: "foo", bar: "bar" }
```

### Natives

가능한 한 토속적인 방법을 믿어라.

```javascript
// bad
const toArray = obj => [].slice.call(obj);

// good
const toArray = (() => (Array.from ? Array.from : obj => [].slice.call(obj)))();
```

> 의문 : 이해가 잘 되지 않는다. obj를 받지 않아도 되는 것인가?

### Coercion

말이 될 때 암묵적인 강제성을 수용하라. 그렇지 않으면 피하라. Don't cargo-cult.

```javascript
// bad
if (x === undefined || x === null) { ... }

// good
if (x == undefined) { ... }
```

### Loops

루프들이 여러분을 변이성 물체를 사용하도록 강요하기 때문에 루프를 사용하지 마십시오. 어레이.프로토타입 방법에 의존하십시오.

```javascript
// bad
const sum = arr => {
  var sum = 0;
  var i = -1;
  for (; arr[++i]; ) {
    sum += arr[i];
  }
  return sum;
};

sum([1, 2, 3]); // => 6

// good
const sum = arr => arr.reduce((x, y) => x + y);

sum([1, 2, 3]); // => 6
```

할 수 없거나 array.prototype 메소드를 사용하는 것이 논란의 여지가있는 경우 재귀를 사용하십시오.

```javascript
// bad
const createDivs = howMany => {
  while (howMany--) {
    document.body.insertAdjacentHTML("beforeend", "<div></div>");
  }
};
createDivs(5);

// bad
const createDivs = howMany =>
  [...Array(howMany)].forEach(() =>
    document.body.insertAdjacentHTML("beforeend", "<div></div>")
  );
createDivs(5);

// good
const createDivs = howMany => {
  if (!howMany) return;
  document.body.insertAdjacentHTML("beforeend", "<div></div>");
  return createDivs(howMany - 1);
};
createDivs(5);
```

### Arguments

인수 개체는 잊어버려라. 정지 파라미터는 다음과 같은 이유로 항상 더 나은 옵션이다.

1. 이름이 붙어서 함수가 기대하는 주장을 더 잘 알 수 있게 해 주는 겁니다
1. 진짜 배열이라 사용하기 편해

```javascript
// bad
const sortNumbers = () => Array.prototype.slice.call(arguments).sort();

// good
const sortNumbers = (...numbers) => numbers.sort();
```

### Apply

apply()은 잊으십시오. 대신 스프레드 연산자를 사용하십시오.

```javascript
const greet = (first, last) => `Hi ${first} ${last}`;
const person = ["John", "Doe"];

// bad
greet.apply(null, person);

// good
greet(...person);
```

### Bind

좀 더 관용적인 접근이 있을 때는 bind() 하지 마라.

```javascript
// bad
["foo", "bar"].forEach(func.bind(this));

// good
["foo", "bar"].forEach(func, this);
```

```javascript
// bad
const person = {
  first: "John",
  last: "Doe",
  greet() {
    const full = function() {
      return `${this.first} ${this.last}`;
    }.bind(this);
    return `Hello ${full()}`;
  }
};

// good
const person = {
  first: "John",
  last: "Doe",
  greet() {
    const full = () => `${this.first} ${this.last}`;
    return `Hello ${full()}`;
  }
};
```

### Higher-order functions

굳이 그럴 필요가 없을 때는 보금자리를 만드는 것을 피하라.

```javascript
// bad
[1, 2, 3].map(num => String(num));

// good
[1, 2, 3].map(String);
```

### Composition

중첩된 기능 호출을 여러 번 피하십시오. 대신 작문을 사용하라.

```javascript
const plus1 = a => a + 1;
const mult2 = a => a * 2;

// bad
mult2(plus1(5)); // => 12

// good
const pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val);
const addThenMult = pipeline(plus1, mult2);
addThenMult(5); // => 12
```

### Caching

캐시 기능 테스트, 대규모 데이터 구조 및 값비싼 작업

```javascript
// bad
const contains = (arr, value) =>
  Array.prototype.includes ? arr.includes(value) : arr.some(el => el === value);
contains(["foo", "bar"], "baz"); // => false

// good
const contains = (() =>
  Array.prototype.includes
    ? (arr, value) => arr.includes(value)
    : (arr, value) => arr.some(el => el === value))();
contains(["foo", "bar"], "baz"); // => false
```

### Variables

Favor const over let and let over var.

```javascript
// bad
var me = new Map();
me.set("name", "Ben").set("country", "Belgium");

// good
const me = new Map();
me.set("name", "Ben").set("country", "Belgium");
```

### Conditions

즐겨찾기 IIFE 및 반환문(있는 경우), 다른 경우, 변경문(switch statement)을 참조하십시오.

```javascript
// bad
var grade;
if (result < 50) grade = "bad";
else if (result < 90) grade = "good";
else grade = "excellent";

// good
const grade = (() => {
  if (result < 50) return "bad";
  if (result < 90) return "good";
  return "excellent";
})();
```

### Object iteration

Avoid for...in when you can.

```javascript
const shared = { foo: "foo" };
const obj = Object.create(shared, {
  bar: {
    value: "bar",
    enumerable: true
  }
});

// bad
for (var prop in obj) {
  if (obj.hasOwnProperty(prop)) console.log(prop);
}

// good
Object.keys(obj).forEach(prop => console.log(prop));
```

### Objects as Maps

개체가 합법적인 사용 사례가 있는 반면, 지도는 대개 더 좋고 더 강력한 선택이다. 의심이 들 때는 Map을 사용해라.

```javascript
// bad
const me = {
  name: "Ben",
  age: 30
};
var meSize = Object.keys(me).length;
meSize; // => 2
me.country = "Belgium";
meSize++;
meSize; // => 3

// good
const me = new Map();
me.set("name", "Ben");
me.set("age", 30);
me.size; // => 2
me.set("country", "Belgium");
me.size; // => 3
```

### Curry

캐묻는 것은 많은 개발자들에게는 강력하지만 외국의 패러다임이다. 적절한 사용 사례가 상당히 이례적이므로 남용하지 마십시오.

```javascript
// bad
const sum = a => b => a + b;
sum(5)(3); // => 8

// good
const sum = (a, b) => a + b;
sum(5, 3); // => 8
```

### Readability

겉보기에는 영리한 속임수를 써서 코드의 의도를 흐리게 하지 마라.

```javascript
// bad
foo || doSomething();

// good
if (!foo) doSomething();
```

```javascript
// bad
void (function() {
  /* IIFE */
})();

// good
(function() {
  /* IIFE */
})();
```

```javascript
// bad
const n = ~~3.14;

// good
const n = Math.floor(3.14);
```

### Code reuse

작고, 매우 복잡하며, 재사용 가능한 많은 기능을 만드는 것을 두려워하지 말아라.

```javascript
// bad
arr[arr.length - 1];

// good
const first = arr => arr[0];
const last = arr => first(arr.slice(-1));
last(arr);
```

```javascript
// bad
const product = (a, b) => a * b;
const triple = n => n * 3;

// good
const product = (a, b) => a * b;
const triple = product.bind(null, 3);
```

### Dependencies

종속성 최소화. Third-party is code는 당신이 모르는 코드다. 쉽게 복제할 수 있는 몇 가지 방법에만 전체 라이브러리를 로드하지 마십시오.

```javascript
// bad
var _ = require("underscore");
_.compact(["foo", 0]));
_.unique(["foo", "foo"]);
_.union(["foo"], ["bar"], ["foo"]);

// good
const compact = arr => arr.filter(el => el);
const unique = arr => [...new Set(arr)];
const union = (...arr) => unique([].concat(...arr));

compact(["foo", 0]);
unique(["foo", "foo"]);
union(["foo"], ["bar"], ["foo"]);
```

출처: [Frontend Guidelines](com/bendc/frontend-guidelines#semantics);
