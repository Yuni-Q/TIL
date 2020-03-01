# ES6+ 디자인패턴과 뷰패턴

## GOF의 디자인패턴 분류

- 생성패턴
- 구조패턴
- 행동패턴

## 객체지향설계를 학습할 수 있는 분류

- 다향성
- 캡슐화
- 객체 관계
- 변화율
- 역할모델

## 알고리즘 분화 시 객체지향에서 선택할 수 있는 두 가지 방법

### 상속 위임

- 내부계약관계로 추상층에서 공통 요소를 해결하고 상태를 공유할 수 있음
- TEMPLATE METHOD PATTERN

```javascript
// 정의시점 - 변하지 않는 부분
const Github = class {
  constructor(id, repo) {
    this._base = `https://api.github.com/repos${id}/${repo}/contents/`;
  }
  load(path) {
    // 공통 부분
    const id = "callback" + Github._id++;
    const f = (Github[id] = ({ data: { content } }) => {
      delete Github[id];
      document.head.removeChild(s);
      // 위임부분
      this._loaded(content);
    });
    const s = document.createElement("script");
    s.src = `${this._base + path}?callback=Guthub._${id}`;
    document.head.appendChild(s);
  }
  _loaded(v) {
    // HOOK
    throw "override!";
  }
};
Github._id = 0;
// 실행 시점 - 변하는 부분
const ImageLoader = class extends Github {
  // 위임구현
  _loaded(v){...}
};
```

```html
<script src="Github.js"></script>
<script src="ImageLoader.js"></script>
<script src="MdLoader.js"></script>

<script>
  const img = new ImageLoader(...)
  img.load(...)

  const md = new MdLoader(...);
  md.load(...)
</script>
```

### 소유 위임

- 와부계약관계로 각각이 독립적인 문제를 해결하며 메시지를 주고 받는 것으로 문제를 해결함
- GoF DP 방향성
- 부가적인 형이 많이 생김
- STRATEGY PATTERN

```javascript
// 정의시점 - 변하지 않는 부분
const Github = class {
  constructor(id, repo) {
    this._base = `https://api.github.com/repos${id}/${repo}/contents/`;
  }
  load(path) {
    const id = "callback" + Github._id++;
    const f = (Github[id] = ({ data: { content } }) => {
      delete Github[id];
      document.head.removeChild(s);
      // 위임부분
      this._parser(content);
    });
    const s = document.createElement("script");
    s.src = `${this._base + path}?callback=Guthub._${id}`;
    document.head.appendChild(s);
  }
  // 위임객체(STARATEGY OBJECT)
  // 실행하는 시점 - 변하는 부분
  set parser(v) {
    this._parser = v;
  }
};
Github._id = 0;
```

- 커맨드 패턴을 응용

```javascript
const Github = class {
  constructor(id, repo) {
    this._base = `https://api.github.com/repos${id}/${repo}/contents/`;
  }
  load(path) {
    const id = "callback" + Github._id++;
    const f = (Github[id] = ({ data: { content } }) => {
      delete Github[id];
      document.head.removeChild(s);
      // 커맨드 인보커
      this._parser[0](content, ...this._parser[1]);
    });
    const s = document.createElement("script");
    s.src = `${this._base + path}?callback=Guthub._${id}`;
    document.head.appendChild(s);
  }
  set parser(f, ...arg) {
    // 커맨드 객체화
    this._parser = [f, arg];
  }
};
Github._id = 0;
```

- 실행시점 선택 위임

```javascript
const Loader = class {
  constructor(id, repo) {
    this._git = new Github(id, repo);
    // 라우팅테이블
    this._router = new Map();
  }
  add(ext, f, ...arg) {
    ext.split(",").forEach(v => this._router.set(v, [f, ...arg]));
  }
  load(v) {
    const ext = this._v.split(".").pop();
    if (!this._router.has(ext)) return;
    // 확장자 경우에 따라 자동분기
    this._git.setParser(...this._router.get(ext));
    this._git.load(v);
  }
};

const loader = new Loader("hikaMaeng", "codespitz79");
loader.add("jpg,png,gif", img, el("#a"));
loader.add("md", md, el("#b"));

loader.load("xx.jpg");
loader.load("xx.md");
```

## 상태에 대한 분기는 사라지지 않는다.

- 그 분기가 필요해서 태어났기 때문
- 정의 시점에 제거하는 방법은 ?
  - 1. 분기 수 만큼 객체를 만들고
  - 2. 실행시점의 경우의 수를 공급

### 실행시점으로 분기를 옮길 때의 장단점

#### 장점

1. 정의 시점에 모든 경우를 몰라도 됨
2. 정의 시점에 그 경우를 처리하는 방법도 몰라도 됨

- 일정한 통제 범위 내에서 확장 가능한 알고리즘설계 가능

#### 단점

1. 실행 시점에 모든 경우를 반드시 기술해야 함
2. 실행 시점마다 알고리즘의 안정성을 담보해야 함

- 매 호스트코드마다 안정성을 따로 담보해야 함

### FACTORY, BUILERT PATTERN

## 동일한 구조의 반복(Iteration)

- ITERATOR PATTERN

## 알고리즘 전개에 따른 반복(Recursion)

- COMPOSITE, VISITOR PATTERN
 