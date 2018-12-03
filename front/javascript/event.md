
# Event

## 1. Introduction
이벤트(event)는 어떤 사건을 의미합니다.  
이벤트가 발생하면 그에 맞는 반응을 하여야 합니다.  
이를 위해 이벤트는 일반적으로 함수에 연결되며 그 함수는 이벤트가 발생하기 전에는 실행되지 않다가 이벤트가 발생되면 실행됩니다.  
이 함수를 이벤트 핸들러라 하며 이벤트에 대응하는 처리를 기술합니다.  

## 2. 이벤트 루프(Event Loop)와 동시성(Concurrency)
브라우저는 단일 쓰레드(single-thread)에서 이벤트 드리븐(event-driven) 방식으로 동작합니다.  
단일 쓰레드는 쓰레드가 하나뿐이라는 의미이며 이말은 곧 하나의 작업(task)만을 처리할 수 있다는 것을 의미합니다.  
하지만 실제로 동작하는 웹 애플리케이션은 많은 task가 동시에 처리되는 것처럼 느껴집니다.  
이처럼 자바스크립트의 동시성(Concurrency)을 지원하는 것이 바로 이벤트 루프(Event Loop)입니다.  

### 구글의 V8을 비롯한 대부분의 자바스크립트 엔진은 크게 2개의 영역으로 나뉩니다.
- Call Stack(호출 스택)
작업이 요청되면(함수가 호출되면) 요청된 작업은 순차적으로 Call Stack에 쌓이게 되고 순차적으로 실행됩니다.  
자바스크립트는 단 하나의 Call Stack을 사용하기 때문에 해당 task가 종료하기 전까지는 다른 어떤 task도 수행될 수 없습니다.  

- Heap
동적으로 생성된 객체 인스턴스가 할당되는 영역입니다.  

이와 같이 자바스크립트 엔진은 단순히 작업이 요청되면 Call Stack을 사용하여 요청된 작업을 순차적으로 실행할 뿐입니다.  
앞에서 언급한 동시성(Concurrency)을 지원하기 위해 필요한 비동기 요청(이벤트를 포함) 처리는 자바스크립트 엔진을 구동하는 환경 즉 브라우저(또는 Node.js)가 담당합니다.  
- Event Queue(Task Queue)
비동기 처리 함수의 콜백 함수, 비동기식 이벤트 핸들러, Timer 함수(setTimeout(), setInterval())의 콜백 함수가 보관되는 영역으로 이벤트 루프(Event Loop)에 의해 특정 시점(Call Stack이 비어졌을 때)에 순차적으로 Call Stack으로 이동되어 실행됩니다.

- Event Loop(이벤트 루프)
Call Stack 내에서 현재 실행중인 task가 있는지 그리고 Event Queue에 task가 있는지 반복하여 확인합니다.  
만약 Call Stack이 비어있다면 Event Queue 내의 task가 Call Stack으로 이동하고 실행됩니다.  

## 3. 이벤트의 종류

### 3.1 UI Event
|Event|Description|
|-----|------------|
|load|웹페이지의 로드가 완료되었을 때|
|unload|웹페이지가 언로드될 때(주로 새로운 페이지를 요청한 경우)|
|error|브라우저가 자바스크립트 오류를 만났거나 요청한 자원이 존재하지 않는 경우|
|resize|브라우저 창의 크기를 조절했을 때|
|scroll|사용자가 페이지를 위아래로 스크롤할 때|
|select|텍스트를 선택했을 때|

### 3.2 Keyboard Event
|Event|Description|
|-----|------------|
|keydown|키를 누르고 있을 때|
|keyup|누르고 있던 키를 뗄 때|
|keypress|키를 누르고 뗏을 때|

### 3.3 Mouse Event
|Event|Description|
|-----|------------|
|click|마우스 버튼을 클릭했을 때|
|dbclick|마우스 버튼을 더블 클릭했을 때|
|mousedown|마우스 버튼을 누르고 있을 때|
|mouseup|누르고 있던 마우스 버튼을 뗄 때|
|mousemove|마우스를 움직일 때 (터치스크린에서 동작하지 않는다)|
|mouseover|마우스를 요소 위로 움직였을 때 (터치스크린에서 동작하지 않는다)|
|mouseout|마우스를 요소 밖으로 움직였을 때 (터치스크린에서 동작하지 않는다)|

### 3.4 Focus Event
|Event|Description|
|-----|------------|
|focus/focusin|요소가 포커스를 얻었을 때|
|blur/foucusout|요소가 포커스를 잃었을 때|

### 3.5 Form Event
|Event|Description|
|-----|------------|
|input|input 또는 textarea 요소의 값이 변경되었을 때|
| |contenteditable 어트리뷰트를 가진 요소의 값이 변경되었을 때|
|change|select box, checkbox, radio button의 상태가 변경되었을 때|
|submit|form을 submit할 때 (버튼 또는 키)|
|reset|reset 버튼을 클릭할 때 (최근에는 사용 안함)|

### 3.6 Clipboard Event
|Event|Description|
|-----|------------|
|cut|콘텐츠를 잘라내기할 때|
|copy|콘텐츠를 복사할 때|
|paste|콘텐츠를 붙여넣기할 때|

## 4. 이벤트 핸들러 등록
### 4.1 인라인 이벤트 핸들러 방식
HTML과 Javascript는 관심사가 다르므로 분리하는 것이 좋습니다. (비선호)  

