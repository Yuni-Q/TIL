// 단속카메라
// 문제 설명
// 고속도로를 이동하는 모든 차량이 고속도로를 이용하면서 단속용 카메라를 한 번은 만나도록 카메라를 설치하려고 합니다.

// 고속도로를 이동하는 차량의 경로 routes가 매개변수로 주어질 때, 모든 차량이 한 번은 단속용 카메라를 만나도록 하려면 최소 몇 대의 카메라를 설치해야 하는지를 return 하도록 solution 함수를 완성하세요.

// 제한사항

// 차량의 대수는 1대 이상 10,000대 이하입니다.
// routes에는 차량의 이동 경로가 포함되어 있으며 routes[i][0]에는 i번째 차량이 고속도로에 진입한 지점, routes[i][1]에는 i번째 차량이 고속도로에서 나간 지점이 적혀 있습니다.
// 차량의 진입/진출 지점에 카메라가 설치되어 있어도 카메라를 만난것으로 간주합니다.
// 차량의 진입 지점, 진출 지점은 -30,000 이상 30,000 이하입니다.
// 입출력 예

// routes	return
// [[-20,15], [-14,-5], [-18,-13], [-5,-3]]	2
// 입출력 예 설명

// -5 지점에 카메라를 설치하면 두 번째, 네 번째 차량이 카메라를 만납니다.

// -15 지점에 카메라를 설치하면 첫 번째, 세 번째 차량이 카메라를 만납니다.

// 1차 시도 - 시간 초과

function solution(routes) {
  var answer = 0;
  let lastRoutes = routes.sort(
      function(a,b) {
          return a[0]-b[0]
      }
  ).pop()
  answer++;
  let filterRoutes = routes.filter(num => num[1] < lastRoutes[0]);
  while(filterRoutes.length > 0) {
      lastRoutes = filterRoutes.sort(
          function(a,b) {
              return a[0]-b[0]
          }
      ).pop()
      answer++;
      filterRoutes = filterRoutes.filter(num => num[1] < lastRoutes[0]);
  }
  console.log(routes)
  console.log(filterRoutes)
  
  return answer;
}

// 정답 

function solution(routes) {
  routes.sort((a,b) => {return a[0] - b[0]})
  var arr = []
  var now = routes[0]
  var type = 0
  for(var i=0;i<routes.length-1;i++){
      var nxt = routes[i+1]
      if(now[1] >= nxt[0]){
          now = [nxt[0],Math.min(now[1],nxt[1])]
          if(type === 0) arr.push(now)
          type = 1
      } else {
          if(type === 0) arr.push(now)
          now = nxt
          type = 0
      }
  }
  if(type === 0) arr.push(now)
  return arr.length
}
