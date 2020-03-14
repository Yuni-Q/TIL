# JS: The Observers

## 옵저버 패턴이란?

- 옵저버 패턴은 데이터 종속적인 인터페이스가 데이터의 변화를 감시하는 구조를 말합니다.

## JS Observers

- IntersectionObserver: 루트 영역(뷰포트)와 대상 객체의 겹침을 감시
- MutationObserver: 객체의 속성 변경을 감시
- PerformanceObserver: 프로세스 성능 모니터링
- ReportingObserver: 웹 사이트의 표준 및 정책 준수 현황을 감시
- ResizeObserver: 객체의 너비, 높이의 변화를 감시

### IntersectionObserver

- intersection이라는 단어를 직역하면 ‘교차, 교차점’이란 뜻이 나오는데요. IntersectionObserver는 말 그대로 특정 DOM 객체가 우리가 보는 화면 영역(viewport)과 겹치는 교차 이벤트를 감시합니다. 사이트 하단에 있는 이미지를 로딩한다고 칩시다. 이때 이미지를 처음부터 불러오는 게 아니라 사용자가 스크롤을 해서 이미지 엘리먼트가 화면에 등장하는 순간 로딩을 시작한다면 어떨까요? 사이트 초기화 당시에 모든 이미지를 전부 불러올 필요가 없으니 성능을 개선하기에 매우 유용합니다.
- IntersectionObserver 기능을 이용하면 무한 스크롤 역시 쉽게 구현할 수 있습니다. 아래 예제에서는 스크롤의 끝부분에 감시를 할 엘리먼트를 두고 그 엘리먼트가 노출이 될 때마다 콘텐츠를 추가로 불러오도록 합니다

## ResizeObserver

- ResizeObserver는 말 그대로 DOM 객체의 크기 변화를 감시하는 옵저버입니다.
- 기기 너비가 일정 픽셀 이하로 줄어들었을 때 콜백 함수를 활용하거나 섬세한 애니메이션을 필요로 할 때 유용하게 쓸 수 있습니다.
- 문제는, 아직 ResizeObserver가 최신 크롬 환경에서만 작동한다는 겁니다. 그래서 [폴리필](https://github.com/que-etc/resize-observer-polyfill)을 다운받아 사용하시는 걸 추천드립니다.

## MutationObserver

- 아마 나머지 모든 옵저버 가운데 가장 활용도가 높은 녀석이 아닐까 싶습니다. 이 옵저버는 IE11까지도 지원하는 뛰어난 호환성을 자랑하기도 하고, DOM 객체의 ‘속성’이라는 꽤나 범용적인 영역을 감시해줍니다.

## PerformanceObserver

- 퍼포먼스 옵저버는 FCP(First Contentful Paint), FMP(First Meaningful Paint) 등을 측정할 수 있게 도와주는 옵저버입니다. 하지만 워낙 최신 기능이고 폴리필도 완벽하게 마련되어 있지 않습니다. 예제 코드는 MDN 공식 사이트나 이 블로그를 보시면 좋겠네요.
- 다른 퍼포먼스 측정 툴을 추천하자면 Perfume.js 가 있습니다.

## ReportingObserver

- 리포팅 옵저버는 매우 실험적인 기능이라 지원하는 브라우저가 아직 거의 없다고 볼 수 있는데요. MDN 페이지를 보시면 이 옵저버가 사용자의 window 객체를 조회해서 정책적으로 너무 오래된 메서드가 쓰인다거나 하면 경고를 주는 기능을 하는 것 같습니다.

## 참조

- [JS: The Observers](https://www.huskyhoochu.com/js-observers/)