### 4.2 이벤트 핸들러 프로퍼티 방식
하나의 이벤트 핸들러만을 바인딩할 수 있으며 이벤트 핸들러에 인수를 전달할 수 없는 단점이 있습니다.  

### 4.3 addEventListener 메소드 방식
addEventListener 메소드를 이용하여 대상 DOM 요소에 이벤트를 바인딩하고 해당 이벤트가 발생했을 때 실행될 콜백 함수(이벤트 핸들러)를 지정합니다.  

장점
- 하나의 이벤트에 대해 하나 이상의 이벤트 핸들러를 추가할 수 있습니다.
- 캡처링과 버블링을 지원합니다.
- HTML 요소뿐만아니라 모든 DOM 요소에 대해 동작합니다.

## 5. 이벤트 핸들러 함수 내부의 this

### 5.1 인라인 이벤트 핸들러 방식
인라인 이벤트 핸들러 방식의 경우, 이벤트 핸들러는 함수로 호출되므로 이벤트 핸들러 내부의 this는 window를 가리킵니다.  

### 5.2 이벤트 핸들러 프로퍼티 방식
이벤트 핸들러 프로퍼티 방식에서 이벤트 핸들러는 메소드이므로 이벤트 핸들러 내부의 this는 이벤트에 바인딩된 요소를 가리킵니다.  
이것은 이벤트 객체의 currentTarget 프로퍼티와 같습니다.  

### 5.3 addEventListener 메소드 방식
addEventListener 메소드에서 지정한 이벤트 핸들러는 콜백 함수이지만 이벤트 핸들러 내부의 this는 이벤트 리스너에 바인딩된 요소(currentTarget)를 가리킵니다.  
이것은 이벤트 객체의 currentTarget 프로퍼티와 같습니다.

## 6. 이벤트의 흐름
계층적 구조에 포함되어 있는 HTML 요소에 이벤트가 발생할 경우 연쇄적 반응이 일어납니다.  
즉, 이벤트가 전파(Event Propagation)되는데 전파 방향에 따라 버블링(Event Bubbling)과 캡처링(Event Capturing)으로 구분할 수 있습니다.

자식 요소에서 발생한 이벤트가 부모 요소로 전파되는 것을 버블링이라 하고, 자식 요소에서 발생한 이벤트가 부모 요소부터 시작하여 이벤트를 발생시킨 자식 요소까지 도달하는 것을 캡처링이라 합니다.  
주의할 것은 버블링과 캡처링은 둘 중에 하나만 발생하는 것이 아니라 캡처링부터 시작하여 버블링으로 종료한다는 것입니다.  
즉, 이벤트가 발생했을 때 캡처링과 버블링은 순차적으로 발생합니다.  

## 7. Event 객체
event 객체는 이벤트를 발생시킨 요소와 발생한 이벤트에 대한 유용한 정보를 제공합니다.  
이벤트가 발생하면 event 객체는 동적으로 생성되며 이벤트를 처리할 수 있는 이벤트 핸들러에 인자로 전달됩니다.  

### 7.1 Event Property

#### 7.1.1 Event.target
실제로 이벤트를 발생시킨 요소를 가리킵니다.  

#### 7.1.2 Event.currentTarget
이벤트에 바인딩된 DOM 요소를 가리킵니다.  
즉, addEventListener 앞에 기술된 객체를 가리킵니다.  

#### 7.1.3 Event.type
발생한 이벤트의 종류를 나타내는 문자열을 반환합니다.  

#### 7.1.4 Event.cancelable
요소의 기본 동작을 취소시킬 수 있는지 여부(true/false)를 나타냅니다.  

#### 7.1.5 Event.eventPhase
이벤트 흐름(event flow) 상에서 어느 단계(event phase)에 있는지를 반환합니다.  
0 : 이벤트 없음  
1 : 캡처링 단계  
2 : 타킷  
3: 버블링 단계  

### 7.2 Event Method

#### 7.2.1 Event.preventDefault()
이벤트의 기본 동작을 취소합니다.  
단 Event.cancelable가 true일 경우에 한 합니다.  

#### 7.2.2 Event.stopPropagation()
이벤트의 전파(propagation: 버블링, 캡처링)를 중단 합니다.  

## 8. Event Delegation (이벤트 위임)
이벤트 위임(Event Delegation)은 다수의 자식 요소에 각각 이벤트 핸들러를 바인딩하는 대신 하나의 부모 요소에 이벤트 핸들러를 바인딩하는 방법입니다.  

## 9. 기본 동작의 변경

### 9.1 Event.preventDefault()
폼을 submit하거나 링크를 클릭하면 다른 페이지로 이동하게 된다. 이와 같이 요소가 가지고 있는 기본 동작을 중단시키기 위한 메소드가 preventDefault() 입니다.  

### 9.2 Event.stopPropagation()
어느 한 요소를 이용하여 이벤트를 처리한 후 이벤트가 부모 요소로 이벤트가 전파되는 것을 중단시키기 위한 메소드입니다.  
부모 요소에 동일한 이벤트에 대한 다른 핸들러가 지정되어 있을 경우 사용됩니다.  

### 9.3 preventDefault & stopPropagation
기본 동작의 중단과 버블링 또는 캡처링의 중단을 동시에 실시하는 방법은 아래와 같습니다.  
```javascript
return false;
```








#
















---
참조 : [이벤트](https://poiemaweb.com/js-event)



