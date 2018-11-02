```bash
git checkout [브랜치명]
git rebase master
```
> 이 후 충돌 해결이 필요합니다.<br>

```bash
git add [파일명]
git rebase --continue
```
> 만약 rebase 자체를 취소하려면 --abort 옵션을 지정하면 됩니다.<br>

```bash
git checkout master
git merge [브랜치명]
```
> 마무리 !!<br>