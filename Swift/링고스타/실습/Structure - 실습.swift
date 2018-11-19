Car struct는 자동차의 모델명과 총 주행 거리(km단위)를 저장하는 구조체입니다.
모델명은 트라이카, 주행거리 29.9km인 Car struct의 인스턴스 tryCar를 만들어 보세요.

struct Car {
    let name:String
    var distance:Double
}

// tryCar의 모델명은 "트라이카"이고, 총 주행 거리는 29.9km입니다.
var tryCar = Car(name : "트라이카", distance: 29.9)

print("tryCar의 모델 명은 \(tryCar.name)이고, 총 주행 거리는 \(tryCar.distance)입니다.")