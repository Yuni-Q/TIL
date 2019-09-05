# 팝업 시 스크롤 막기

```javascript
const disabledBodyScroll = () => {
  const scrollY = window.pageYOffset;
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}px`;
};

const endableBodyScroll = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
};
```