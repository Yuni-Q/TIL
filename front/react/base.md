
## 파일
README.md: .md 확장자는 마크다운(markdown) 파일입니다. 일반 텍스트와 함께 간단한 마크업 언어로 작성합니다. 대부분 프로젝트에는 README.md 파일에 프로젝트 설명 및 설치 방법 등 안내 사항을 작성합니다. 깃허브 리퍼지토리 페이지의 첫 화면에 README.md 파일을 보았을 겁니다. create-react-app 을 설치한 후 바로 깃허브에 프로젝트를 올린다면 README.md 파일 내용은 create-react-app 공식 깃허브 리퍼지토리와 내용이 동일할 것입니다.

node_modules/ 이 폴더에는 npm으로 설치되었던 모든 노드 패키지를 포함합니다. 이미 create-react-app 으로 리액트 애플리케이션을 부트스트래핑 했기 때문에 여러 모듈이 설치되어 있습니다. 이 폴더는 절대로 건드리지 말아야 합니다. npm 명령어를 사용해 패키지를 설치 또는 제거합니다.

package.json 노드 패키지 의존성 및 기타 프로젝트 구성 목록을 포함합니다.

.gitignore git을 사용할 때, 원격 git 리퍼지토리에 제외시킬 모든 파일과 폴더 목록이 나열되어 있습니다. 예를 들어 node_module은 로컬에만 있어야 합니다. 의존성 폴더 전체를 올리지 않고도 공유된 package.json 파일만으로 의존성 패키지를 설치할 수 있습니다.

public/ 배포를 위해 프로젝트 빌드 시 필요한 모든 파일을 말합니다. 프로젝트를 빌드할 때, src/ 폴더 내 모든 코드는 몇 개의 파일로 묶여 public 폴더에 배치됩니다.

build/ 프로덕션 빌드 시 생성되는 폴더입니다. 빌드 시 *src/*와 public 폴더에 있는 파일들이 번들되어 build 폴더에 저장됩니다.

manifest.json 및 registerServiceWorker.js 지금 단계에서는 무시해도 됩니다. 프로젝트에서 사용하지 않은 파일입니다.

## JSX
자바스크립트 없이 render() 메서드로 HTML를 반환했습니다. 새 변수를 만들어 "리액트에 오신 여러분을 환영합니다"라는 값을 주고, 이 변수를 JSX 문법인 중괄호({}) 안에 넣습니다.<br>
JSX의 className은 HTML 표준 class로부터 기인했습니다.<br>

## ES6
자바스크립트 ES6에서 변수 선언은 const 또는 let을 사용합니다. ES6에서는 var를 사용하는 일은 거의 없습니다.<br>
const로 선언된 변수는 다시 할당하거나 선언할 수 없습니다. 불변 데이터 구조(immutable data structures)이기 때문에 한 번 데이터 구조가 정의된 이후, 다시 변경할 수 없습니다.<br>

## ReactDOM
ReactDOM.render() 메서드는 두 개의 인자가 필요합니다. 첫 번째 인자는 렌더링 된 JSX, 두 번째 인자는 리액트 애플리케이션이 HTML에 들어갈 위치입니다. id가 root인 엘레먼트에 들어가게 됩니다. public/index.html 파일을 열어 id 속성을 확인해봅시다.

## Hot Module Replacement
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

# leanpub-start-insert
if (module.hot) {
  module.hot.accept();
}
# leanpub-end-insert
```
> Hot Module Replacement(핫 모듈 리플레이스먼트, 이하 HMR)란 브라우저 내 애플리케이션을 재실행하는 도구입니다. create-react-app에서도 쉽게 사용할 수 있습니다. 이를 위해 src/index.js 파일을 열고 아래와 같이 설정을 추가하겠습니다.<br>
> 가장 큰 장점은 HMR로 애플리케이션 상태를 유지할 수 있다는 것입니다. 애플리케이션에 3단계의 대화창이 있다고 가정해봅시다. 쉽게 다이얼로그 창 기능이라고 생각하면 됩니다. HMR이 없다면 소스 코드를 변경할 때마다 브라우저 페이지가 새로고침 됩니다. 매번 창을 다시 열어 1단계에서 3단계로 이동시켜야 하는 번거로운 일을 해야 합니다. HMR을 사용하면 다이얼로그 창은 3단계 상태로 유지되며, 소스 코드가 수정되어도 애플리케이션의 상태는 그대로 유지됩니다. 애플리케이션 자체는 다시 실행되지만 페이지는 새로고침 되지 않습니다.<br>

## 화살표 함수
화살표(=>)가 하는 일을 알고 있어야 합니다. 화살표 함수는 기존 함수 표현식과 this를 다르게 정의합니다.<br>
기존 함수 표현식은 자기 자신을 this 객체로 정의하지만, 화살표 함수 표현식은 자기 자신을 this를 생성하지 않고, 감싸고 있는 본문 컨텍스트로에서 의미를 갖습니다.<br>
화살표 함수에서 this 사용을 혼동하지 맙시다.<br>

## 클래스 
클래스에는 인스턴스화 할 수 있는 생성자(constructor)가 있습니다. 생성자는 매개변수를 사용해 클래스 인스턴스에 할당합니다. 또한 클래스는 함수를 정의합니다. 함수는 클래스와 연관되어 있어 메서드(method)라고도 불립니다. 이 메서드는 클래스 메서드로 참조됩니다.<br>

## key
각 엘레먼트마다 key 속성을 추가해야 합니다. 리액트는 key로 배열의 수정 및 제거된 항목을 식별합니다.<br>

## status
절대로 상태를 직접 변경해서는 안됩니다. 반드시 setState() 메서드를 사용해 상태를 변경해야 합니다. 다음 장에서 setState() 메서드에 대해 알아보겠습니다.<br>