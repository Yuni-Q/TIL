
# TCP와 UDP의 차이

## IP. 모든 것의 허리.
“여러 종류의 데이터 전달 방식을 지원할 것 (multiple types of delivery services)” 이라는 목적을 달성하기 위해서 가장 기본이 되는 기능만을 IP 에 포함시키고, 그 위에 TCP 라는 새로운 계층을 얹는 형태가 된 것이다.  
그리고 이를 도식화 하면 TCP/IP의 관계는 다음 그림처럼 모래 시계 모양으로 표시한다.   

즉 어떤 통신 방법이든 IP 를 구현하는 한, IP 위에서 동작하던 응용 프로그램을 지원하는 데 문제가 없으며, 어떤 응용 프로그램이든 IP 로 통신한다는 것을 전제만 하면 IP 를 지원하는 어떤 하드웨어 기술에서도 동작할 수 있다.  

이 덕분에 응용 프로그램과 하드웨어 기술은 독립적으로 발전할 수 있게 되었다. 그리고 각각이 독립적으로 발전할 수 있다는 것은 둘이 얽혀서 같이 바뀌어야 하는 것보다 훨씬 더 빠른 기술적 진보를 이루게 해준다.  

이름부터 Internet Protocol (IP) 이라고 해서 “인터넷은 이것만 구현하면 된다” 는 의미를 내포한다.  

그리고 IP 가 이렇게 네트워크들을 연동하는 프로토콜이기 때문에 IP를 “네트워크 수준 프로토콜” 이라고도 한다.  

열심히 통신해보려고는 하는데 반드시 된다는 보장은 못 한다는 의미로, IP를 설명하는 중요한 특성으로 best effort 라는 표현을 쓴다.  

## TCP, 불안정성 위에 구축한 안정성
TCP는 Transmission Control Protocol이라는 글자의 약자를 딴 이름인데, 전송 제어 프로토콜 정도로 번역될 것 같다.   

### 어떻게 불안정한 것 위에 안정성이라는 것을 보장해주는 것이 가능할까? 
그 비결은 ACK 와 타임아웃, 그리고 재전송이다.  

ACK 는 받은 걸 받았다고 알려주는 것을 의미한다. Acknowledgment 라는 영어 단어의 앞 세 글자를 딴 것인데 영어 단어에서 의미하듯, “잘 받았습니다.”라는 뜻이다.   

ACK 이 일정 시간 동안 오지 않으면 패킷을 보내는 쪽에서는 특단의 조치를 취한다. 바로 다시 보내기이다.  

TCP는 ACK 이라는 특별한 패킷을 이용해서 받는 쪽에 패킷이 잘 도착했다는 것을 알려준다.  
그런데 보내는 데이터가 유실되든, ACK 이 유실되든 할 때에는 이 ACK 이 전달될 수 없고, 보내는 쪽에서는 어떤 일이 발생했는지 알지도 못하게 된다.  
그래서 보내는 쪽은 일정 시간이 지나는 동안 ACK 이 도착하지 않으면 바로 재전송한다.  

## TCP ACK 의 두 가지 방법: cumulative ACK, selective ACK
TCP의 기본 동작은 뭔가 유실되면 그 뒤에 아무리 정상적으로 와도 다 버리고 유실된 것부터 재전송하는 것이다. 이건 상당히 비효율적으로 보인다.  

전자는 ACK 의 의미가 “앞의 것은 다 받았고 이걸 못 받았어. 여기부터 다 다시 보내줘” 라는 뜻이 되는 것이고, 후자는 ACK 의 의미가 “이것은 받았어. 앞에거 뒤에거를 받았는지는 따로 알려줄께.” 가 된다. 그래서 전자를 “앞의 것은 다 받았다” 라는 뜻으로 누적적이라고 해서 cumulative ACK 이라고 하고 후자를 받았는지 여부를 선택적으로 알려준다고 해서 selective ACK 이라고 한다.  

