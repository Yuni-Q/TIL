//Driving struct에 car가 운행을 마칠 때 마다 car에 로그를 남기는 기능을 추가하려고 합니다.
//Driving 인스턴스를 매개변수로 받아 drivingLog 배열에 추가하고, mileage에 운행거리를 더하는 addLog함수를 Car 클래스에 더해보세요.
//
//addLog 함수에서 Driving 인스턴스를 매개변수로 받은 후
//인스턴스를 drivingLog에 추가하고
//mileage에 운행거리를 더하면 됩니다.

class Car {
    var drivingLog:[Driving] = []
    var mileage:Int = 0

    // 매개변수로 Driving 인스턴스를 받으세요
    func addLog(drive:Driving) { 
        // 인자를 drivingLog 배열에 추가하세요
				drivingLog.append(drive)
        //  mileage에 운행거리를 더하세요
				mileage += drive.distance
    }
}

struct Driving {
    let car:Car
    let distance:Int //운행 거리

    func arrived() {
        car.addLog(self)
    }
}

let truck = Car()
let deliver = Driving(car: truck, distance:30)
deliver.arrived()

print(truck.drivingLog)
print(truck.mileage)
