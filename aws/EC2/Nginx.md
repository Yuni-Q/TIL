
# EC2

## EC2 기본 셋팅 (AMI)
```bash
sudo yum update -y
sudo yum install gcc gcc-c++
sudo yum  install -y git
sudo yum install -y nginx
```
AWS EC2에 접속하셔서 필수 패키지 설치를 진행합니다.  

### Port 설정
EC2의 포트 80, 3000이 열려있어야 합니다.  
포트 설정은 원하시는 포트를 사용하셔도 됩니다만 기본 포트를 권장합니다.  

## EC2 Node.js 설치
```bash
wget https://nodejs.org/dist/v6.7.0/node-v6.7.0.tar.gz
tar -xvf node-v8.11.3.tar.gz
cd [해당폴더이동]
./configure
make
sudo make install
```
AWS EC2에 접속하셔서 아래 명령어를 순차적으로 입력합니다.  
다른 버전 노드를 설치해도 무방합니다만 로컬에 있는 노드 버전과 동일하게 설치하는 것을 권장합니다.  

## Nginx 연동
```bash
sudo service nginx restart
```
nginx를 실행시킨 이후 EC2 IP로 접속하시면 아래 그림과 같은 화면이 출력되시면 nginx 설정으로 진행하시면 됩니다.  
Nginx 기본 포트는 80으로 설정되어있습니다.  

```bash
sudo vi /etc/nginx/nginx.conf
```

```vim
location / {
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Host $http_host;
      proxy_set_header X-NginX-Proxy true;

      proxy_pass http://127.0.0.1:3000/;
      proxy_redirect off;
}
```
server { 아래의 location을 붙여 넣습니다. } Nginx를 재실행시킵니다.  

```bash
sudo service nginx restart
```
Nginx를 재실행시키시고 EC2 IP에 접속하시면 Nginx 화면이 아니라 노드 서버 화면이 나오시는 것을 확인할 수 있습니다.  