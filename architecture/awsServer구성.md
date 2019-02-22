
# AWS Server

## VPC
- 로컬망
- 물리적인 큰 망
- 물리적인 LAN에 대응

- 대역 설정 ( ex) 10.0.0.0/16 ) 
    - '/' 뒤에 수는 몇 자리의 ip를 고정 할지를 설정
        - A Class 10.x.x.x
        - B Class 10.0.x.x
        - C Class 10.0.0.x
        - D Class 10.0.0.x/2

- 10, 172, 192는 Private IP로 Public IP로 사용하지 않는다.
- default 제한 사항이 많아서 쓰기 불편하다.

## subnet
- 큰 방안에서 목적별로 분리 시킨 망
- IG와 연결 된 subnet은 Public subnet 그렇지 않은 subnet은 Private subnet
- 서울에는 가용 영역이 2개라서 2개를 만들어 주는 것이 좋다.(각각에 가용 영역마다)
- public subnet에 ELB를 두고 private subnet에 서버를 두고 사용

## route table
- subnet에서 route table이 필수
- IP 기반으로 요청이 어디로 나갈지 정의
- 포트가 없다.

## ACL
- IP 차단 가능
- 블랙리스트, 화이트리스트 모두 사용 가능하나 주로 블랙리스트를 사용한다.
- 숫자가 적은 룰이 우선이고 arrow 되면 그 아래 룰은 수행하지 않는다.
- inbound와 outbound 모두 사용 가능
- 마지막은 DENY

## SG
- 특정 그룹만 사용
- 실제 통신 설정은 SG로 한다.
- 서버라면 inbound만 설정 가능(들어온 요청에 대해선 outbound 허용)
- 서버 자체가 외부와 통신 하려면 outbound 설정을 받는다.
- SG-xxxx와 같은 것으로 표시 되면 서버당 5개를 가질 수 있으며 아마존에 요청에 리미트를 해제할 수 있다.
- 같은 서브넷 내에서도 관여를 한다.
- IP 대신 SG-xxxx로 설정 할 수 있다(ACL은 같은 서브넷은 관여하지 않는다)

## IG
- Internet Gatway

## NAT
- Private subnet은 inbound, outbound가 모두 안 되지만 NAT를 이용해서 outbound 할 수 있다.
- Public subnet을 지정해서 NAT settting
- Public IP를 부여(elastic IP로 설정)
    - elastic IP
        - 고정 public ip(서버를 껏다가 켜도 유지)
        - 계정 당 10개 소유
- NAT도 가용영역마다 하나씩 두고 맞게 짝지어 두자

## lamda
- ramda가 private subnet을 찌를 수 없다.
- VPC 안에 private subnet에 lamda를 띄운다.
- 하지만 외부와 연결이 안되서 NAT 사용
- C Class로 만들면 람다가 생성,삭제가 많이 되서 터질 수도 있다(200개도 적다고 한다...)

### 소켓포트
- 1025~65535(?) 포트만 사용
- 1024까지 서버나 os가 포트를 사용하기 때문
