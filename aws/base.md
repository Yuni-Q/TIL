
# AWS

## 리전
AWS의 모든 서비스가 위치하고 있는 물리적인 장소입니다.<br>
2018년 11월 기준 19개가 있습니다.<br>
리전마다 사용 할 수 있는 서비스가 다릅니다.<br>

## 가용 영역
데이터 센터 입니다.<br>
서로 멀리 떨어져 있습니다.<br>
서울은 2개가 존재합니다.<br>
하나가 손상을 입어도 사용이 가능하도록 구축 합니다.<br>

## 엣지 로케이션
AWS의 CDN 서비스인 CloudFront를 위한 캐시 서버 입니다.<br>
28개국 61개 도시에 134개의 엣지 로케이션이 분포 되어 있습니다.<br>

## EC2 (Elastic Compute Cloud)
가상 서버를 제공해주는 서비스<br>
생성한 가상 서버를 인스턴스라고 합니다.<br>

### 종류
온디맨드
> 사용한 시간 당 컴퓨팅 파워에 대한 비용을 지불 합니다.<br>
> 장기 약정이나 선결제 금액은 필요 없습니다.<br>

스팟인스턴스
> 경매 방식 - 내가 적어낸 금액보다 높게 쓴 사람이 나타나면 내 서버는 중지되고 그 사람에게 제공 됩니다.<br>

예약인스턴스
> 연 단위로 계약하고 선결제 금액이 있습니다.<br>

전용호스팅
> 전용 물리적 EC2 서버 입니다.<br>

