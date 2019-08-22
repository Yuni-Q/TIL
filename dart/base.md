# dart

- 유지보수를 쉽게 할 수 있다.
- 배우기가 쉽다.
- 생산력을 증가시킬 수 있다(Productivity)
- 유연하고 활용성이 용이하다.
- Reactive Programming

- 모든게 다 Object(Object Oriented Language)
  - Variable에 넣을 수 있는 것은 다 object이다. function, number, null 모두 object
- List\<int>, List\<dynamic> 등을 지원
  - int, double, float, dynamic etc.
- Typed 언어지만, 자유를 준다.
  - Type을 추측
  - var
  - dynamic
- no more 'public', 'private', protected'
  - function() - pubilc
  - \_function() - private
- identifier는 \_ 아니면 letter로 시작
  - \_variable 123 (o)
  - function() (o)
  - 123variable (x)

```dart
var a = 1;
int b = 2;
double c = 3;
var d = "a";
String e = "b";
List<String> f = ['c','d'];
List<int> g = [1,2];
```

- var로 선언해도 되고 직접 타입을 명시해도 된다.
- 세미콜론(;)은 반드시 필요하다.

```dart
bool _isJoin = true;
```

- \_를 이용해 private로 변수를 선언 할 수 있다.

```dart
String a = 'a';
String b = 'b ${a}';
```

- \$를 사용해서 스트링 안에서 변수를 사용할 수 있다.

- arrow function이나 for...in문 for, while 모두 JavaScript와 같이 사용할 수 있다.

## dart 설치

```bash
brew tap dart-lang/dart
brew install dart
pub global activate stagehand
stagehand console-full
pub get
dart 파일이름.dart
```

- dart는 main function을 찾는다.
