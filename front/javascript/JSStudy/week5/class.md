
# Class

클래스는 개발을 하는데 있어서 자료를 담는 설계도와 같다.  

함수를 정의하는 것과 크게 다르지 않다.  

let과 const와 같은 호이스팅이 된다(선언만 되고 초기화가 되지 않아 TDZ에 빠진다)  

인스턴스 생성 : 설계도로 찍어 낸다  

중간에 default 값을 넣으려면 undefiend로 하면 된다.  

extends로 상속 받을 수 있다.  

프로토타입 : 링크랑 오브젝트  

prototype = 자기 자신  

\__proto__ = 상위 오브젝트  

```javascript
class Person {
    constructor(name) {
        this.name = name
        this.sayHello = function() {
            console.log(`${this.name}, Hello!`)
        }
    }
}

class Person {
    constructor(name) {
        this.name = name
    }

	sayHello() {
        console.log(`${this.name}, Hello!`)
    }
}
```
constructor 안과 밖의 함수  
안은 프로퍼티로 가짐  
밖 함수 프로퍼티를 가지지 않음  
person.prototype에 담겨있다.  
하지만 같은 결과를 출력함  