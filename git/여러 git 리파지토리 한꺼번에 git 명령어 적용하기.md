# 여러 git 리파지토리 한꺼번에 git 명령어 적용하기

## 여러 git 리파지토리에 병렬로 명령어 처리하기
```bash
$ ls | xargs -P10 -I{} git -C {} checkout develop
Your branch is up to date with 'origin/develop'.
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.
Switched to branch 'develop'
```
- 현재 모든 git 리파지토리에 대해서 checkout이 되었다는 결과를 볼 수 있습니다.  

## 다른 경로에서 원하는 git 리파지토리에 명령어 사용하기
- 이럴 땐 -C(대문자) 옵션을 사용하면 됩니다. 아래와 같이 실행하면 현재 위치가 어디든 원하는 git 리파지토리에 명령을 내릴 수 있습니다.
```bash
git -C <상대경로|절대경로> <명령어>
git -C /source/common-api checkout develop
git -C /source/payment-api commit -m '테스트'
```

## 여러 디렉토리명을 하나씩 넘겨주는 방법
- xargs를 사용하면 for-each 문을 사용하는 것처럼 여러개의 값을 순차적으로 1개씩 넘겨줄 수가 있습니다.  
- xargs 명령어는 바로 앞의 명령어 결과를 받아서 각각 1개씩 처리할 수 있게 해주는 명령어 입니다. 일종의 for문이라 생각하면 됩니다. 대신 xargs는 단독으로 사용할 수는 있으나 의미 있는 작업은 아닙니다.
```bash
$ ls | xargs ls
common-api:
others.common-api.iml  pom.xml  src  target

delivery-api:
mine.api.delivery-api.iml  pom.xml  src  target

goods-api:
.log  others.goods-api.iml  pom.xml  src  target

members-api:
others.members-api.iml  pom.xml  src  target

order-api:
mine.api.order-api.iml  pom.xml  src  target

payment-api:
mine.api.payment-api.iml  pom.xml  src  target

settle-api:
mine.api.settle-api.iml  pom.xml  src  target

vendor-api:
others.vendor-api.iml  pom.xml  src  target
```
- xargs는 기본적으로 앞에서 넘어온 값을 넘겨줄 때 xargs 뒤에 나오는 명령어의 제일 끝에 값을 붙여 줍니다. -I 옵션을 사용하면 앞에서 넘어온 값을 원하는 곳에 위치시킬 수 있습니다. 관례적으로 -I{} 를 사용하지만 -IK과 같이 문자로 대치할 수 있습니다. 또한 -I R 처럼 공백을 넣을 수도 있습니다. 다만 문자로 치환하는 경우는 해당 문자가 명령어의 옵션인지 -I 옵션의 대치문자인지 판단히기 힘들기 때문에 추천하지는 않습니다. 
- 기본적으로 xargs로 실행을 하는 경우 명령어는 순차적으로 실행이 됩니다. 첫 예제에서 8개 리파지토리를 checkout 하는 명령어는 순차적으로 각각 실행이 됩니다. 하지만 단순 checkout 하는 명령어이니 병렬로 처리하는 경우 빠르게 처리할 수 있습니다. 이 때 xargs에서 제공하는 옵션이 -P입니다. -P10 과 같이 -P 뒤에 숫자를 붙이면 됩니다. 숫자는 최대 쓰레드 갯수를 의미합니다.

## 기타 팁
```bash
# checkout 하기
$ ls | xargs -I{} -P10 git -C {} checkout develop

# 현재 브랜치 전체 pull 하기
$ ls | xargs -I{} -P10 git -C {} pull

# 현재 브랜치 전체 hard reset
$ ls | xargs -I{} -P10 git -C {} reset --hard HEAD

# merge 하기
$ ls | xargs -P10 -I{} git -C {} checkout release
$ ls | xargs -I{} git -C {} merge develop  # merge 할 때는 conflict 확인을 위해 -P 옵션을 사용하지 않음

# merge 하기 (한줄버전)
$ ls | xargs -I{} sh -c 'echo --{}--; git -C {} checkout release; git -C {} merge develop;'

# remote URL 얻기
$ ls | xargs -I{} git -C {} remote -v | grep fetch

# 바로 위 remote URL 결과를 파일로 만든 후 전체 clone 받기 (url이 있는 파일을 url_list.txt라 가정)
$ cat url_list.txt | xargs -P10 git clone   # clone은 뒤에 url이 붙으므로 -I 옵션이 필요 없음 

# 각 리파지토리 마지막 tag 확인
$ ls | xargs -I{} sh -c 'echo --{}--; git -C {} describe --abbrev=0 --tag;'

# stash 목록 확인
$ ls | xargs -I{} sh -c 'echo --{}--; git -C {} stash list;'

# develop, release, master 전체 pull 받기
$ ls | xargs -I{} -P10 sh -c 'git -C {} checkout master; git -C {} pull; git -C {} checkout release; git -C {} pull; git -C {} checkout develop; git -C {} pull;'
```

---
출처 : [여러 git 리파지토리 한꺼번에 git 명령어 적용하기](http://tech.javacafe.io/2018/12/15/%EC%97%AC%EB%9F%AC_git_%EB%A6%AC%ED%8C%8C%EC%A7%80%ED%86%A0%EB%A6%AC_%ED%95%9C%EA%BA%BC%EB%B2%88%EC%97%90_git_%EB%AA%85%EB%A0%B9%EC%96%B4_%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0/)
