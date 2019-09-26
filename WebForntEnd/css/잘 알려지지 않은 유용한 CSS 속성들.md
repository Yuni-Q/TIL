# 잘 알려지지 않은 유용한 CSS 속성들

## pointer-events: 클릭 이벤트 허용 여부

- pointer-event 속성을 통해 엘리먼트가 마우스 이벤트(호버, 클릭, 드래그 등)에 어떻게 반응할지를 지정할 수 있다. 대부분의 속성 값은 SVG 전용이므로, pointer-events: none을 설정하여 마우스 이벤트의 타겟이 될 수 없도록 할 수 있다는 점만 기억하자.
- 해당 속성이 지정되었더라도 반드시 마우스 이벤트의 이벤트 리스너가 호출되지 않을 거라 보장되지 않는다는 점은 주의해야 한다. 

## touch-action: 브라우저에게 맡길 터치 액션 지정

- touch-action: auto; /* 기본 값 */
- touch-action: none; /* 브라우저가 모든 터치 이벤트를 무시하도록 설정 */

- touch-action: pan-x; /* 특정 축으로의 터치를 사용한 스크롤 허용 */
- touch-action: pan-y;

- touch-action: pan-left; /* 특정 방향으로의 터치를 사용한 스크롤 허용 */
- touch-action: pan-right;
- touch-action: pan-up;
- touch-action: pan-down;

- touch-action: pinch-zoom; /* 핀치 줌(여러 손가락을 사용한 확대/축소) 허용 */

- touch-action: manipulation; /* 터치를 사용한 스크롤, 핀치 줌만 허용하고 그 외 비표준 동작 (더블 탭으로 확대 등) 불허용 */

- touch-action: pan-y pinch-zoom; /* 동시에 여러 값 지정 가능 */

## user-select: 선택 상호작용

- user-select 속성을 사용해 엘리먼트 내부에서 텍스트 선택이 일어났을 때의 동작을 설정할 수 있다. 기본 동작 이외에 선택이 불가능하게 지정할 수도 있고, 엘리먼트 내에서 선택이 일어나면 무조건 엘리먼트 전체가 선택되는 식의 동작도 설정 가능하다.
- user-select: auto; /* 기본값 (::after, ::before 는 선택되지 않고, 부모의 속성을 따름) */
- user-select: text; /* 선택 가능 */
- user-select: none; /* 선택 불가능 */
- user-select: all; /* 엘리먼트 내에서 선택이 일어나면 해당 엘리먼트 전체가 선택된다 */

## object-fit: 대체되는 엘리먼트의 내용물과 컨테이너 사이 관계 지정

- img, video 등과 같이, 내용물이 HTML 문서의 바깥에 존재하는 엘리먼트를 대체되는 엘리먼트라 부른다. 이 때, 외부에 존재하는 내용물의 크기가 컨테이너의 그것과 차이날 때, 화면에는 어떻게 나타나야 할지 지정할 필요가 생긴다.
- fill : 내용물의 가로세로비를 무시하고 컨테이너의 크기에 맞추어 늘리거나 줄인다. 원래 비율이 유지되지 않으므로, 컨테이너의 크기에 따라 내용물이 가로 혹은 세로로 늘어날 수 있다.
- contain : 내용물의 가로세로비를 유지하는 채로, 내용물이 컨테이너에 포함되는 최대 크기가 되도록 늘리거나 줄인다.
- cover : 내용물의 가로세로비를 유지하는 채로, 내용물이 컨테이너 전체를 덮는 최소 크기가 되도록 늘리거나 줄인다.
- none : 내용물이 전혀 리사이징 되지 않는다.
- scale-down : none 과 contain 중 내용물의 크기가 더 적은 쪽과 동일하게 동작한다.

## overflow-wrap: 오버플로우가 일어날 때 단어 내 줄바꿈 처리

- CJK 언어로 된 사이트를 자주 만드는 개발자라면 word-break: keep-all; 속성을 아주 유용하게 사용하고 있을 것이다. keep-all 속성값을 사용하면 CJK 에서도 단어 단위로 줄바꿈을 끊어줄 수 있다. 그런데 만약 한 단어의 길이가 컨테이너의 너비보다 더 긴 경우에는 어떤 일이 생길까?
- 위에서 보이듯, 단어 단위로 끊기로 설정할 경우 단어의 길이에 따라 오버플로우가 컨테이너를 넘쳐버릴 수 있다. 이런 경우 overflow-wrap 속성에 break-word 값을 주어서 오버플로우가 일어나는 경우 적절하게 단어 사이에서 줄바꿈이 일어나도록 설정할 수 있다.
- overflow-wrap: normal; /* 기본 */
- overflow-wrap: break-word; /* 오버플로우가 일어나면 단어를 쪼개서 줄바꿈 */

## list-style-position: 리스트 마커 위치 지정

- list-style-position 속성의 값으로 inside를 줘서 마커가 li 태그 안로 들어오도록 설정할 수 있다.
- list-style-position: inside; /* 마커가 `li` 태그 안에 위치 */
- list-style-position: outside; /* 마커가 `li` 태그 바깥에 위치 */

## will-change: 값이 변경될 속성에 대한 힌트

- will-change 속성을 사용해 브라우저에게 엘리먼트의 어떤 속성이 높은 확률로 변할 것인지 힌트를 줄 수 있다.
- will-change: auto; /* 기본값 */
- will-change: scroll-position; /* 엘리먼트의 스크롤 위치가 바뀔 것 */
- will-change: contents; /* 엘리먼트의 컨텐츠 중 일부가 바뀔 것 */
- 
/* 혹은 특정 CSS 속성을 명시할 수 있다. */
/* transform, opacity, top, left, right, bottom 정도가 자주 사용된다. */
- will-change: transform;
- will-change: left, top; /* 여러 속성을 동시에 명시할 수도 있다. */
