두 대의 레이싱 카 mini01, mmini02가 서로 경주를 합니다.
두 차는 각각 별도의 경로로 운행을 하며, 서로 다른 거리를 달리는데요.

아래 코드를 수정해서 mini01과 mini02가 달린 각각의 거리를 정확히 계산해보세요. 예상되는 출력값은

mini 01 run 68.5
mini 02 run 21.6
입니다.

class Car {
    var mileage:Double = 0
}

let mini01 = Car()
mini01.mileage += 51.2


let mini02 = Car()
mini02.mileage += 21.6

mini01.mileage += 17.3


print("mini 01 run \(mini01.mileage)\nmini 02 run \(mini02.mileage)")