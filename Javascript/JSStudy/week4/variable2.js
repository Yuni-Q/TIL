
// Study 변수 관련 문제 2
// b는 let이 좋은가 const가 좋은가?
// 답 : 값의 주소를 바꾸지 않기 때문에 const. const는 객체의 내용(프로퍼티의 추가, 삭제, 프로퍼티 값의 변경)은 변경할 수 있다.

b = [1, 2, 3]
// b = [4, 5, 6]
b.push(4);

console.log(b)