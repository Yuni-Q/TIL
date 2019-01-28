
# class field

## Custom elements with classes
```javascript
class Counter extends HTMLElement {
  clicked() {
    this.x++;
    window.requestAnimationFrame(this.render.bind(this));
  }

  constructor() {
    super();
    this.onclick = this.clicked.bind(this);
    this.x = 0;
  }

  connectedCallback() { this.render(); }

  render() {
    this.textContent = this.x.toString();
  }
}
window.customElements.define('num-counter', Counter);
```

## Field declarations
```javascript
class Counter extends HTMLElement {
  x = 0;

  clicked() {
    this.x++;
    window.requestAnimationFrame(this.render.bind(this));
  }

  constructor() {
    super();
    this.onclick = this.clicked.bind(this);
  }

  connectedCallback() { this.render(); }

  render() {
    this.textContent = this.x.toString();
  }
}
window.customElements.define('num-counter', Counter);
```
- 위의 예에서 구문으로 선언 된 필드를 볼 수 있습니다.
- x = 0. 또한 이니셜 라이저없이 필드를 선언 할 수도 있습니다.
- 필드를 선행으로 선언함으로써, 클래스 정의가 더욱 문서화됩니다. 선언 된 필드가 항상 존재하기 때문에 인스턴스는 더 적은 수의 상태 변경을 통과합니다.

## Private fields
```javascript
class Counter extends HTMLElement {
  #x = 0;

  clicked() {
    this.#x++;
    window.requestAnimationFrame(this.render.bind(this));
  }

  constructor() {
    super();
    this.onclick = this.clicked.bind(this);
  }

  connectedCallback() { this.render(); }

  render() {
    this.textContent = this.#x.toString();
  }
}
window.customElements.define('num-counter', Counter);
```
- 필드를 비공개로 설정하려면 먼저 필드 이름을 #로 지정하십시오.
- 클래스 외부에서 볼 수 없는 것을 정의함으로써, ESnext는 캡슐화 기능을 강화하여 내부 사용자에 따라 클래스 사용자가 실수로 스스로 이동하지 않도록하며 버전에 따라 버전이 변경 될 수 있습니다.
- ESnext는 필드 선언에서 미리 선언 된 대로만 비공개 필드를 제공합니다. 비공개 필드는 나중에 임시 속성 (ad-hoc)에 할당 할 수 없습니다. 이 속성은 일반 속성의 방식을 나타냅니다.

## Major design points

### Object.defineProperty로 작성된 public 필드
