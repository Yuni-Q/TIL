//: Playground - noun: a place where people can play

import UIKit

//var str = "Hello, playground"

func addVAT(source:Double) -> Double {
    return source * 1.1
}

func couponDiscount(source:Double) -> Double {
    return source * 0.9
}

var additional:(Double) -> Double

let transaction032701 = 120.7
additional = addVAT

let price032701 = additional(transaction032701)

func finalPrice(source:Double, additional:(Double) -> Double) -> Double {
    let price = additional(source)
    return price
}

let price032702 = finalPrice(source: 350.0, additional: couponDiscount)

//: Session 5-3 Clousure
let addVATClosure = { (source:Double) -> Double in
    return source * 1.1
}
// 생략
let addVATClosure2 = { source in
    return source * 1.1
}
// 더 생략
let addVATClosure3 = { source in
    source * 1.1
}
// 위치
let addVATClosure4 = { $0 * 1.1 }

let couponDiscountClosure = { (source:Double) -> Double in
    return source * 0.9
}
//생략
let couponDiscountClosure2 = { source in
    return source * 0.9
}
let couponDiscountClosure3 = { source in
    source * 0.9
}
let couponDiscountClosure4 = { $0 * 0.9 }
var price032703 = addVATClosure(157.6)
price032703 = addVATClosure2(157.6)
price032703 = addVATClosure3(157.6)
price032703 = addVATClosure4(157.6)
price032703 = couponDiscountClosure(157.6)
price032703 = couponDiscountClosure2(157.6)
price032703 = couponDiscountClosure3(157.6)
price032703 = couponDiscountClosure4(157.6)

func makeAdder (x:Int) -> (Int) -> Int {
    func adder(a:Int) -> Int {
        return x + a
    }
    return adder
}
func makeAdder2 (x:Int) -> (Int) -> Int {
    let adder:(Int) -> Int = {
        return $0 + x
    }
    return adder
}
func makeAdder3 (x:Int) -> (Int) -> Int {
    return { $0 + x }
}

var add5 = makeAdder(x:5)
var add10 = makeAdder(x:10)

print(add5(2))
print(add10(2))

add5 = makeAdder2(x:5)
add10 = makeAdder2(x:10)

print(add5(2))
print(add10(2))

add5 = makeAdder3(x:5)
add10 = makeAdder3(x:10)

print(add5(2))
print(add10(2))

//print(makeAdder3(x:5)(2))

//: Sesstion 5-6 map
let transactions = [560.0, 321.5, 190.0, 672.8, 1190.0, 450.0]

//func addVAT(source:Double) -> Double {
//    return source * 1.1
//}

var vatPrices:[Double] = []

for transaction in transactions {
    vatPrices += [addVAT(source:transaction)]
}

let vatMapPrices = transactions.map({
    transaction -> Double in
    return transaction * 1.1
})

let vatMapPrice2 = transactions.map( { $0 * 1.1 })

//: Session 5-7 filter

var bigTransactions:[Double] = []

for price in vatPrices {
    if price >= 500 {
    bigTransactions += [price]
    }
}

let bigFilterTansactions = vatPrices.filter { $0 >= 500 }

var meetingRooms:[String:Int] = ["Banksy":4, "Rivera":8, "Kahlo":8, "Picasso":10, "Cezanne":20, "Matisse":30 ]

let members = 9

// $0.0은 키 $0.1은 값
let available = meetingRooms.filter{ $0.1 > members }

print("\(available)")

//: Session 5-8 sort

func ascendantSort (sort1:Double, sort2:Double) -> Bool {
    return sort1 > sort2
}

let sortedPrices = vatPrices.sorted(by:ascendantSort)
let sortedPrices2 = vatPrices.sorted(by:{ sort1, sort2 in
    return sort1 > sort2
})
let sortedPrices3 = vatPrices.sorted(by: { $0 > $1 })
let sortedPrices4 = vatPrices.sorted(by: >)

let sortedMeetingRooms = meetingRooms.sorted(by: { $0.1 > $1.1 })

print("\(sortedMeetingRooms)")

//: Session 5-9 reduce

func priceSum (base:Double, adder:Double) -> Double {
    return base + adder
}
var sum:Double = 0.0
for price in vatPrices {
    sum = priceSum(base: sum, adder: price)
}
print ("\(sum)")

// 강의에서는 combine을 쓰는데 현재는 쓸 수 없다고 한다...