[참조](https://aws.amazon.com/ko/ec2/pricing/)

### EC2 요금
Linux 기반 인스턴스는 초 당 요금 부과<br>
설치되어 있는 OS에 따라 요금이 다름<br>
리전 마다 요금이 다름<br>
인스턴스에서 인터넷으로 송신하는 데이터에도 요금 부과<br>
[참조](https://aws.amazon.com/ko/ec2/pricing/on-demand/)<br>


### AMI (Amazon Machine Image)
비어 있는 인스턴스에 직접 OS를 설치할 수는 없습니다.<br>
따라서 미리 OS가 설치 되어 있는 AMI를 통해 인스턴스 생성 합니다.<br>
Amazon에서 무료로 제공하는 AMI도 있고 Marketplace에서 구입할 수도 있습니다.<br>
> 다양한 프로그램이 미리 설치 되어 있거나 관련 설정이 완료 되어 있습니다.<br>
> [참조](https://aws.amazon.com/marketplace)<br>
자기가 직접 AMI를 만들고 Marketplace에 팔 수 있습니다.<br>

### EC2 인스턴스 유형
범용 : 평균적인 사양<br>
컴퓨팅 최적화 : 메모리 대비 vCPU 비율이 높습니다.<br>
가속화된 컴퓨팅 : NVIDIA GPU가 장착되어 있습니다.<br>
메모리 최적화 : 메모리 용량이 훨씬 큽니다.<br>
스토리지 최적화 : 스토리지 용량이 훨씬 크거나 초고속 I/O를 제공합니다.<br>
[참조](https://aws.amazon.com/ko/ec2/instance-types/)

#### vCPU, ECU
vCPU : Intel Xeon CPU 코어의 하이퍼 스레드<br>
> 예) m5.xlarge : vCPU 4개 (2개의 CPU 코어와 코어당 2개의 스레드)<br>
> vCPU가 같다고 성능이 같은 것은 아닙니다.<br>

ECU (EC2 Computing Unit)<br>
> 컴퓨팅 성능을 정량화 하여 나타내는 단위<br>
> ECU 1개 : 1.0~1.2GHz 2007 Opteron 또는 2007 Xeon 프로세서와 동일한 CPU 성능<br>


### CPU Credit (T2, T3 한정)
데이터가 이월되면서 데이터를 다 써도 낮은 속도로 데이터를 무제한으로 쓸 수 있는 휴대폰 요금제 같은 느낌<br>
매 시간마다 일정 개수의 크레딧이 주어짐.<br>
기준 성능보다 더 적은 CPU 리소스를 사용하는 경우 사용하지 않은 크레딧은 누적<br>
기준 성능 이상으로 CPU를 사용할 경우 축적된 크레딧을 소모<br>
크레딧 1개 : 1분 동안 100%의 사용률로 실행되는 vCPU 1개<br>
[참조](https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/t2-credits-baseline-concepts.html)

### EBS (Elastic Block Store)EC2 인스턴스에 장착하여 사용할 수 있는 가상 저장 장치
SSD, HDD를 가상화 한 것<br>
> OS에서는 일반적인 SSD, HDD 처럼 인식함<br>
원하는 크기로 만들 수 있음 (GB 단위로 생성 가능)<br>
원하는 성능으로 만들 수 있음 (IOPS)<br>

### 보안 그룹 (Security Group)
방화벽<br>
프로토콜, 포트, Source IP, Destination IP 등을 조합하여 네트워크 패킷 필터를 만들 수 있음<br>
한 인스턴스에 여러 보안 그룹 적용 가능<br>
가장 많은 실수가 이루어지는 곳<br>
[참조](https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/using-network-security.html)

### 키 쌍 (Key Pair)
AWS는 보안을 위해 ID, PW를 사용하는 인스턴스 접속 방식을 사용하고 있지 않습니다.<br>
이 키 파일을 이용해서 인스턴스 접속합니다.<br>
2048bit SSH-2 RSA를 사용합니다.<br>
AWS에서 준 것을 쓸 수도 있고 내가 만든 것을 쓸 수도 있습니다.<br>
[참조](https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/ec2-key-pairs.html)<br>

## EIP (Elastic IP) - 탄련적 IP
기본 제공 되는 EC2 인스턴스의 IP는 유동적임 (바뀔 수 있습니다.)<br>
> 인스턴스를 중지 하면 IP가 자동으로 반납 됩니다.<br>
따라서 EC2 인스턴스와 IP를 따로 관리해야 합니다.<br>
인스턴스에 연결되지 않은 경우 요금이 부과 됩니다.<br>
[참조](https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)<br>

## EC2 접속
cd [pem 파일이 있는 폴더]<br>
chmod 400 asdf.pem<br>
ssh –i asdf.pem ubuntu@[서버 아이피]<br>


## S3 (Simple Storage Service)
용량 제한 없이 파일 단위로 저장할 수 있습니다. (웹 하드 같은 느낌)<br>
URL로 파일에 접근할 수 있습니다.<br>
직접 EC2로 하는 것 보다 성능과 비용 측면에서 좋습니다.<br>
자동으로 Auto Scaling과 Load Balancing을 해줍니다.<br>
저장 용량, 데이터 전송량, HTTP 요청 수에 따라 요금 부과 합니다.<br>

### S3 기본 개념
버킷 (Bucket) : S3에서 생성할 수 있는 최상위 폴더<br>
> 리전별로 생성<br>
> 버킷의 이름은 모든 S3 리전 중에서 유일해야 합니다.<br>
> 계정 별로 100개까지 생성 가능 합니다.<br>
객체 (Object) : S3에 데이터가 저장되는 최소 단위<br>
> 저장 가능한 객체 수, 용량 무제한<br>
> 폴더 별로 관리하는 것이 아니라 Key-Value로 관리<br>
> URL로 접근 가능 합니다.<br>

## RDS (Relational Database Service)
관계형 데이터베이스 서비스<br>
높은 성능, 높은 편의성, 시간 절약, 비용 절감<br>
MultiAZ와 같은 Failover 기능 제공<br>
최대 7일 까지만 정지할 수 있습니다.<br>
> 생성 되는데 조금의 시간이 필요합니다.<br>


