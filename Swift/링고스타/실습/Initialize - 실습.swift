앞선 Class 실습의 class Car에 차의 좌석 수, 연료 타입 속성을 추가했습니다.
새로 추가된 속성들은 모두 변하지 않는 속성인데요. 때문에 let으로 정의해 초기화 시 함께 값을 입력해야 합니다.
적절한 초기화 함수를 만들어서 자동차 mini01과 mini02 인스턴스를 생성해보세요.

enum Fuel {
    case Gasoline
    case Diesel
    case LPG
}

class Car {
    let seats:Int
    let fuel:Fuel
    var mileage:Double = 0

    // 19~20번째 코드를 수용하는 인자를 선언해보세요.
    init(seats:Int, fuel:Fuel){
      self.seats = seats
      self.fuel = fuel
        //받은 인자들을 클래스 속성에 적절히 대입해보세요

    }
}

let mini01 = Car(seats: 5, fuel: .Diesel)
let mini02 = Car(seats: 5, fuel: .Gasoline)