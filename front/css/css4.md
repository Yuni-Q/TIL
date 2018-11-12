
## css4를 쓰기 위해 parsel설치
```bash
npm init -y
npm i -g parsel-bundler
```

### PostCSS
```bash
npm install postcss-preset-env
```
```json
{
  "name": "css-masterclass",
  "version": "1.0.0",
  "description": "## Flexbox",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Yuni-Q/css-masterclass.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Yuni-Q/css-masterclass/issues"
  },
  "homepage": "https://github.com/Yuni-Q/css-masterclass#readme",
  "scripts": {
    "start": "parcel index.html"
  },
  "dependencies": {
    "postcss-preset-env": "^6.4.0"
  },
  "postcss": {
    "plugins": {
      "postcss-preset-env": {
        "stage": 0
      }
    }
  }
}

```
### Matches
```css
/* Matches */
/* li:matches(:nth-child(even), .target){
  background-color: blue;
} */
```

### not
```css
/* not */
li:not(.targer){
  background-color: blue;
}
```

### Variables
```css
:root {
  --awesomeColor: #2980b9;
}

li:first-child {
  color: var(--awesomeColor);
}

```

### custom-selector
```css
@custom-selector :--headers h1, h2, h3, h4, h5, h6;

:--headers {
  color: #8e44ad;
}
```

### Media Query Ranges
```css
@custom-media --ipad-size (450px <= width < 850px);

@media(--ipad-szie){
  body {
    color: red;
  }
}
```

### color-mod
```css
h1 {
  color: color-mod(#f1c40f blackness(80%));
}
```
> 이상하게도 동작하지 않는다...<br>

### gray
```css
h1 {
  color: gray(90%);
}
```
> 이상하게도 동작하지 않는다...<br>


### system-ui
```css
h1 {
  font-family: system-ui
}
```

### nesting
```css
 main {
  background-color: blue;
  & section {
    background-color: red;
    width: 500px;
    & li {
      background-color: yellow;
      width: 400px;
      & a {
        color: black;
        &:hover {
          font-size: 50px;
        }
      }
    }
  }
}

a{
  /* selecter가 더 강력해서 안 먹힙니다. */
  color: red;
}
```

### css grid kiss
좋은게 있다더라... 검색 ㄱㄱ
