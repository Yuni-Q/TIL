아래는 애플와치와 쌍을 이룬 아이폰을 찾는 가상의 코드입니다.(실제 애플와치 앱에서 이런 코드를 사용하는 것은 아닙니다)
optional binding을 써서 빈 칸에 적당한 코드를 작성해주세요.

struct WatchDevice {
    var pairediPhone:String? //애플와치와 쌍을 이루는 아이폰의 이름.
    var appInstalled = false //어플리케이션의 설치 유무

    enum WatchSize {
        case m42, m38
    }
}

var appleWatch:WatchDevice? = nil
appleWatch = WatchDevice(pairediPhone: "링고스타의 아이폰", appInstalled: true)

// ①appleWatch에 대해 optional binding으로 watch라는 새로운 변수를 생성해주세요.
if let watch = appleWatch {
    // ②watch와 쌍을 이루는 아이폰의 이름에 대해 
    // optional binding으로 phoneName이라는 새로운 변수를 생성해 주세요.
    if let phoneName = watch.pairediPhone {
        print ("AppleWatch가 \(phoneName)과 쌍을 이룹니다.")
    }
}