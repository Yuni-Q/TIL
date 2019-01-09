
FRONT-END DEVELOPMENT, TIP
자바스크립트에서 REPLACE를 REPLACEALL 처럼 사용하기
2014-04-03 CODEJS	댓글 7개
자바스크립트에서 replaceAll 은 없다.
정규식을 이용하여 대상 스트링에서 모든 부분을 수정해 줄 수 있다.

[replace 이용]

```javascript
// #를 공백으로 변경한다.
str.replace("#",""); 
```
하지만 첫번째 # 만 공백으로 변경하고 나머지는 변경이 되지 않는다.

[정규식 이용해서 gi 로 감싸기]

```javascript
// #를 감싼 따옴표를 슬래시로 대체하고 뒤에 gi 를 붙이면 
// replaceAll 과 같은 결과를 볼 수 있다.
str.replace(/#/gi, ""); 
```

[정규식의 gi 설명]
* g : 발생할 모든 pattern에 대한 전역 검색
* i : 대/소문자 구분 안함
* m: 여러 줄 검색 (참고)

---
참조 : [자바스크립트에서 REPLACE를 REPLACEALL 처럼 사용하기](http://www.codejs.co.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-replace%EB%A5%BC-replaceall-%EC%B2%98%EB%9F%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0/)