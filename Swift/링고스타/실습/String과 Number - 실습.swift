판교와 파주 사이에 거리는 69500m입니다.
2번째 줄의 distance를 적당한 타입으로 변경해서 description을 다음과 같이 출력되게 완성해보세요.
판교에서 파주는 69.5km 거리입니다.

let distance = String(Double(69.500))
let description = "판교에서 파주는 " + distance + "km 거리입니다."

print(description)