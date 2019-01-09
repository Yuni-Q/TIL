
# PM2

## PM2란?
개발 중에 에러를 만나면 노드 서버가 강제로 죽어 버리는 경우를 빈번하게 맞이하게 됩니다.  
이럴 때 앱을 재실행해주는 기능도 담당하고 있어 실제 노드 서버에서는 필수적인 패키지이라고 할 수 있습니다.  
물론 이밖에 다양한 기능들을 재공해 주고 있습니다.  
> 앱에서 충돌이 발생할 경우 앱을 자동으로 다시 시작  
> 런타임 성능 및 자원 소비에 대한 통찰력을 획득  
> 성능 향상을 위해 설정을 동적으로 수정  
> 클러스터링을 제어  

## 설치 및 실행
```bash
[sudo] npm install pm2 -g
pm2 start  <실행시킬 서버. js> -- name <AppName>
```
> 확인은 pm2 list  
> pm2 stop <app_name>  
> pm2 restart <app_name>  
> pm2 delete <app_name>  
> pm2 show <app_name>  

## 쉘 스크립트 PM2 제어
서버를 시작, 정지, 재시작하는 경우는 정말 빈번하게 발생합니다.  
그래서 start.sh, restart.sh, stop.sh 쉘 스크립트를 통해서 start, restart, stop 작업을 진행시킵니다.  

### start.sh
```sh
#!/bin/bash

pm2 reload node_yun;
echo 'Reload pm2 demon...';
sleep 1;
sudo service nginx restart;
echo 'Restart nginx server...';
echo 'All Done!'
exit;
```
### stop.sh
```sh
#!/bin/bash

pm2 stop node_yun;
echo 'Stop node_yun by pm2';
sleep 1;
sudo service nginx stop;
echo 'Stop nginx server...';
echo 'All Done!';
exit;
```

### restart.sh
```sh
#!/bin/bash

pm2 delete node_yun;
pm2 start /home/ec2-user/node-yun/bin/www -i 0 --name node_yun;
echo 'start node_yun by pm2';
sleep 1;
sudo service nginx start;
echo 'Start nginx server...';
echo 'All Done!';
exit;
```

## 클러스터 모드
pm2를 실행시킬 때 -i 옵션을 사용하면 클러스터 모드로 실행이 됩니다.  
-i 뒤에 0을 지정하면 사용 가능한 CPU가 모두 실행이 됩니다.  
간단하게 클러스터 모드를 실행시킬 수 있습니다.  

