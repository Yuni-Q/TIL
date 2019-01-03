
# nginx

## 설치
```bash
sudo apt-get install nginx
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
    server_name www.swiftcoding.org;
    location / {
        return 301 http://swiftcoding.org$request_uri;       ### http://swiftcoding.org 로 리다이렉팅
    }
}
```





---
참조 : [nginx 웹서버 라우팅 설정하기 – 도메인 IP 연결, www 리다이렉팅](https://swiftcoding.org/nginx-routing)