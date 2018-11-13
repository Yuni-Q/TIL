
하나의 함수가 하나의 기능만을 수행하고 있는가?<br>
코딩 스타일가이드를 준수하고 있는가?<br>
각 함수의 정보는 코드를 설명하기에 충분한가?<br>
주석은 적절하게 기술돼 있는가?<br>
코드는 잘 구조화되어 있는가? (가독성과 기능적 측면)<br>
헤더, 함수 정보를 도구로 추출해서 자동으로 문서화할 수 있는 구조인가?<br>
함수와 변수의 이름은 일관되고 상세하게 기술되어 있는가?<br>
숫자를 직접 서술하지 않고 상수를 사용하고 있는가?<br>
주석처리 된 코드는 삭제되었는가?<br>
설명을 보거나 작성자에게 물어봐야만 이해할 수 있는 코드가 존재하는가?<br>
함수의 길이는 적절한가? (20줄 이내, 한 라인 당 150문자를 넘지 않도록 한다.)<br>
코드의 재사용이 가능한가?<br>
전역변수를 최소화했는가?<br>
변수의 범위는 적절하게 선언되었는가?<br>
클래스와 함수가 관련된 기능끼리 그룹으로 묶여있는가?<br>
중복된 함수나 클래스 혹은 코드가 보이지 않는가?<br>
데이터에 맞게 타입이 구체적으로 선언되었는가?<br>
if/else 구문에 2단계 이상 중첩이 있는가? 중첩되었다면 함수로 더 구분했는가?<br>
switch/case문이 중첩되었는가? 이를 더 구분할 수 없는가?<br>
리소스에 lock이 있다면 unlock은 이루어졌는가?<br>
스택변수는 반환하고 있는가?<br>
입력 파라미터의 유효범위는 체크하고 있는가?<br>
오류코드를 반환하는 함수보다 예외(exception)을 적극적으로 활용하고 있는가?<br>
try/catch 에러 핸들링 사용방법은 적절하게 구현되었는가?<br>
메서드에서 null을 전달하거나 반환하지 않고 있는 않는가? <br>
switch문에 default가 존재하며, 예외처리하고 있는가?<br>
배열을 사용할 때, index 범위를 체크하는가?<br>
포인트 사용 시에 유효한 범위를 체크하는가?<br>
가비지 컬렉션(garbage collection)은 제대로 수행되고 있는가?<br>
에러 조건이 체크되고 에러 메시지와 에러 코드가 의미를 잘 전달하는가?<br>