Cumulative ACK 은 한 번에 주르륵 여러 개 패킷을 보냈다고 하더라도 문제가 되는 ACK 하나만 기억하면 된다.  
반면 selective ACK 은 여러개 패킷에 대해서 각각 ACK 을 받았는지를 모두 기억해야 된다.  
다시 말해 cumulative ACK 은 기억해야 되는 것도 적고, 구현도 간단한 반면 selective ACK 은 기억해야되는 것도 많고 구현도 복잡해지는 것을 의미한다.  
이는 효율성과 복잡성에 대한 전형적인 트레이드오프 예라고 할 수 있겠다.  

TCP 는 초기에는 순서대로 앞의 것을 모두 받게끔 디자인되었다.  
즉, 앞의 것이 유실되고 뒤에 것이 들어오더라도 뒤에것을 다 버리고 나중에 재전송받는다.  
이 경우 1% 패킷 손실률이라고 해도, 어느 패킷이 유실되는지에 따라 전체 전송 효율에 큰 차이가 생긴다.  
100개를 한 번에 보낼 수 있을 때, 맨 처음게 유실되면 정상적으로 도달한 99개를 모두 버리고 처음부터 다시 보내지만, 맨 마지막게 유실되면 맨 마지막 100번째 패킷만 다시 보내게 된다.  
전자가 훨씬 느리게 느껴지며, 패킷 유실이 많은 무선 환경에서 문제는 더욱 심각해진다.  
그 때문에 TCP에 누락된 것만 다시 보낼 수 있는 기능이 추가되었다.  

## TCP 교통 체증과 서비스 붕괴 사건
패킷이 유실되면 무식하게 바로 쏴대지 말고, 이게 중간에 장비가 과부하 걸린 것일 수도 있으니 양을 조절하자고 제안한다.  
양을 얼마로 제한하느냐면 일단 1개만 보내는 걸로…. 앞에서 여러 패킷을 주르륵 보낼 수 있다고 한 것을 기억하는가?  
이전까지는 유실되면 유실된 것부터 그 주르륵의 남은 개수만큼을 보냈었다.  
이걸 1개로 제한하는 획기적인 아이디어였던 것이다.  
그리고 그 방법은 기가 막히게 적중했다.  
(물론 1개 보낸 패킷이 성공적으로 도달하면 빠른 속도로 동시에 보내는 패킷 개수를 회복해 나간다.)  

이처럼 중간의 장비가 과부하 걸려서 패킷들을 놓치는 것을 길에 차들이 몰려서 꽉 막히는 것에 빗대서 체증 (congestion) 이라고 한다.  
(장비 체증이 아니라 네트워크 체증 (network congestion) 이라고 부른다.)  
그리고 라우터 장비 등은 교통 교차로에 비유된다.  
이 사건 이후로 TCP에는 이런 교통 체증을 벗어나기 위한 반 제이콥슨의 알고리즘이 도입되었다.  
TCP Tahoe의 등장이다.  
Tahoe 는 Android 의 버전들을 마시멜로우, 킷캣 이런 이름을 붙여서 하는 것처럼 TCP 버전을 구분하는 이름이다.  

## 단순한 껍데기인 UDP
사실 UDP 는 하는 일이 없는 더미라고 생각하면 된다.  
“물은 셀프입니다" 도 아닌데, “TCP 를 안 쓸 거면 그냥 더 낮은 수준의 IP 를 그대로 쓰세요.” 라고 하기에 좀 뭣하니까 TCP 랑 구색을 맞추기 위해서 껍데기로 UDP 가 만들어졌다.  
UDP 가 단순 껍데기 역할이기 때문에 그 특성은 IP 자체의 특성과 마찬가지다.  
불안 정적인 best effort 에, 그냥 바로 쏘고 만다.  

IP 는 최적의 경로를 따라 가는 것이 아니다.  
그때문에 IP의 꼭두각시인 UDP 역시 최적의 경로로 가지는 않는다.  
보통 게임을 만들 때 “속도 때문에 UDP 를 쓴다.” 라고 하는데 이는 UDP 가 최적의 경로를 따라 간다는 뜻이 아니라 TCP 에 비해서 하는 일도 없고, 주변 신경도 안쓰기 때문에 상대적으로 더 빠르다는 뜻이다.  
TCP 와 달리 안정성 확보를 위해서 해야되는 일도 없고, 네트워크 체증 생각도 안하고 마구잡이로 보낼 수 있다.  

