
# nginx

## 사용 이유
로드밸런싱 : 유저의 요청을 웹 애플리케이션 서버(WAS)로 분산 할 수 있다.  
유저 요청에 대한 선 처리 : 유저의 요청이 WAS에 도달하기 전에 다양한 처리를 할 수 있다. 웹 애플리케이션 방화벽(WAF)를 설치하거나, 유저의 요청을 다른 위치로 보내도록 제어 할 수 있다.  
캐싱 : 웹 서비스는 이미지, CSS, 자바스크립트 같은 정적인 페이지를 가지고 있다. 이런 정적 컨텐츠들을 NginX에서 대신 처리하는 것으로 응답 속도를 높일 수 있으며, WAS에 대한 부담을 줄일 수 있다. 컨텐츠들을 메모리에 캐시할 경우 서비스 할 경우 고성능의 웹 서비스를 만들 수도 있다.  

## 설치
```bash
sudo yum install nginx
# sudo apt-get install nginx
nginx -v
```

## 설정
```bash
cd /etc/nginx/
vi ngix.conf
```

## 라우팅
```bash
cd /etc/nginx/sites-available
vi default
```
엔진엑스의 라우팅설정 파일이 항상 default  하나인 건 아닙니다.  
누군가는 사이트별로 파일을 나누고 다른 이름으로 지을 수 도 있습니다.    
site-available 폴더내에 라우팅 설정파일을 여러개 마련해둘 수 있죠.  

그런다음 해당 라우팅설정을 활성화하려면 그 아래에있는 /etc/nginx/sites-enabled 안에도 해당파일들의 심볼링 링크파일을 만들어야한다는 겁니다.  
현재 sites-enabled 폴더내용물을 살펴보면 sites-available 폴더에있는 default 파일로 향하는 심볼릭링크파일(바로가기)이 있는 걸 알 수 있습니다.  

sites-enabled에 파일이 없으면 라우팅 설정이 활성화 되지 않습니다.  
다시말해서 nginx는 site-enabled 에있는 라우팅 설정파일을 읽어들여 동작할 뿐이니 여러분은 sites-available에 설정 파일들을 미리 작성만 해놨다가 sites-enabled에 바로가기 파일을 만들어서 활성화 시키는 것이죠.  

```vim
server { 
...
...
    root /var/www/html/첫번째사이트_루트폴더; 
    server_name 첫번째_사이트_도메인;
...
...
}

server {
...
... 
    root /var/www/html/두번째사이트_루트폴더; 
    server_name 두번째_사이트_도메인;
 ...
 ... 
}
```
> server_name으로 들어온 것만 연결해 준다.  
> 모든 것을 주소를 수용하려면 <b>server_name ~^.*$</b>을 사용한다.  

## FTP에서 편집을 위한 파일권한 변경
ubuntu 사용자로 접속한 FTP 프로그램을 통해서 /etc/nginx/sites-available/default 이파일을 읽을 수 없거나 편집, 수정, 저장할 수 없다면 리눅스 파일의 권한 문제입니다.  
해당 파일의 사용자그룹으르 ubuntu 그룹으로 변경하는 chgrp 명령어와  
sudo chgrp ubuntu /etc/nginx/sites-available/default  
그룹 멤버들이 수정할 수 있는 권한인 664 또는 775 같은 권한으로 변경해주는 chmod 명령어를 사용해줍니다.  
sudo chmod 664 /etc/nginx/sites-available/default  
그러면 FTP 프로그램을 이용해서도 해당파일을 열어 수정할 수 있을 겁니다.  

## NGiNX 설정파일로 www 도메인 리다이렉팅하기
```vim
################## HTTP www.
server {
    listen 80;
    listen [::]:80;
    server_name :q.swiftcoding.org;
    location / {
        return 301 http://swiftcoding.org$request_uri;       ### http://swiftcoding.org 로 리다이렉팅
    }
}
```

# 이 Nginx가 현재 실행중인 프로젝트를 바라볼수 있도록 (리버스 프록시) 설정

```bash
sudo vi /etc/nginx/nginx.conf
```

proxy_pass http://localhost:8080;  
> proxy_pass : 요청이 오면 http://localhost:8080로 전달  

proxy_set_header X-Real-IP $remote_addr;  
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;  
proxy_set_header Host $http_host;  
> proxy_set_header XXX : 실제 요청 데이터를 header의 각 항목에 할당  

```bash
sudo service nginx restart
```

