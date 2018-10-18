# mash up backend 세미나 ( 10/ 13 )

## Git reset

### 1.reset의 옵션
1. --soft ( HEAD 이동 )
  > reset 명령은 가장 최근의 git commit 명령을 되돌립니다.<br>
  > reset 명령 뒤에 HEAD~ (HEAD의 부모 커밋)를 주면 Index나 워킹 디렉토리는 그대로 놔두고 브랜치가 가리키는 커밋만 이전으로 되돌립니다.<br>
  > soft 옵션을 활용해서 여러 커밋을 하나로 합칠 수도 있습니다.
2. --mixed ( Index 업데이트 )
  > 가리키는 대상을 가장 최근의 커밋 으로 되돌리는 것은 같습니다. <br>
  > 그러고 나서 Staging Area 를 비우기까지 합니다.<br>
  > git commit 명령도 되돌리고 git add 명령까지 되돌리는 것입니다.
3. --hard ( 워킹 디렉토리 업데이트 )
  > reset 명령을 통해 git add 와 git commit 명령으로 생성한 마지막 커밋을 되돌립니다. 그리고 워킹 디렉토리의 내용까지도 되립니다.<br>
  > 다른 reset과 달리 복구 할 방법이 없기 때문에 신중하게 사용해야 합니다. 

## Git checkout
```bash
git checkout -b [브랜치명]
```
> 브랜치 만들기를 만들고 이동 합니다.

```bash
git checkout [브랜치명]
```
> 브랜치를 이동 합니다.

```bash
git checkout [파일명]
```
> 파일의 변경을 취소 합니다.