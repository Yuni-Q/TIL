# height

## screen.height
- 화면의 세로 크기를 가져옵니다.
## screen.availHeight
- 브라우저의 막대를 포함하여 최대화 된 경우 브라우저의 윈도우가 가질 수있는 높이입니다. 
- 창이 최대화되면 screen.availHeight === window.outerHeight
- 작업 표시줄이 차지하는 부분을 제외한 세로 크기를 가져옵니다.
- 화면 아래의 작업 표시줄 높이가 30px이라면 screen.availHeight가 screen.height보다 30 작습니다.
- 현재 화면에서 실제로 사용가능한 최대치의 높이를 반환합니다.

## offsetHeight,
- 스크롤바가 나타나는 부분까지의 길이입니다.
- 가시적 인 콘텐츠 & amp; 보더 경계선 스크롤 바
- 문서에서 요소가 차지하는 높이.
- 정수로서, 수직 패딩 및 경계를 포함하는 요소의 높이를 반환한다.
- offsetHeight 속성은 여백이 아니라 패딩, 테두리 및 스크롤 막대를 포함하여 요소의 볼 수있는 높이를 픽셀 단위로 반환합니다.
- 일반적으로 엘리먼트의 전체 크기를 알고 싶다면, `offsetWidth`와 `offsetHeight` 속성을 가져오면 된다.
- 이 속성은 엘리먼트의 패딩과 보더, 스크롤바의 사이즈를 포함한 값을 리턴한다.

## scrollHeight 차이
- 스크롤이 안 보이는 영역까지의 길이입니다.
- 전체 내용 & amp; 패딩 (표시 여부)
- 엘리먼트의 높이에도 불구하고 모든 컨텐츠 패딩의 높이.

## document.documentElement vs document.body

### document.documentElement의 목적은 무엇입니까?

- document.documentElement : 문서의 documentElement를 Element 객체로 반환합니다. HTML 문서의 경우 반환 된 객체는 HTML 요소입니다. 문서의 루트 요소 인 요소 (예 : HTML 문서의 \<html> 요소)를 리턴합니다.
- Document.documentElement 는 읽기 전용 속성으로 document 의 루트 요소인 Element를 반환한다 (가령, HTML 문서의 \<html> 요소).



### document.body의 목적은 무엇입니까?

- document.body는 문서의 내용을 포함하는 요소입니다. \<body> 내용이있는 문서에서 \<body> 요소를 반환하고 프레임 세트 문서에서 가장 바깥 쪽 \<frameset> 요소를 반환합니다.
- Document.body 속성은 현재 문서의 \<body> 혹은 \<frameset> 노드를 나타냅니다. 일치하는 요소가 존재하지 않으면 null을 반환합니다.



### document.body 설정의 효과는 무엇입니까?

- 본문을 설정할 수 있지만 문서에 새 본문을 설정하면 기존 \<body> 요소의 모든 현재 자식이 효과적으로 제거됩니다.

### document.body가 null이거나 정의되지 않은 원인은 무엇입니까?

- document.body가 null이거나 정의되지 않은 문제가 발생하면 JavaScript 코드를 확인하여 DOM이 완전히로드 된 후에 만 ​​JavaScript 코드가 실행되는지 확인하십시오. JavaScript 코드가 페이지의 헤드 섹션에있는 경우 성능상의 이유로 권장되는대로 JavaScript 코드를 페이지의 본문 섹션으로 이동하십시오. 문제가 해결되면 DOM이 완전히로드되기 전에 JavaScript 코드 (헤드 섹션에있을 때)가 실행 된 것입니다. 브라우저는 html을 위에서 아래로 구문 분석하고 본문이로드되기 전에 스크립트가 실행됩니다. 닫기 본문 태그 바로 앞에 put 스크립트를 수정합니다.


###

document.documentElement속성은 html요소를 제공 하지만 속성은 요소를 document.body제공합니다 body.

이 window.innerHeight속성은 내용의 높이가 아닌 창의 높이를 반환합니다.

브라우저마다 요소의 크기가 다른 값을 제공하며 페이지가 Quirks 모드에서 렌더링되는지 표준 준수 모드에서 렌더링되는지, HTML 또는 XHTML을 사용하는지에 따라 동일한 브라우저에서 다른 값을 제공 할 수 있습니다. html요소 중 하나를 창, 또는 전체 페이지를 나타낼 수 있습니다. body요소 중 하나와 동일한 크기 일 수있는 html소자 또는 페이지 콘텐츠의 크기.

html및 body요소는 다른 요소와 같은 방식으로 존재하지 않는 "마법"요소입니다. XHTML에서는 실제 요소처럼 작동하도록 변경되었지만 여전히 "매직"인 것들이 있습니다. 예를 들어, body요소는 대신, 자신의 배경이없는 html과 body같은 배경을 공유하고, 항상 경우에도 전체 창 커버 body요소는하지 않습니다.

### 
명을 단순화하기 위해 엄격 모드 는 표준 모드 와 동일 하며 Doctype이있는 문서를 의미 한다고 말했습니다 . 반은 사실입니다. 엄밀히 말하면 문서는 엄격한 독 타입을 가져야합니다 . 그럼에도 불구하고 브라우저 (Moz 및 Opera와 같은 완전 DOM 호환이라고 주장하는 브라우저조차도)는 거의 표준 모드에 있습니다 ... 🙂그러나 이것은 또 다른 주제입니다 ...