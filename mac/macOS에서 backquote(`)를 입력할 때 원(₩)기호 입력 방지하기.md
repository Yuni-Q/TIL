# macOS에서 backquote(`)를 입력할 때 원(₩)기호 입력 방지하기

macOS의 버전이 Sierra로 올라가며 한글키보드에서는 backquote(`)가 기본적으로 ₩으로 입력되도록 바뀌었다.
이를 막으려면 아래와 같이 폴더와 파일을 추가해준다.

~/Library에 KeyBindings폴더를 추가
~/Library/KeyBindings에 DefaultkeyBinding.dict파일 생성
아래 코드를 추가

```vim
{
  "₩" = ("insertText:", "`");
}
```

---

참조 : [macOS에서 backquote(`)를 입력할 때 원(₩)기호 입력 방지하기
](https://lhy.kr/mac/macos-sierra-use-backquote-instead-of-won)
