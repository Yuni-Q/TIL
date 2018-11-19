그마트에서는 아이템 수량에 따라 계산 카운터를 안내하는 차세대 카트를 도입하려고 합니다. 카트에 담긴 맥주 수량에 따라 
3병 이하는 소량 계산대로 보내고,
4병부터 50병까지는 일반 계산대로 보내고,
51병 부터 100병까지의 구매는 매니저에게 연락하고,
100병 이상은 경찰에 신고하는
switch문을 완성해 주세요.

typealias ShopingItem = (name:String, amount:Int)
let cart = ShopingItem("beer", 1)

switch cart {
case ("beer", 0...3) : //맥주 3병 이하
    print("Guide to small item counter")
case ("beer", 51...100) : //맥주 51병이상 100병 까지
    print("Call manager")
case ("beer", let amount) where amount > 100 : //맥주 100병 초과
    print("Call police")
default: //나머지(맥주 4병 이상 50병 이하)
    print("Make wait in line")
    
}