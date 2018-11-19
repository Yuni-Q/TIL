enum의 내부에 enum이 재귀적으로 호출되는 경우, indirect enum와 같이 indirect 키워드를 앞에 선언해야 합니다.

앞서 Enumerations - 실습에서 보았던 Fuel에 전기 연료를 추가했습니다.
연료를 다음과 같이 Fuel이라는 enum으로 추상화 했을 때, 디젤 연료를 사용하는 자동차 mini01과 가솔린 연료를 사용하는 자동차 mini02, 전기만을 사용하는 자동차 sedan01을 enum으로 표현해보세요

indirect enum Fuel {
    case Gasoline
    case Diesel
    case LPG
    case Electic(hybrid:Fuel?)
}

let mini01Fuel = Fuel.Diesel
let mini02Fuel = Fuel.Gasoline
let sedan01Fuel = Fuel.Electic(hybrid:Fuel)

print("mini01은 연료로 \(mini01Fuel)을 씁니다.")
print("mini02는 연료로 \(mini02Fuel)을 씁니다.")
print("sedan01은 연료로 \(sedan01Fuel)을 씁니다.")