
// 환경 변수를 이용해서 변수의 갯수가 다른 string 값을 채워 나가는 방법 
// ex) ko: push: message: "%{user_name} 님이 %{time}에 접속 하셨습니다."

const a = {
  b: {
    c: 5,
    d: 6,
  }
}

console.log(Object.keys(a)[0]);

console.log(Object.keys(a[Object.keys(a)[0]]));

Object.keys(a[Object.keys(a)[0]]).forEach(key => {
  console.log(key, a[Object.keys(a)[0]][key]);
})
