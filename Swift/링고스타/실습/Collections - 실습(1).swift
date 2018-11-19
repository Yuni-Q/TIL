영웅들로 구성된 파티를 만들어, 상대방의 파티와 싸우는 게임을 만드려고 합니다. 기존 파티 heroes에 새로운 영웅 newHero를 파티의 맨 앞에 영입하는 완성하세요.
heroes에 새로운 항목을 추가할 수 있도록 만든 뒤, newHero를 맨 앞에 추가하면 됩니다.

newHero를 맨 앞에 추가하려면, insert를 참고하세요.

var heroes = ["프린스", "마녀", "해골 군대", "고블린 통"]
let newHero = "흑룡"

//heroes에 newHero를 추가해보세요
heroes.insert(newHero, atIndex : 0)

print(heroes)