## Function Type의 개념

### 1st class citizen

- 함수는 1등 시민
- 함수는 어디든 갈 수 있는 권리가 있다
- 매개변수
- 리턴타입
- 할당

### 우리가 아는 Type들

- String, Double, Int - 기본 타입들
- Array, Dictionary, Set - 컬렉션 타입들
- UIView, UILabel, UITableView - CocaaTouch 클래스 타입들


- () -> void, (Int,Int) -> Int - 함수 타입들



```swift
func addTwoInts(a:Int, b:Int) -> Int
{ return a + b}
func multiplyTwoInts(a:Int, b:Int) -> Int
{ return a * b}

var mathFunction: (Int,Int) -> Int = addTwoInts
mathFunction(2,3) //5
mathFunction = multiplyTwoInts
mathFunction(2,3) //6
```

<hr>

# Closure

- 1등 시민으로 사용가능한 독립적인 코드조각.
- 자신이 정의된 환경을 캡처해서 저장한 뒤, 닫아버린다


- Objective-C의 Block, Java의 Lambda

### 문법

```swift
{ (params) -> returnType in

	statements

}
```

- param은 이름이 아니라 위치로 참조해서 생략
- returnType은 명확한 경우 생략

<hr>

# 함수 매핑하기

- 배열의 항목에 함수를 적용하기
- [a, b, c,d, e].map{ f(x) } 를 하면 
  - [f(a), f(b), f(c), f(d), f(e)  ]

<hr>

# 조건문을 단순화

- 컬렉션의 항목들 중 조건에 맞는 항목만 찾아내기
- [a, b, c,d, e].filter{ f(x > 100) } 를 하면 
  - 100보다 큰 항목들로 이루어진 배열 리턴

<hr>

# 정렬을 위한 조건

- 컬렉션의 항목들을 조건에 맞게 순서를 바꾸기
- [a, b, c,d, e].sort{ \$0 > \$1 } 를 하면 
  - 큰 항목이 앞으로 오는 정렬이 됩니다.

<hr>

# 하나의 값으로 수렴

- 컬렉션의 항목들을 조건에 따라 하나의 값으로 만드릭
- [a, b, c, d, e].reduce(초기값, combine:+)를 하면
  - 배열의 모든값이 더해진 하나의 값 리턴