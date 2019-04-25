# scrollbar
1. 우선 스크롤이 아예 필요 없는 경우
```css
th, td {
  overflow: hidden;
}
```

2. 가로축만 스크롤 되게 하고 싶은 경우
```css
th, td {
  overflow-y: hidden;
  overflow-x: auto; // 스크롤 있는 경우에만 표시
}
```

3. 스크롤바만 없애되, 스크롤은 유지하고픈 경우
```css
th, td {
  -ms-overflow-style: none; // IE에서 스크롤바 감춤
  &::-webkit-scrollbar { 
    display: none !important; // 윈도우 크롬 등
  }
}
```

4. 보너스로 커스텀 스타일 적용하기
```css
.scrollbar {
	&::-webkit-scrollbar {
		width: 3px;
		background: none;
	}
	&::-webkit-scrollbar-thumb {
	    background: #f8f7fb;
	    opacity: .4;
	}
	&::-webkit-scrollbar-track {
	    background: none;
	}
}
```
