# Git 사용 중 자주 만나는 이슈 정리

- 원격 저장소(Remote repository): 일반적으로 GitHub, GitLab 또는 BitBucket과 같은 호스팅 서비스에서 호스팅된 저장소.
- 로컬 저장소(Local repository): 컴퓨터의 로컬 환경에 위치한 저장소.
- 작업 디렉토리(Working directory): 실제 파일이 위치한 디렉토리.
- 스테이징(Staging): 확정할 변경 사항을 준비시키는 것.
- 인덱스(Index): 확정할 준비가 된 변경 사항들이 모인 영역.
- 커밋(Commit): 인덱스의 변경 사항들을 확정하는 것. 여기까지는 로컬 저장소에서 일어나는 일이며, 아직 다른 사람에게는 변경 사항이 공개되지 않은 상태다.
- 헤드(HEAD): 작업 중인 브랜치의 선두를 가리키는 포인터. 헤드 이하의 커밋들을 확정된 것으로 취급하며, 필요에 따라 특정 커밋이나 브랜치를 가리키도록 헤드를 움직여 작업 디렉토리의 상태를 바꿀 수 있다.
- 푸시(Push): 확정된 변경 사항을 원격 저장소에 게시하는 것. 드디어 변경 사항이 공개된다.
- origin: 로컬 저장소의 원본 원격 저장소. clone 과정에서 자동으로 등록된다. clone으로 로컬 저장소를 만든 것이 아니라면 따로 추가해야 한다.
- reset 명령을 사용하면 파일을 언스테이징 할 수 있다. 파일명을 명시하지 않으면 스테이지된 모든 파일을 언스테이징한다.
  - reset을 이용해 헤드를 특정 커밋으로 옮긴다. reset의 기본 옵션은 --mixed이며, 작업 디렉토리는 그대로 유지한 채 헤드와 인덱스를 변경한다. --hard 옵션의 경우 작업 디렉토리와 헤드, 인덱스를 모두 변경한다. 마지막으로 --soft 옵션은 헤드만 변경한다.
- --amend 옵션으로 커밋해 직전 커밋 메시지를 수정한다.
- 푸시한 커밋을 과거로 되돌리기. revert 명령을 사용하면 된다. revert는 reset과 달리 커밋 히스토리를 남긴다.
- -cached 옵션은 인덱스에서만 파일을 삭제한다는 의미로, --cached 옵션을 주면 로컬 저장소의 파일은 지우지 않는다. 히스토리가 그대로 남기 때문에 민감한 파일의 경우 이 방법으로 지워선 안 된다. 커밋에서 제외할 파일은 미리 .gitignore 파일에 명시하도록 하자.
- fetch와 pull 두 가지 방법이 있다.
  - fetch를 실행하면 원격 저장소의 내용을 로컬 저장소로 가져오며, 임시로 FETCH_HEAD라는 이름의 브랜치를 만든다. (git checkout FETCH_HEAD 명령으로 원격 저장소에서 가져온 업데이트를 확인할 수 있다.) 그리고 merge로 가져온 내용을 master 브랜치에 병합(Merge)한다. 만약 병합과정에서 충돌(Conflicts)이 발생하면 직접 파일을 수정해줘야 한다.
  - pull의 경우 fetch와 merge를 연달아 진행한다. 현재 체크아웃하고 있는 브랜치의 원격 저장소에서 내용을 가져오는 경우 매개변수(아래 예시에서는 origin master)를 생략해도 된다.
- 병합 커밋을 만들지 않으려면 --rebase 옵션으로 리베이스 병합을 시키면 된다. (이때 스테이징되지 않은 변경 사항이 있으면 안 된다.)
- git stash를 사용해 백업 할 수 있다. 작업 디렉토리가 헤드로 돌아갔으므로 안전하게 featB 브랜치를 체크아웃할 수 있게 됐다. 만약 백업한 내용을 되돌리고 싶다면 pop하면 된다. save \<name>으로 이름을 붙여 백업하고, list로 목록을 확인할 수 있다. pop stash@\<id>로 특정 백업을 복원할 수도 있다.
- git log --reflog --graph --oneline --decorate 명령을 쓰면 로그를 더 편하게 볼 수 있다는 사실을 알게됐다.
- .gitconfig 파일에서 alias를 설정해주면 된다. [alias] 섹션에 축약형과 축약할 명령을 작성하고 저장한다.

## 이미 푸시한 커밋 메시지 수정하기

- 먼저 해당 커밋으로 리베이스해야 한다. --interactive 또는 -i 옵션을 주면 텍스트 에디터가 열리며 커밋 내역이 나타난다.

```zsh
$ git rebase -i
pick 381cd2a 코드 품질 개선
pick f772ba1 테스트ㅌ 코드 추가
pick 2ad65fe 하단 버튼 추가
```

- 여기서 수정하고자 하는 커밋 해시(f772ba1) 앞의 pick을 edit 또는 e로 바꾸고 저장한다.

```zsh
pick 381cd2a 코드 품질 개선
edit f772ba1 테스트ㅌ 코드 추가
pick 2ad65fe 하단 버튼 추가
```

- 이제 커밋 메시지를 새로 작성해 커밋하고, 리베이스를 진행한다. 마음이 바뀌었다면 리베이스 명령의 --abort 옵션으로 리베이스를 중단할 수 있다.

```zsh
$ git commit --amend -m "테스트 코드 추가"
$ git rebase --continue
```

## 푸시한 파일 흔적없이 삭제하기

- Alice는 절대 공개해서는 안되는 파일을 원격 저장소에 푸시했다.
- 실수로 푸시한 파일 password.txt를 원격 저장소에서 삭제하고자 한다.
- 먼저 모든 히스토리에서 password.txt를 제거해야 한다. filter-branch를 사용하면 브랜치의 히스토리 전체에서 특정 커밋만 필터링해 수정할 수 있으며, 여기에 --index-filter 옵션을 주면 인덱스를 수정하게 된다. 아래 명령의 경우 모든 커밋에서 git rm --cached --ignore-unmatch password.txt 명령을 실행한다. 참고로 rm 명령의 --ignore-unmatch 옵션은 파일이 일치하지 않아도 0을 리턴하도록 해 명령이 반복되게 만든다.

```zsh
$ git filter-branch -f --index-filter "git rm --cached --ignore-unmatch password.txt" HEAD
```

- 파일을 삭제하는 과정에서 아무런 내용이 없는 빈 커밋이 생길 수 있다. 이제 모든 히스토리에서 빈 커밋을 제거하고 푸시한다.

```zsh
$ git filter-branch -f --prune-empty HEAD
$ git push -f origin master
```

## 풀 리퀘스트에서 Squash and Merge된 커밋 제외하기

<pre>
───M1───M2───S1───M3 (master)
   └────A1───A2 (featA)
             └────B1───B2 (featB)
</pre>

- B1, B2 커밋을 복사해 M3의 자식으로 만들기 위해 --onto 옵션으로 리베이스하고, --force 또는 -f 옵션으로 푸시한다. 보다시피 커밋을 제외하거나 뺀다는 개념이 아니다.

```zsh
$ git checkout featB
$ git rebase --onto featA master
$ git push -f origin featB
```

- 이제 B1, B2 커밋이 복사되어 같은 내용의 B1’, B2’ 커밋이 M3를 부모로 갖게 된다. (기존 B1, B2 커밋은 버려지지만 사라지지는 않는다.) 최종적으로 PR에서 A1과 A2 커밋도 깔끔히 사라진다.
