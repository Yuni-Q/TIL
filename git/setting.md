```bash
# remote 추가
git remote add upstream [주소]
# origin 이름 변경
git remote rename origin downstream
# 리모트 확인
git remote -v
# 포크한 레포가 아닌 기존의 레포 바라보기
git branch origin --set-upstream-to upstream/origin
```