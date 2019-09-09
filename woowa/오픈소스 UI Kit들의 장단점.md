# 오픈소스 UI Kit들의 장단점

## 부트스트랩

- 쉽고 빠르며 다양한 기능들을 제공합니다.
- 다양한 디자인과 동적인 효과를 사용할 수 있습니다.
- 모바일 환경과 반응형 웹 제작에 유리하게 사용할 수 있습니다.
- 높은 퀄리티가 보장이 되기 때문에 시간을 단축하며 그로 인해 비용이 절감 됩니다.
- jQuery에 의존성이 강합니다.
- 정형화되어 있어 마음대로 디자인의 구성요소를 변경하거나 구형 브라우저에서 지원이 안되는 경우가 있습니다.

## Material-UI

- 리액트 기반 UI 라이브러리 중에 가장 인기 있고, 성숙한 라이브러리 입니다.
  구글 머테리얼 디자인 기반으로 제작 되었습니다.
- 현재 stable 버전에서는 inline style을 사용하고 있어, 컴포넌트 커스터마이징 하는게 생각보다 쉽지 않습니다.
- 1.x 버전에서는 스타일링을 jss를 기반으로 변경 했습니다.

## React Toolbox

- 머테리얼 디자인을 기본으로 한 UI 라이브러리 입니다.
- Material-UI와 다른점은 스타일을 CSS Module을 사용하여 테마 적용과 커스터마이징이 더 쉽다는 점 입니다.
- 하지만, 아무래도 Material UI 보다는 컴포넌트 종류와 예제가 많지 않고, CSS Module을 사용하기 때문에 설정(configuration)이 다소 복잡 하다는 단점이 있습니다.

## React Bootstrap

- 웹 UI 라이브러리로 전세계에서 가장 많이 사용되는 Bootstrap을 리액트 기반으로 변경한 라이브러리 입니다.
- 주의할 점은 이 라이브러리는 Bootstrap 3.x 버전을 기반으로 제작되었습니다.
- Bootstrap v4 alpha 버전이 적용된 리액트 라이브러리는 reactstrap을 사용 하셔야 됩니다.

## reactstrap

- react-bootstrap이 Bootstrap 3.x 버전을 적용한 라이브러리라면 이 라이브러리는 Bootstrap 4.x alpha 버전을 적용한 라이브러리 입니다.

## Blueprint

- 리액트 기반으로 제작된 UI 툴킷(toolkit) 입니다.
- 리액트를 기반으로하는 웹 어플리케이션을 제작 하시려고 한다면 고려해볼만한 라이브러리 입니다.
- 다른 UI라이브러리와 다르게 tree, context menu, hot keys 등의 웹 어플리케이션에서 사용되는 컴포넌트들을 다수 제공 하고 있습니다.

## Ant Design

- 리액트와 타입스크립트(Typescript) 기반으로 제작된 UI라이브러리 입니다.
- 중국회사에서 오픈소스화한 라이브러리 인데, 깃헙 스타 수에 비해 많이 사용되고 있는 것 같진 않습니다.
- 문서와 예제는 자세히 되어 있어서 적용 하는데에는 문제는 없어 보입니다.

## react-materialize

- 리액트 기반으로 변경한 라이브러리 입니다.
- Materialize의 인기에 비해 리액트 기반으로 제작된 이 라이브러리는 크게 인기가 있어 보이진 않습니다.
- 아무래도 Material-UI나 react-toolbox 같은 라이브러리가 있기 때문일 것 같은데, Materialize를 리액트에서 사용 하시고 싶은 분이라면 한 번 고려해볼만 합니다.

## Grommet

- 리액트 기반의 UI 라이브러리 입니다.
- 컴포넌트 종류가 다양하고, 무척 깔끔합니다.
- 또한, 다른 UI 라이브러리엔 포함되지 않는 차트 컴포넌트가 기본으로 제공 되고 있습니다.
- 독특한 점은 Sketch 파일도 제공하고 있다는 게 눈에 띕니다.

## Semantic-UI-React

- 부트스트랩 만큼이나 인기 있는 Semantic UI의 리액트 버전 입니다.
- Semantic UI에 jQuery 의존성을 제거하고 순수하게 리액트로만 개발 된 버전 입니다.

## React-Foundation

- Foundation의 리액트 버전 입니다.
- Foundation의 인기에 비해 리액트 버전은 인기가 많지는 않은 것 같습니다.
- 그리고 아직 Foundation의 모든 컴포넌트를 리액트 버전으로 제공하진 않습니다.

출처 : [베스트 10 리액트 UI 라이브러리(10 Best React UI Library)](https://www.vobour.com/%EB%B2%A0%EC%8A%A4%ED%8A%B8-10-%EB%A6%AC%EC%95%A1%ED%8A%B8-ui-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-10-best-react-ui-lib)
