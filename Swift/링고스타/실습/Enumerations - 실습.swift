자동차는 저마다 사용하는 연료의 종류가 다릅니다. 자동차를 크게 휘발유를 쓰는 차, 경유를 쓰는 차, 가스를 쓰는 차로 이렇게 3가지로 분류할 수 있습니다.
연료를 다음과 같이 Fuel이라는 enum으로 추상화 했을 때, 경유를 쓰는 자동차 mini01, 휘발유를 쓰는 자동차 mini02를 enum으로 표현해 보세요.

enum Fuel {
    case Gasoline // 휘발유
    case Diesel // 경유
    case LPG // 가스
}

// 빈 칸을 enum을 써서 채워보세요
let mini01Fuel = Fuel.Diesel
let mini02Fuel = Fuel.Gasoline

print("mini01은 연료로 \(mini01Fuel)을 쓰고, mini02는 연료로 \(mini02Fuel)을 씁니다")