## UDP vs. TCP
TCP 는 네트워크 체증에 한 번 크게 데였기 때문에 조심조심하는데, UDP 는 이걸 신경 쓰지 않고 마구잡이로 보낸다고 했다.  
 그렇다면 이 둘이 동시에 존재하면 어떻게 될까?  
 아주 재미있게도, TCP 는 네트워크 체증이 생긴 줄 알고 전송 속도를 줄이고, 그 줄인 속도를 아싸 조쿠나 하면서 UDP 가 잡아먹는다.  
 이는 TCP 가 100 개 있고 UDP 가 1개 있어도 마찬가지가 된다.  
 TCP 는 모두 빌빌대게 되는데 UDP 혼자 살아남는다.  
 그래서 UDP 는 통신 프로토콜에서 배쓰 같은 존재라고 생각할 수 있다.  
 이 때문에 UDP 도 TCP 처럼 네트워크 체증을 고려하게 하자는 제안도 있었고 (TCP-friendly UDP), 통신사에서는 UDP 를 좋아하지 않는다는 말도 있다.  

게임프로토콜을 만들 때 한국은 TCP 우선 고려, 미국은 UDP 우선 고려 한다.  

TCP 의 편리함과 UDP 의 속도를 결합해보자고 시도되는 것이 Reliable UDP 라는 것이다.  
이것에 대한 의문은 남는다.  
TCP 와 UDP 가 각각 안정성과 속도라는 상충되는 목표를 가지고 만들어졌는데, 그 둘의 단점을 제외하고 장점만을 취한다는 것은 불가능하기 때문이다.  
예를 들어, 만일 UDP 를 이용해 TCP 수준의 안정성을 구현한다면 결국 그건 TCP 내부에서 처리하는 전송 알고리즘을 다 구현하는 것을 의미하고 결국 TCP 만큼 느려진다.  
그렇다면 결국 TCP 가 제공하는 기능 중 몇 가지를 제외하고 대신 속도를 얻는 것이 Reliable UDP 인데, 이건 응용 프로그램마다 어떤 걸 희생할 수 있는지에 따라 달라질 수 밖에 없기 때문에 어떤 경우든 요구사항을 가장 잘 만족하는 Reliable UDP 라는 것은 존재할 수 없기 때문이다.  

#### UDP란?
UDP의 전송 방식은 너무 단순해서 서비스의 신뢰성이 낮고, 데이터그램 도착 순서가 바뀌거나, 중복되거나, 심지어는 통보 없이 누락시키기도 한다. UDP는 일반적으로 오류의 검사와 수정이 필요 없는 애플리케이션에서 수행할 것으로 가정한다.  

UDP를 사용하는 네트워크 애플리케이션에는 도메인 이름 서비스 (DNS), IPTV, 음성 인터넷 프로토콜 (VoIP), TFTP, IP 터널, 그리고 많은 온라인 게임 등이 있다.  

#### UDP와 TCP 비교
TCP는 데이터를 주고 받을 양단 간에 먼저 연결을 설정하고 설정된 연결을 통해 양방향으로 데이터를 전송하지만, UDP는 연결을 설정하지 않고 수신자가 데이터를 받을 준비를 확인하는 단계를 거치지 않고 단방향으로 정보를 전송한다.  

신뢰성 - TCP는 메시지 수신을 확인하지만 UDP는 수신자가 메시지를 수신했는지 확인할 수 없다.  
순서 정렬 - TCP에서는 메시지가 보내진 순서를 보장하기 위해 재조립하지만 UDP는 메시지 도착 순서를 예측할 수 없다.  
부하 - TCP보다 속도가 일반적으로 빠르고 오버헤드가 적다.  






































---
참조 : [[기고칼럼] TCP, 그리고 UDP 쉽게 알아보는 두 개념과 차이점](http://www.inven.co.kr/webzine/news/?news=165870)