## [NGINX] 정적 파일 연결
```vim
server {
  # 파일 경로 설정:q
  # /public 경로로 접속하면 /www/public에 있는 파일을 자동으로 연결
  location /public/ {
    root /www;
  }

  # 특정 파일 상태 코드 리턴
  location /favicon.ico {
    return 404;
  }

  # 특정 확장자
  # mp3와 mp4 파일 연결
  location ~ \.(mp3|mp4) {
    root /www/media;
  }
}
```

## /etc/nginx/conf.d 설정
원래 nginx의 설정파일은 /etc/nginx/nginx.conf 입니다. 하지만, yum 업데이트시 설정파일이 덮어쓰질 우려가 있기때문에 설정파일을 새로 생성한 다음 사용하는 방법으로 해보겠습니다.  
메인 설정파일( /etc/nginx/nginx.conf )에 보면 include /etc/nginx/conf.d/*.conf; 이란 부분이 있습니다. 이것은 /etc/nginx/conf.d 디렉토리에 있는 모든설정 파일들을 불러오는 구문입니다. 즉, conf.d 디렉토리에서 새로운 설정파일을 생성하면 그마저도 불러온다는 뜻입니다.   
디렉토리에는 기본적으로 default.conf 와 example_ssl.conf 이란 파일이 설치시에 추가되어있을 겁니다.  
default.conf : 가장 메인이 되는 파일입니다. 서버 ip를 쳐봤을 때 나오는 페이지의 그 설정파일입니다.  
example_ssl.conf : SSL 적용시 어떻게 설정하는 지 보여주는 단순한 예제파일입니다. 또 모두 주석(#)처리가 되어있어서 효력이 발생하지않는 파일입니다.   
이 파일들을 참조하여 설정파일을 새로 생성하면 됩니다.  
> 설정파일에서 지정한 웹루트 디렉토리에 표시할 index.html 파일을 넣으면 됩니다. 예를 들어, 설정파일에서 /home/www 디렉토리를 웹루트로 지정하였다면 /home/www/index.html 파일이 인덱스파일이 됩니다.  

## 서비스 시작
설정을 마쳤으면 서비스를 시작합니다.  
systemctl start nginx  
이제 서버 ip나 연결된 도메인으로 웹 접속이 가능해졌습니다.  
```bash
sudo nginx
ps -ef | grep nginx
```

## 설정 반영
추후에 nginx 설정 변경할 경우 서비스 재시작이나 재로드를 해야 설정이 반영됩니다.  
하지만 재시작은 서비스가 끊겨야 되므로 재로드를 권장합니다.  
> systemctl이 되지 않는다면 sudo service restart nginx  
```bash
sudo nginx -s stop
sudo nginx -s reload
```

## 로드 밸런싱

### 라운드 로빈(Round Robin)
```
http {
  upstream app {
    server 10.0.0.1:3000;
    server 10.0.0.2:3000;
  }
  server {
    listen 80;
    location / {
      proxy_pass http://app;
    }
  }
}
```

### 최소 접속(Least connected)
```
upstream app {
  least_conn;
  server 10.0.0.1:3000;
  server 10.0.0.2:3000;
}
```
### IP 해싱(IP hashing)
```
upstream app {
  ip_hash;
  server 10.0.0.1:3000;
  server 10.0.0.2:3000;
}
```

### 가중치
```
upstream app {
  server 10.0.0.1:3000 weight=5;
  server 10.0.0.2:3000;
}
```

## NGINX 상태 점검

### 패시브 상태 점검
- 오류가 반환되는 경우, NGINX는 노드에 결함이 있다고 표시하고, 로드 밸런싱을 도입하기 전 일정 시간 동안 로드 밸런싱 대상에서 해당 노드를 제거합니다. 이 전력을 이용해 NGINX는 계속해서 노드를 제거하기 때문에 실패 횟수가 대폭 감소됩니다.
- 이 때 max_fails나 fail_timeout 처럼, 필요한 실패 횟수나 요청의 타임아웃을 설정함으로써 노드가 유효하지 않음을 표시하는 파라미터도 몇 가지 구성할 수 있습니다.

### 액티브 상태 점검

```
http {
  upstream app {
    zone app test;
    server 10.0.0.1:3000;
    server 10.0.0.2:3000;
  }
  server {
    listen 80;
    location / {
      proxy_pass http://app;
      health)_check;
    }
  }
}
```
- health_check : 액티브 상태 점검을 활성화합니다. 기본 구성은 5초마다 호스트와 upstream 구문에 지정된 포트에 대해 접속을 실행합니다.
- zone app test : 상태 점검을 활성화할 때 NGINX 구성이 필요합니다.

---
참조 : [nginx 웹서버 라우팅 설정하기 – 도메인 IP 연결, www 리다이렉팅](https://swiftcoding.org/nginx-routing)