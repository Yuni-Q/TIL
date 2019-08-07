# dart

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
