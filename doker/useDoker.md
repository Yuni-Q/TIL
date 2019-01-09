
# 도커 사용하기

## Linux 설치
```bash
curl -fsSL https://get.docker.com/ | sudo sh
```
### sudo 없이 사용하기
docker는 기본적으로 root권한이 필요합니다. root가 아닌 사용자가 sudo없이 사용하려면 해당 사용자를 docker그룹에 추가합니다.  

```bash
sudo usermod -aG docker $USER # 현재 접속중인 사용자에게 권한주기
sudo usermod -aG docker your-user # your-user 사용자에게 권한주기
```
> 사용자가 로그인 중이라면 다시 로그인 후 권한이 적용됩니다.  

## Docker for Mac / Docker for Windows
도커를 맥이나 윈도우즈에 설치하려면 Docker for mac 또는 Docker for windows를 설치하면 됩니다. 파일을 다운받고 설치하고 재부팅하면 대부분 문제없이 완료됩니다. 소소한 옵션들이 있는데 특별히 건드릴 부분은 없으나 한번 살펴보고 적절하게 설정하시면 됩니다. (windows는 공유 드라이브를 선택해주세요)  

### 설치확인하기

input
```bash
docker version
```

output
```bash
Client:
 Version:      1.12.6
 API version:  1.24
 Go version:   go1.6.4
 Git commit:   78d1802
 Built:        Wed Jan 11 00:23:16 2017
 OS/Arch:      darwin/amd64

Server:
 Version:      1.12.6
 API version:  1.24
 Go version:   go1.6.4
 Git commit:   78d1802
 Built:        Wed Jan 11 00:23:16 2017
 OS/Arch:      linux/amd64
```
> Server 정보가 안나오고 Error response from daemon: Bad response from Docker engine이라는 메시지가 출력되는 경우는 보통 docker daemon이 정상적으로 실행되지 않았거나 sudo를 입력하지 않은 경우입니다.  

기본값이 도커 서버의 소켓을 바라보고 있기 때문에 사용자는 의식하지 않고 마치 바로 명령을 내리는 것 같은 느낌을 받습니다. 이러한 설계가 mac이나 windows의 터미널에서 명령어를 입력했을때 가상 서버에 설치된 도커가 동작하는 이유입니다.  

## 컨테이너 실행하기
```bash
docker run [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]
```
|옵션|설명|
|---|---|
|-d|detached mode 흔히 말하는 백그라운드 모드|
|-p|호스트와 컨테이너의 포트를 연결 (포워딩)|
|-v|호스트와 컨테이너의 디렉토리를 연결 (마운트)|
|-e|컨테이너 내에서 사용할 환경변수 설정|
|–name|컨테이너 이름 설정|
|–rm|프로세스 종료시 컨테이너 자동 제거|
|-it|-i와 -t를 동시에 사용한 것으로 터미널 입력을 위한 옵션|
|–link|컨테이너 연결 [컨테이너명:별칭]|

```bash
docker run ubuntu:16.04
```










---
참조 : [초보를 위한 도커 안내서 - 설치하고 컨테이너 실행하기 SERIES 2/3](https://subicura.com/2017/01/19/docker-guide-for-beginners-2.html)