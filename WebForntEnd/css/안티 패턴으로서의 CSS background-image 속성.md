# 안티 패턴으로서의 CSS background-image 속성

- 웹페이지에 이미지를 삽입하는 방법은 \<img> 태그를 사용하거나, CSS background-image 속성을 사용하거나 크게 두 가지가 있습니다.

## 안티 패턴으로서의 CSS background-image 속성

- CSS background-image 속성은 여러가지 놀라운 일들을 할 수 있었지만, 대부분의 경우에는 더 이상 사용하지 않는 것이 좋습니다.
- 진짜 문제는 CSS background-image 속성 자체가 아니라, 메인 이미지나 UI 이미지와 같은, 실제로 사용해서는 안되는 곳에서 사용된다는 것입니다.
- 부적절하게 사용된 background-image는 안티 패턴입니다. background-image의 좋은 사용 사례도 있을까요? 당연히 있습니다.

## 1. SEO에 좋지 않다

- CSS background-image 속성에 있는 이미지는 Google 봇이 크롤링하거나 색인하지 않습니다.
- background-image를 사용하는 경우, 이미지의 alt=""으로 이미지에 대한 설명과 컨텍스트를 Google에 제공할 수 조차 없습니다.

## 2. 접근성에 좋지 않다

- CSS background-image 속성은 접근성에 적합하지 않습니다. Screen readers는 background-image를 완전히 무시합니다.
- 스크린 리더가 이미지를 완전히 무시하지 않았더라도, 이미지에 대한 설명이나 컨텍스트를 설명할 수 있는 alt="" 텍스트조차 없습니다.
- 실제로 스크린 리더가 이미지를 무시하도록 하려면(디자인적 요소일 때), 빈 alt 태그를 사용하세요. 예: alt="" (role="presentation" 속성은 ARIA의 첫 번째 규칙을 위반하므로, 최선이 아닙니다.)

## 3. 성능에 좋지 않다

- 어떻게 background-image 속성이 성능에 나쁜 영향을 미칠 수 있을까요? 일반적으로 디바이스 화면 너비나 해상도에 관계없이 background-image 속성에 하나의 이미지만 사용되기 때문입니다. 이상적으로 우리가 원하는 것은 반응형 이미지를 사용하여 브라우저가 디바이스의 화면 너비나 해상도에 따라 다른 크기의 이미지를 로드하도록 하는 것입니다.
  - 일반적인 사이트에서 이미지는 전송되는 데이터 중에서 가장 큰 청크입니다. 우리는 이 이미지들을 최적화해야합니다.
  - @media 쿼리와 CSS background-image를 사용할 수도 있지만, 이미지를 변경하거나 이름을 바꿔야하는 경우 굉장히 번거로워집니다.
- 이것이 번거로운 이유는 이미지가 CSS에 포함되어있기 때문입니다. 일반적으로 CSS는 클라이언트가 제어하지 않는 빌드 프로세스에 의해 빌드됩니다. 그래서 이것이 어렵기 때문에 많은 사람들은 보통 포기하고 모든 디바이스 화면 크기와 해상도에 대해 하나의 이미지만 사용합니다.
  - 이를 도와주는 bgset과 같은 JavaScript 라이브러리가 있지만, 왜 다른 단점이 많은 문제를 해결하기 위해 JavaScript를 더 추가해야하나요?
  - 게다가 webp와 같은 next-generation 포맷의 프로그레시브 이미지를 사용하려고 해도, background-image로 인해 더 번거로워집니다. 브라우저가 CSS를 다운로드하고 파싱하기 전까지 이미지 다운로드를 시작할 수 없습니다
- 또 다른 성능 단점은, 이미지가 background-image로 CSS에 포함된 경우, 이미지를 요청하기 전에 브라우저가 CSS를 먼저 다운로드하고 파싱해야 한다는 것입니다.
- 즉, 메인 hero 이미지가 다운로드 대기열 우선순위가 낮아지고, 로드가 느려질 수 있습니다. 대신 HTML 요소를 통해 이미지를 사용하는 경우, CSS가 다운로드되기 전에 브라우저가 훨씬 더 빠르게 이미지를 요청할 수 있습니다.

## 4. CMS와 CDN에 좋지 않다.

