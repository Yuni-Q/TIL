# [HTML] 좋은 사용자 경험(UX)을 제공하는 Form 만들기

## type 속성 활용하기

- 알맞은 키보드 제공하기(모바일)
- text : 일반적인 한 줄의 텍스트를 입력하기 위한 타입이다.
- number : 숫자를 입력하기 위한 타입이다. 정수와 소수를 모두 입력할 수 있다.
  - 아이폰의 경우 type="number"로 지정해도 쿼티 키보드가 출력된다. 이럴 때는 pattern="\d*"을 이용해 해결할 수 있다.
- tel : 전화번호를 입력하기 위한 타입이다.
- email	: 이메일을 입력하기 위한 타입이다. @와 .com 등의 도메인을 쉽게 입력할 수 있다.
- url	: URL을 입력하기 위한 타입이다.
- date : 날짜를 입력하기 위한 타입이다. 날짜 입력을 위한 UI가 보여진다.

## inputmode 속성 활용하기

- inputmode는 input 태그의 type 값과 무관하게 특정 키보드를 보여준다. 천 단위 , 처리는 Javascript를 이용해 처리하고, 키보드로는 숫자만 표기할 수 있게 된다.

## 양식 자동 완성 기능 활용하기

- autocomplete는 autocomplete 속성값 또는 name 속성값에 특정 값이 들어가 있을 경우, 이전에 저장되어 있는 메타 데이터를 이용해 자동 완성을 돕는 힌트를 제공한다.

|유형|name|autocomplete|
|--|-----|------------|
|이름|name|name, family-name, given-name|
|이메일|email|email|
|전화번호|phone, mobile|tel|
|주소|address, city, region, postal|address-level1, address-level2, postal-code|
|username|username|username|
|비밀번호|password|current-password, new-password|

## 자동 대문자 활성화 방지(모바일)

- 번거로움을 없애기 위해 autocapitalize 속성을 이용할 수 있다. autocapitalize="off"로 지정하면 모바일 기기의 설정에 상관없이 처음 키보드가 활성화되었을 때 소문자를 바로 입력할 수 있다.

---

참조 : [[HTML] 좋은 사용자 경험(UX)을 제공하는 Form 만들기](https://armadillo-dev.github.io/html/ux/makes-good-ux-form-with-html/?fbclid=IwAR3_HWO-NzvJgGYZv_VlMzqFF-5rPhrBeGT1OYGFhlUK2dx-Dqrc38afjfA)
