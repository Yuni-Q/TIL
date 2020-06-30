# vsCode Setting

## 단축키

| 단축키                   | 설명                             |
| ------------------------ | -------------------------------- |
| ctrl + shift + 좌/우     | 선택 영역 확장/축소              |
| option + 위/아래         | 블록간 이동                      |
| command + shift + \      | 마지막 블록으로 이동             |
| F2                       | rename                           |
| F12                      | 정의부로 이동                    |
| option + shift + F12     | 사용하는 코드 탐색               |
| command + 0              | 파일 탐색기 포커싱               |
| command + 1              | 에디터 포커싱                    |
| ctrl + ` | 터미널 포커싱 |
| command + shift + .      | 브레드크럼 포커싱                |
| shift + 좌/우            | 브레드크럼에서 이동              |
| command + p              | 파일로 이동                      |
| command + shift + p      | 모든 명령어 표시                 |
| command + t              | 심볼을 이용해서 파일로 이동      |
| command + shift + o      | 파일 내의 심볼 바로가기          |
| command + k + s          | 단축키 목록 보기                 |
| command + option + ]/[   | 블록 펴기, 접기                  |
| command + d              | 같은 단어 선택                   |
| option + click           | 중복 커서                        |
| command + /              | 주석                             |
| option + shift + i       | 선택 영역 중독 커서              |
| option + shift + drag    | 선택 영역 중독 커서(마우스 기준) |
| command + 위/아래        | 최상위 / 최하위 로 이동          |
| command + b              | 사이드바 숨기기                  |

## terminer에서 노드 실행하기 ( atom은 그냥 된다고 하는데 ... )

- command + shift + p
- path 입력
- 셸 명령 : PATH에 'code' 명령 설치
- 컴퓨터 다시 켜면 다시 설치 해야하는데 다른 세팅 해도 자꾸 안되서 나중에 다시 시도해 보겠음 ...
  - 기본 세팅 위치 문제였던거 같다. bash에 깔고 zsh 써서 ...

## 확장 프로그램

### Auto Close Tag

- 닫기 태그를 자동으로 추가합니다.

### [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

- 페어링 태그의 이름을 자동으로 바꿉니다.

### ESLint

- JS 작성에 도움을 줍니다.
- 사용하기 위해 설치가 필요합니다.

```bash
npm install -g eslint
eslint init
```

- .eslintrc.js 파일이 생성 됩니다.
- .eslintgnore 파일에 ESLint가 무시행야하는 파일이나 디렉터리를 추가할 수 있다.

### htmltagwrap

- option + w 를 이용하여 선택한 내용을 HTML(p) 태그로 래핑 합니다.

### IntelliSense for CSS class names in HTML

- 작업 영역에있는 정의 또는 링크 요소를 통해 참조되는 외부 파일을 기반으로 HTML 클래스 특성에 대해 CSS 클래스 이름 완성을 제공 합니다.

### VS Code JavaScript (ES6) snippets

- ES6 구문의 JavaScript 코드 작성에 도움을 줍니다.

### Live Server

- VScode에서 바로 실행 !! ( 5000 포트 사용 )

### Prettier - Code formatter

Prettier를 사용하여 JavaScript / TypeScript / CSS를 포맷하는 VS 코드 패키지 입니다.

### [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)

-= 괄호를 색깔로 구분 할 수 있습니다.

### vscode-icons

- vs-code의 아이콘을 바꿔줍니다.

### [Dashboard](https://marketplace.visualstudio.com/items?itemName=kruemelkatze.vscode-dashboard)

- 대시보드를 만들 수 있습니다.

### [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

### [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)

### [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)

### [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

### [Typescript React code snippets](https://marketplace.visualstudio.com/items?itemName=infeng.vscode-react-typescript)

### [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

### [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

### [jumpy](https://marketplace.visualstudio.com/items?itemName=wmaurer.vscode-jumpy)

### [Data Preview](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.vscode-data-preview)

### [Placeholder Images](https://marketplace.visualstudio.com/items?itemName=JakeWilson.vscode-placeholder-images)

### [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

### [vscode-faker](https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-faker)

### [WordCounter](https://marketplace.visualstudio.com/items?itemName=kirozen.wordcounter)

### [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

### [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)

## [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)

## [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)

## [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)

## [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

## [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