- CSS background-image 속성은 Content Management Systems과 Content Distribution Networks (CDNs)와 함께 사용할 때에도 좋지 않습니다.
  - CSS에 이미지 URL이 포함되어 있다면, 저는 프로젝트 전체의 이미지들을 검색하여 모든 이미지를 local URL에서 CDN URL로 교체해야합니다.
  - CSS 변수를 사용하여 미리 모든 이미지의 URL을 준비한 경우엔 괜찮을 수 있습니다. 하지만, 대부분은 이미지를 변경할 때마다 새로운 CSS 에셋 번들을 만들고 배포하지 않습니다. 아니면 이를 위해 동적으로 inline CSS를 생성할수도 있지만... 그렇게까지 하진 맙시다.
  - CMS가 URL prefix를 처리하게하는 것이 훨씬 쉬울 수 있지만, CSS background-image를 사용하면 인라인 스타일을 생성하거나 다른 트릭이 필요해서 더 귀찮아 질 수 있습니다.
  - CSS에 이미지 URL을 넣는 것은 항상 "하드 코딩"하는 느낌이 듭니다.

## 전혀 불필요해 보일 수도 있지만, 실제로 이미지를 순수 장식 이미지 배경으로 사용하는 경우… background-image를 사용하세요!

- 실제로 배경 이미지를 사용해야할 경우 background-image를 사용하는 것이 좋습니다
- 그렇게한다면, image-set()을 background-image와 함께 사용하여 위에서 언급한 성능 문제를 해결할 수 있습니다.
- 이 속성이 본질적으로 나쁘다는 것이 아니라, 이 속성을 사용하는 것이 최선의 선택이 아니라는 것을 말하기 위함입니다.

## 대신 <PICTURE>를 사용하세요!

- 저는 많은 사람들이 background-image를 사용하는 가장 큰 이유는 CSS background-size: cover; 속성 때문이라고 생각합니다. 이를 통해 이미지를 매우 쉬운 방식으로 "덮을(cover)" 수 있습니다.
  - 이는 object-fit 속성으로 해결할 수 있습니다!
  - object-fit 속성과 함께 semantic HTML 요소 \<picture>를 사용하면, background-size: cover;와 동일한 효과를 얻을 수 있습니다. 하지만 아래와 같은 것들 또한 얻을 수 있습니다.
    - SEO 친화적 이미지
    - 접근성 친화적 이미지 (alt="" 속성 사용)
    - CMS-generated 이미지, CDN과 함께 잘 동작함
    - 이미지 최적화를 위한 srcset과 함께 잘 동작함
    - .webp 같은 next-generation 이미지 포맷을 위해 \<source>를 사용 가능
  - 이는 실제 구현하기는 어렵지않은데 비해 이점은 정말 많습니다! object-fit 속성은 이미지나 비디오가 부모 컨테이너에 어떻게 맞아야하는지 알려줍니다. 다음과 같이 변경하면 됩니다.
- 브라우저가 지원하는 경우 lazy loading (지원하지 않으면 기본 동작)
- 브라우저가 지원하는 경우 webp 포맷 (지원하지 않으면 skip)
- 브라우저가 선택할 수 있는 최적화된 반응형 이미지의 srcset.
- 또한, 모든 이미지는 ImageOptimize와 같은 도구를 통해 CMS에서 크기가 자동으로 조정되어 CDN이나 Amazon S3을 가리킬 수 있습니다. 마지막으로, object-fit으로 독창적인 이미지 크롭핑을 할 수 있습니다.
- \<picture>와 srcset의 브라우저 지원은 굉장히 좋습니다. (필요하다면 polyfill 사용), object-fit에 대한 브라우저 지원 또한 마찬가지입니다. (역시 필요하다면 polyfill 사용). polyfill.io는 또 다른 좋은 폴리필 사용 패턴입니다.
- 실제 배경 이미지를 원하는 드문 경우는 제외하고, 이제 background-image를 버릴 때가 되었습니다.
- 다수의 사용자를 위해 모범사례로 코드를 작성하고, 필요할 때 점진적 향상과 폴리필을 사용하세요. 방문자의 비율이 아주 적은 예전 브라우저에 대해 너무 동요하지 마세요.

--- 
참조 : [안티 패턴으로서의 CSS background-image 속성](https://velog.io/@chris/the-css-background-image-property-as-an-anti-pattern)