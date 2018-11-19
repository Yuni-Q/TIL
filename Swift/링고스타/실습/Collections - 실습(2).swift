상대방의 영웅 파티가 나타났습니다. 상대방과 겨룰 때에는 서로 겹치는 영웅들끼리만 대전을 할 수 있습니다.
내가 가진 영웅 heros과 상대의 영웅 oppHeros끼리 겹치는 영웅으로 이루어진 Set인 intersectHeros를 구하세요.

Swift 최신 버전에서 intersect가 intersection으로 이름이 변경되었습니다. Tryhelloworld 실습에서는 intersect를 쓰시되, Playground등 Swift3 환경에서는 intersection을 써주세요.

let heros :Set = ["프린스", "마녀", "해골 군대", "고블린 통"]
let oppHeros :Set = ["자이언트 해골", "고블린 통", "대형석궁", "프린스"]

// 상대와 겹치는 영웅들로 이뤄진 set을 완성하세요
let intersectHeros = heros.intersect(oppHeros)

print(intersectHeros)