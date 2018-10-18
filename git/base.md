
# Git

## 1. Git이란?

Git을 분산 버전 관리 시스템 입니다.<br>
분산 버전 관리 시스템을 쉽게 말하면, 여러명의 개발자(분산)가 특정 프로젝트를 자신의 컴퓨터로 협업하여 개발하면서 버전을 관리할 수 있는 시스템 입니다.<br>

주요 용어
> Repository : 저장소를 의미하며, 저장소는 히스토리, 태그, 소스의 가지치기 혹은 branch에 따라 버전을 저장한다. 저장소를 통해 작업자가 변경한 모든 히스토리를 확인 할 수 있습니다.<br>
> Working Tree : 저장소를 어느 한 시점을 바라보는 작업자의 현재 시점입니다.<br>
> Staging Area : 저장소에 커밋하기 전에 커밋을 준비하는 위치입니다.<br>
> Commit : 현재 변경된 작업 상태를 점검을 마치면 확정하고 저장소에 저장하는 작업입니다.<br>
> Head : 현재 작업중인 Branch를 가리키는 것입니다.<br>
> Branch : 가지 또는 분기점을 의--mixed하며, 작업을 할때에 현재 상태를 복사하여 Branch에서 작업을 한 후에 완전하다 싶을때 Merge를 하여 작업을 합니다.<br>
> Merge : 다른 Branch의 내용을 현재 Branch로 가져와 합치는 작업을 의미합니다.<br>

Git 영역
> Working Directory : 샌드박스<br>
> Index(Staging Area) : 다음에 커밋할 스냅샷<br>
> HEAD : 마지막 커밋 스냅샷, 다음 커밋의 부모 커밋

## 2.Git 사용법
```bash
$git init 
```
> Working Directory가 되며 .git 파일 생성 됩니다.

```bash
git add [파일명]
```
> Index(Staging Area) 까지 동기화되면서 git status에 적용 됩니다.<br>
> [.] 은 현재 디렉토리의 모두 파일을 저장 합니다.<br>

```bash
git commit -m "[메세지]"
```
> HEAD까지 동기화 됩니다.

```bash
git remote add [별칭] [주소]
```
> 별칭으로 주소를 저장 합니다.<br>
> 별칭으로 origin을 많이 활용 합니다.
> git config --list에서 확인 할 수 있습니다.

```bash
git push -u [별칭] [브랜치]
```
> Repository까지 동기화 됩니다.<br>
> 이후 git push만으로도 사용 가능 합니다.
> git push --force를 통해 현재 상황을 무시하고 덮어 쓰기 할 수 있습니다.

### Git 부가 기능
```bash
$git log
```
> commit들의 hash값들을 볼 수 있습니다.

```bash
$git rebase
```
> 추후에 정리해 봅시다.<br>
> rebase로 head를 변경 -> 그럼 해쉬값이 새로 만들어 집니다.
```bash
$git commit --amend [스쿼시 커밋]
```
> 전 커밋에 커밋! 그래서 기존 커밋의 해쉬값이 변경 됩니다.