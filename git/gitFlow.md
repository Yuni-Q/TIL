
# Git Repository 구성
Upstream Repository는 개발자들이 공유하는 저장소로 최신 소스코드가 저장되어 있는 원격 저장소입니다.<br>
Origin Repository는 Upstream Repository를 Fork한 원격 개인 저장소입니다.<br>
Local Repository는 내 컴퓨터에 저장되어 있는 개인 저장소입니다.<br>

## 자신의 Pull Request는 스스로 merge 합니다.

## 브랜치
master : 제품으로 출시될 수 있는 브랜치<br>
develop : 다음 출시 버전을 개발하는 브랜치<br>
feature : 기능을 개발하는 브랜치<br>
release : 이번 출시 버전을 준비하는 브랜치<br>
hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치<br>

처음에는 master와 develop 브랜치가 존재합니다. 물론 develop 브랜치는 master에서부터 시작된 브랜치입니다.<br>
develop 브랜치에서는 상시로 버그를 수정한 커밋들이 추가됩니다.<br>
새로운 기능 추가 작업이 있는 경우 develop 브랜치에서 feature 브랜치를 생성합니다.<br>
feature 브랜치는 언제나 develop 브랜치에서부터 시작하게 됩니다.<br>
기능 추가 작업이 완료되었다면 feature 브랜치는 develop 브랜치로 merge 됩니다.<br>
develop에 이번 버전에 포함되는 모든 기능이 merge 되었다면 QA를 하기 위해 develop 브랜치에서부터 release 브랜치를 생성합니다.<br>
QA를 진행하면서 발생한 버그들은 release 브랜치에 수정됩니다.<br>
QA를 무사히 통과했다면 release 브랜치를 master와 develop 브랜치로 merge 합니다.<br>
마지막으로 출시된 master 브랜치에서 버전 태그를 추가합니다.<br>

1. 브랜치 생성
1. 코드 수정
1. 코드 커밋
1. 불필요한 커밋 합치기
1. rebase
1. push
1. Pull request