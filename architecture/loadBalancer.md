
#### 주요 기능
1. NAT(Network Address Translation)
사설 IP 주소를 공인 IP 주소로 바꾸는 데 사용하는 통신망의 주소 변조기입니다.
1. DSR(Dynamic Source Routing protocol)
로드 밸런서 사용 시 서버에서 클라이언트로 되돌아가는 경우 목적지 주소를 스위치의 IP 주소가 아닌 클라이언트의 IP 주소로 전달해서 네트워크 스위치를 거치지 않고 바로 클라이언트를 찾아가는 개념입니다.
1. Tunneling
인터넷상에서 눈에 보이지 않는 통로를 만들어 통신할 수 있게 하는 개념
데이터를 캡슐화해서 연결된 상호 간에만 캡슐화된 패킷을 구별해 캡슐화를 해제할 수 있습니다.

#### 종류
1. L2 :Mac주소를 바탕으로 Load Balancing합니다.
1. L3 : IP주소를 바탕으로 Load Balancing합니다.
1. L4 Transport Layer(IP와 Port) Level에서 Load Balancing을 합니다. ( TCP, UDP )
1. L7 : Application Layer(사용자의 Request) Level에서 Load Balancing을 합니다. ( HTTP, HTTPS, FTP )

#### Server 선택
1. Round Robin : 단순히 Round Robin으로 분산하는 방식입니다.
1. Least Connections 연결 개수가 가장 서버를 선택하는 방식입니다. 트래픽으로 인해 세션이 길어지는 경우 권장하는 방식입니다.
1. Source : 사용자의 IP를 Hashing하여 분배하는 방식입니다. 사용자는 항상 같은 서버로 연결되는 것을 보장합니다.