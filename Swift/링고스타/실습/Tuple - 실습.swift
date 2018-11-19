//트라이애슬론은 수영, 사이클, 달리기가 합쳐진 운동으로, 우리에게 철인 3종 경기라는 이름으로 잘 알려져 있습니다. 트라이애슬론에는 단거리 경주인 sprint와 장거리 경기인 ironMan 경기가 있습니다.
//
//ironMan경기의 사이클 거리가 sprint경기의 사이클 거리의 몇배인지를 times에 저장하고 싶습니다. 코드 5번째 줄의 _____를 수정해서 times에 값을 저장하세요.

typealias Triathlon = (swim:Int, cycle:Int, running:Int)
let sprint = Triathlon(750, 20000, 5000)
let ironMan = Triathlon(3800, 180000, 42200)

let times = (ironMan.cycle) / (sprint.cycle)



// 아래는 결과 테스트를 위한 코드입니다. 수정하지 마세요.
print(times)
