# package.json

[[NodeJS] 모두 알지만 모두 모르는 package.json](https://programmingsummaries.tistory.com/385)

- package.json 파일을 작성할 때에는 JavaScript의 객체 리터럴이 아니라 올바른 JSON 포맷이어야 합니다.
- npm init 명령어를 통해 package.json 파일을 만들 수 있습니다.
  - -y 옵션을 사용해서 빠르게 생성 할 수도 있습니다.
```json
// npm init -y를 통해 만든 package.json 파일
{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## name

- 필수로 입력되어야 하며 이 항목들이 누락되면 패키지를 설치할 수 없습니다.
- name은 반드시 214자보다 짧아야 합니다.
- name은 반드시 점(.)이나 밑줄(_)로 시작할 수 없습니다.
- name은 대문자를 포함해서는 안됩니다.
- name은 URL의 일부분이자, 커맨드라인의 인수이고 폴더명입니다.
  - 따라서 모든 URL-safe하지 않은 name은 거부됩니다.

- Node의 코어 모듈과 같은 이름을 사용하지 않는다.
- name에 "node" 또는 "js"를 넣지 않는다.
  - package.json을 쓰고 있는 시점에서 이미 JavaScript라는 것을 알 수 있고, "engines" 항목에서 실행 기반을 지정할 수 있습니다.
- name은 JavaScript 파일 내에서 require() 함수의 인수로 사용되므로 짧게 하면서도 알기 쉬운 것으로 짓는 것이 좋습니다.
- 설정 전에 같은 이름이 이미 있는지 확인하려면 npm registry를 참조하면 됩니다.
- name은 scope에 의해 접두어가 추가될 수 있습니다.

## version

- 필수로 입력되어야 하며 이 항목들이 누락되면 패키지를 설치할 수 없습니다.
- name과 version을 통해 각 패키지의 고유성을 판별하게 됩니다. 따라서 패키지의 내용을 변경하려면 version을 변경해야만 합니다.
- version은 반드시 npm의 디펜던시에 포함된 node-semvev로 parsing 가능해야 합니다.

## description

- 설명을 문자열로 기술한다.
- npm search로 검색된 리스트에 표시되기 때문에 사람들이 여러분이 만든 패키지를 찾아 내고 이해하는 데 도움이 됩니다.

## keywords

- 키워드를 문자열 배열로 설명 합니다.
- npm search로 검색된 리스트에 표시되기 때문에 사람들이 여러분이 만든 패키지를 찾아 내고 이해하는데 도움이 됩니다.

## homepage

- 프로젝트 홈페이지가 있을 경우 이 항목에 입려합니다.
- 이것은 url 항목과는 다릅니다. 만약 url을 설정하면 그것은 외부에 설치된 패키지 소스로 리다이렉션 되고, 예상치 못한 움직임을 유발할 수 있습니다.

## bugs

- 프로젝트의 이슈와 버그 트래킹을 볼 수 있는 url과 이슈를 알릴 email 주소를 입력합니다.
- 이 항목들은 패키지 사용자가 문제에 직면했을 때 도움을 주기 위함 입니다.
- url이나 email 중 하나만 적용 할 수 있고, url만 지정하면 객체가 아니라 단순한 문자열을 bugs 항목에 지정할 수도 있습니다.
- url을 지정하는 경우에는 npm bugs 명령을 사용할 수 있습니다.

## license

- 패키지 사용자들이 여러분이 만든 패키지를 사용하기 위해 어떻게 권한을 얻는지, 또 어떤 금기 사항이 있는지 알게 하기 위해 라이센스를 명시해야 합니다.
- 가장 간단한 방법은 BSD-3-Clause나 MIT 같은 일반적인 라이센스의 표준 SPDX ID를 지정하는 것입니다.
- 만약 패키지가 여러 개의 라이센스 아래에 있다면, SPDX license expression syntax version 2.0 string을 사용해서 표현됩니다.
- 만약 SPDX 식별자로 할당되지 않은 라이센스를 사용한다면, SPDX 표현을 따라 해당 라이센스를 지정해줍니다.
- 오래된 패키지 중 일부는 licenses라는 속성으로 목록을 가지고 있었지만, 이 방식은 현재 deprecated 되었습니다.
- 비공개로 사용하거나 어떤 조건에서도 패키지를 퍼블리싱 하지 않을 경우에는 "license": "UNICENSED"라고 명시하고 "private": true로 설정함으로써 미연에 퍼블리싱하게 되는 것을 막아줄 수 있습니다.

## people fields: author, contributors

- author는 한 사람만 지정 합니다.
- contributors는 여러 사람을 배열로 지정합니다.
- 각 사람은 name을 포함하고 선택적으로 email과 url 값을 가집니다.
- 또는 하나의 스트링으로 줄여서 입력하면 npm이 이를 파싱하게 됩니다.
- npm은 또한 "maintainers라는 필드에 여러분의 npm 사용자 정보를 설정합니다.

## files

- 프로젝트에 포함된 파일의 배열입니다.
- 폴더 이름을 지정하면 폴더 안에 파일도 포함됩니다
  - 다른 설정에 의해 해당 파일들이 무시되지 않는 경우에만 해당 합니다.
- ".npmignoe"라는 파일을 패키지의 루트 혹은 하위 폴더에 둘 수 있는데, 이 파일에 기록된 파일들은 files의 배열로 지정되어 있었다고 해도 대상에서 제외됩니다.
- 다음의 파일들은 설정에 관계없이 항상 포함 됩니다.
  - pakage.json
  - README
  - CHANGELOG
  - LICENSE 또는 LICENCE
- 반대로, 일부 파일들은 항상 무시 됩니다.
  - .git
  - CVS
  - .svn
  - .hg
  - .lock-wscript
  - .wafpickle-N
  - *.swp
  - .DS_Store
  - ._*
  - npm-debug.log

## main

- main 항목은 여러분들의 프로그램의 시작점이 되는 모듈의 ID 입니다.
- 사용자가 패키지를 설치 한 뒤, require('packageName')를 실행 했을 때 main으로 지정한 모듈의 exports 객체가 반환 됩니다.
- 모듈 ID는 패키지 루트에 상대적인 경로를 지정해야 핣니다.
- 대부분의 모듈에 있어서 메인 스크립트를 갖는 것은 유용하지만 종종 그렇지 않을수도 있습니다.

## bin

- 많은 패키지는 PATH에 설치되는 하나 이상의 실행 파일을 가지고 있습니다. npm에서는 이를 매우 쉽게 구현할 수 있습니다.
- 실행 할 수 있는 패키지를 만들기 위해서 package.json 파일에 bin 항목을 제공해야 합니다.
- 설치 시에, npm은 bin 항목에 기술된 파일의 심볼릭 링크를 global install인 경우 prefix/bin에, local install인 경우 .node_bodules/.bin/에 생성하게 됩니다.
- 만약 하나의 실행 파일만 가지고 있다면, 실행 파일의 이름은 패키지의 이름과 같게 되고, 그렇지 않다면 각각 실행 파일의 이름을 bin 항목에 지정해 주어야 합니다.

## directories

- CommonJS Packages 스펙에는 directories 개체를 사용해서 패키지 구성을 나타낼 수 있습니다. npm의 package.json을 보면 doc, lib와 man으로 이루어진 디렉토리 구성을 확인 할 수 있습니다.

### directories.lib

- 모듈의 라이브러리가 어디에 있는지 보여준다. lib 폴더에 특별한 일을 하지는 않지만 메타 데이터로 유용하다.

### directories.bin

- 만약 directories.bin으로 bin을 지정하면, 해당 디렉토리의 모든 파일이 실행 파일로 추가 됩니다.
- bin이 동작하는 방식에 의해, bin과 directories.bin을 모두 지정하는 것은 오류입니다.
  - 개개의 파일을 지정하고 싶다면 bin을 사용합니다.
  - 특정 폴더 아래에 모든 파일을 bin으로 정하고 싶다면 directories.bin을 사용하는 것이 좋습니다.

### directories.man

- man 문서들이 위치한 폴더를 가리킵니다.
- man 배열을 만드는 것보다 간편힙니다.

### directories.doc

- 마크다운 폴더들을 여기에 위치시킵니다.

### directories,example

- 예제 파일들을 여기에 위치시킵니다.

## repository

- 소스 코드가 관리되는 저장소 위치를 지정합니다.
- 소스 코드에 참여하고자 하는 사람들에게 도움이 될 수 있습니다.
- 만약 git 저장소가 github라면 npm docs 명령으로 찾을 수 있습니다.
- URL은 특별한 조작없이 VCS 프로그램에서 바뤄 다뤄질 수 있도록 오픈되어 있어야하며 컴퓨터를 위한 부분이므로, 프로젝트의 홈페이지 URL을 명시해서는 안됩니다.

## script

- 패키지의 생명주기 등 다양한 타이밍에서 실행되는 script 명령들을 포함하고 있는 사전 입니다.
- scripts 항목 객체에서 키는 이벤트이고, 값은 이때 실행될 커맨드이다.

## config

- 패키지의 버전에 관계 없이 패키지 스크립트에서 사용될 수 있는 설저 정보입니다.
- start 명령을 실행 할 때 npm_package_config_port를 참조할 수 있게 됩니다.
  - npm config set foo:prot 8001과 같이 덮어 쓸 수도 있습니다.

## dependencies

- 의존성을 규정하는 것은 패키지의 이름과 해당 패키지의 버전 범위를 지정하는 객체를 통해 이루어 집니다.
- 버전 범위는 하나 혹은 여러개의 공백으로 분리된 설명자 문자열입니다. 의존성은 tarball이나 git URL로도 지정될 수  있습니다.
- URLs as Dependencies
- Git URLs as Dependencies
- GitHub URIs
- Local Paths

## devDependencies

- devDependencies 객체에 디펜던시를 추가하면 패키지 테스트 및 문서 작성에 사용되는 외부 프레임 워크는 다운로드 되지 않습니다.

## peerDependencies

- 내가 만든 모듈이 다른 모듈과 함께 동작할 수 있다는 호환성을 표시하는 것입니다.

## bundleDependencies

- 패키지를 퍼블리싱할 때 번들되는 패키지 이름들의 목록입니다.

## optionalDependencies

- 사용을 원하는 모듈이지만, 없거나 실패해도 npm의 패키지 설치 과정이 중단되지 않도록 하려는 패키지를 추가합니다.
- dependencies에 이름이 있으면 덮어쓰게되므로 가장 좋은 방법은 한쪽에만 기재하는 것입니다.

## engines

- 동작 가능한 node의 버전을 지정할 수 있습니다.
- 주의할 점은, 사용자가 engine-strict config flag를 설정하지 않으면 이 필드는 단지 조언용으로만 사용됩니다.

## os

- 모듈이 어떤 운영체제에서 작동하는지 지정할 수 있습니다.
- 화이트리스트 방식이 대신에 블랙리스트 방식으로도 지정할 수 있는데, 단순히 OS 앞에 "!"를 붙이는 것만으로도 가능합니다.
- 블랙리스트와 화이트리스트 방식을 둘다 동시에 사용할수도 있지만, 그렇게 해야할 이유는 별로 없을 것입니다.
- 운영체제의 문자열은 process.platform에 의해서 결정 됩니다.

## cpu

- 만약 코드가 특정한 cpu 아키텍처에서만 동작한다면 그것 역시 명시해 줄 수 있습니다.
- OS 설정과 같이 블랙리스트 방식으로 지정해 줄 수도 있습니다.
- 호스트 아키텍처는 process.arch에 의해 결정됩니다.

## preferGlobal

- 패키지가 글로벌 설치를 수행해야만 한다면, 이 값을 ture로 해서 local 설치시에 경고 메시지를 제공할 수 있습니다.
- 이것은 local 설치를 완전히 막지느 못하지만, 패키지가 예쌍과 다르게 동작하는 혼란을 피하는데 도움이 됩니다.

## private

- "private": true로 설정 해두면, publish 명령을 거부하게 됩니다.
- 특정 레지스트리 만에 출시하는 환경을 원한다면, publishConfig를 이용하여 publish시 registry 설정을 덮어 쓸 수 있습니다.

## publishConfig

- publish 할때 사용되는 설정입니다.
- tag와 registry, access를 다룰 때 편리합니다.
- 설정 항목 값은 덮어쓰게 되지만, 오직 tag와 registry, access만 publish의 목적에서 다뤄지게 될 것입니다.

## DEFAULT VALUES

- npm은 패키지 내용에 따라 몇 가지 기본값을 설정합니다.
- 만약 server.js 파일이 패키지의 루트에 존재하면, npm은 기본적으로 start 커맨드를 사용했을 때, node server.js를 실행하게 됩니다.
- 만약 binding.gyp 파일이 루트에 존재하면, npm은 기본적으로 preinstall 커맨드를 사용했을 때 node-gyp를 사용해서 컴파일 합니다.
- 만약 AUTHORS 파일이 패키지 루트에 있으면, npm은 각 파일을 name \<email> (url) 포맷으로 다루게 됩니다.