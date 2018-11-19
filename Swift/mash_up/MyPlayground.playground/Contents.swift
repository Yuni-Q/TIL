//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

//10보다 작은 자연수 중에서 3 또는 5의 배수는 3, 5, 6, 9 이고, 이것을 모두 더하면 23입니다.

//1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면 얼마일까요?

var sum:Int = 0

for i in 0..<1000 {
//    if i % 3 == 0 && i % 5 == 0 {
//        sum += i
//    }
//    else if i % 3 == 0 {
//        sum += i
//    }
//    else if i % 5 == 0 {
//        sum += i
//    }
    if i % 3 == 0 || i % 5 == 0 {
                sum += i
    }
    
}

print("\(sum)")

