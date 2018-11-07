

## MVC (Model + View + Controller)
MVC는 Model과 View, 그리고 Controller 세가지 요소로 구성 되어 있습니다.<br>

Model : 프로그램에서 사용되는 실제 데이터 및 데이터 조작 로직을 처리하는 부분<br>
> Model은 프로그램에서 사용되는 실제 데이터이며 불러오거나 업데이트 하는 로직이 추가 되어 있습니다.<br>

View : 사용자에게 제공되어 보여지는 UI 부분<br>
> View는 실제 사용자가 눈으로 보고 있는 화면 입니다.<br>
> 웹이라면 웹페이지, 모바일 어플의 화면이 View에 해당한다고 보시면 됩니다.<br>

Controller : 사용자의 입력을 받고 처리하는 부분<br>
> Controller는 사용자의 입력을 받은 다음 해당 작업을 처리 하는 부분 입니다.<br>

### 정리
Controller로 사용자의 입력이 들어옵니다.<br>
Controller는 Model을 데이터 업데이트 및 불러오고<br>
Model은 해당 데이터를 보여줄 View를 선택해서 화면에 보여주게 됩니다.<br>

#### 단점
MVC는 단점이 있습니다. View와 Model이 서로 의존적이라는 점입니다.<br>
최대한 서로의 의존성을 줄일수 있도록 노력해야 합니다.<br>

## MVP (Model + View + Presenter)
MVC의 View와 Model이 서로의 의존성을 줄일기 위한 노력에 의해 파생되어 나온 프레임워크가 MVP 패턴 입니다.<br>

Model과 View는 MVC와 동일하지만 사용자 입력을 View에서 받습니다.<br>
항상 Presenter을 거쳐서 동작하는 것입니다.<br>
그러므로 View와 Model은 서로를 알필요가 전혀 없습니다. Presenter만 알면 됩니다.<br>
그래서 MVC의 단점인 View와 Model의 의존성이 없어지게 됩니다.<br>

### 정리
View로 사용자의 입력이 들어옵니다.<br>
View는 Presenter에 작업 요청을 합니다.<br>
Presenter에서 필요한 데이터를 Model에 요청 합니다.<br>
Model은 Presenter에 필요한 데이터를 응답 합니다.<br>
Presenter는 View에 데이터를 응답 합니다.<br>
View는 Presenter로부터 받은 데이터로 화면에 보여주게 됩니다.<br>

#### 단점
View와 Presenter가 1:1로 강한 의존성을 가지게 됩니다.<br>

## MVVM (Model + View + ViewModel)
MVVM은 WPF나 SilverLight에서 많이 사용되는 프레임워크 패턴 입니다.<br>

Model과 View는 다른 프레임워크 패턴과 같습니다.<br>
하지만 이번에는 Presenter 대신 ViewModel이 존재 합니다.<br>

ViewModel : View를 표현하기 위해 만들어진 View를 위한 Model<br>

MVVM은 두가지 디자인 패턴을 사용합니다. 바로 Command패턴과 Data Binding 입니다.<br>
이 두가지 패턴으로 인해 View와 ViewModel은 의존성이 완전히 사라지게 됩니다.<br>
MVP와 마찬가지로 View에서 입력이 들어오구요. 입력이 들어오면 Command 패턴을 통해 ViewModel에 명령을 내리게 되고 Data Binding으로 인해 ViewModel의 값이 변화하면 바로 View의 정보가 바뀌어져 버리게 됩니다.<br>

### 정리
View에 입력이 들어오면 Command 패턴으로 ViewModel에 명령을 합니다.<br>
ViewModel은 필요한 데이터를 Model에 요청 합니다.<br>
Model은 ViewModel에 필요한 데이터를 응답 합니다.<br>
ViewModel은 응답 받은 데이터를 가공해서 저장 합니다.<br>
View는 ViewModel과의 Data Binding으로 인해 자동으로 갱신 됩니다.<br>
