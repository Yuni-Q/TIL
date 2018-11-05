
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
git init 
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
git log
```
> commit들의 hash값들을 볼 수 있습니다.

```bash
git rebase
```
> 추후에 정리해 봅시다.<br>
> rebase로 head를 변경 -> 그럼 해쉬값이 새로 만들어 집니다.
```bash
git commit --amend [스쿼시 커밋]
```
> 전 커밋에 커밋! 그래서 기존 커밋의 해쉬값이 변경 됩니다.

```bash
git clone [주소]
```
> git repository를 local로 복사해 올 수 있습니다.

```bash
git commit --amend
```
> 이전 커밋 수정<br>

```bash
git revert HEAD
```
커밋 취소

```bash
git cherry-pick 99daed2
```
> 원하는 커밋만 추출해서 merge<br>

```bash
git rebase -i HEAD~~
```
> 과거 커밋 합치기<br>
> 두 번째 줄의 'pick' 문자를 squash로 변경하고 저장 · 종료합니다.<br>

```bash
git rebase -i HEAD~~
# 첫 번째 줄의 'pick' 문자를 'edit'으로 변경하여 저장 · 종료합니다. 그러면 다음과 같은 출력 되고 수정할 커밋이 체크아웃된 상태가 됩니다.<br>
git add sample.txt
git commit --amend
git rebase --continue
```
> commit 을 실행했다고 해서 rebase 작업이 끝난 것은 아닙니다. 이 커밋 작업이 종료했다는 것을 알리려면, --continue 옵션을 지정하여 rebase 를 실행해야 합니다.<br>
> 이 때, 다른 커밋에서 충돌이 발생할 수 있습니다. 그럴 때에는 충돌 부분을 수정한 후 add 와 rebase --continue를 실행하면 됩니다. 이 때, 커밋은 필요 없으므로 실행하지 않습니다. 만약 도중에 rebase 작업을 중지하고자 하는 경우에는 rebase에 --abort 옵션을 지정하여 실행하면 됩니다. <br>
> rebase 전의 커밋은 'ORIG_HEAD'라는 이름으로 남아 있습니다. 만약 rebase 한 후 원래대로 되돌리고자 하는 경우에는 'git reset --hard ORIG_HEAD'을 실행하여 rebase 전의 상태로 되돌릴 수 있습니다.<br>

```bash
git merge --squash issue1
```
> 이번에는 'issue1' 브랜치의 모든 커밋을 하나의 커밋으로 병합하여 'master' 브랜치로 가져와 보도록 하겠습니다.<br>

```bash
git rm [fileName]
git rm --cached [fileName]
```
> 위의 git 명령어를 통해 폴더나 파일을 삭제하면 됩니다.<br>
> --cached 는 rm 명령어의 옵션이다.<br>
> git rm => 원격 저장소와 로컬 저장소에 있는 파일을 삭제한다.<br>
> git rm --cached => 원격 저장소에 있는 파일을 삭제한다. 로컬 저장소에 있는 파일은 삭제하지 않는다.<br>



출처: http://mygumi.tistory.com/103 [마이구미의 HelloWorld]<br>

### git messeage
1. 두 번째 줄은 항상 공백
2. 첫 줄은 50자 내로, 나머지 줄은 70자 내로 작성
3. 명령어 사용, 커밋 메시지를 과거형으로 작성 금지
4. 제목 첫글자를 대문자로, 제목 끝에 . 금지
5. 본문은 ‘어떻게’보다 ‘무엇을’, ‘왜’에 맞춰 작성하기

[git 도움](https://github.com/k88hudson/git-flight-rules/blob/master/README_kr.md#%EB%AA%A8%EB%93%A0-%EC%84%9C%EB%B8%8C%EB%AA%A8%EB%93%88%EC%9D%84-%ED%81%B4%EB%A1%A0%ED%95%98%EA%B8%B0)
