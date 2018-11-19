
# AWS Server 구성

## Server(EC2)
Auto Scaling을 통해 서버를 생성합니다.(health를 통해 서버를 죽이기도 합니다.)  
2개를 생성합니다.(하나 재배포 할때도 서비스는 유지되어야 하기 때문입니다.)  

## ELB(Elastic Load Balancing)
HTTP는 L7(응용 계층)  
> port + path + 캐시  
> nginx / HAproxy  

TCP / classic L4(전송 계층)  
> port  

## API Gatway
micro service를 구성하는데 도움을 줍니다.  
HTTP reverse proxy 기능을 합니다.  
> /streams/{proxy}
> 리소스를 생성하고 (/stream 부분) Method(ANY,GET,POST,PUT,DELETE)를 정의 합니다.  
> ANY가 아닌 경우 HEADER등의 자세한 세팅이 필요로 합니다.  
> 콘솔 또는 teraform(타입스크립트로 구성)을 통해 컨트롤 할 수 있습니다.  

## TEST
AWS Service는 DNS를 제공하기 때문에  
3구간에서 각각 테스트를 완료한 후에 다음 작업을 합니다.
1. EC2(Auto Scaling) - 코드가 잘 짜여져 있는지 확인 합니다.
1. ELB - 연결이 잘 되었는지 확인합니다.
1. API Gatway - 테스트 후 배포 합니다.  

