
# 맥에 리눅스 설치하기

## VMware Fusion 설치 
우선 https://www.vmware.com/kr로 접속합니다.  
평가판을 다운로드 받습니다.  
개인용 데스크탑에서 VMware Fusion Professional을 다운 받습니다.  
> 만약 맥이 아닌 윈도우에서 설치할려면 Vmware Workstation을 다운받아야 됩니다.  


## VMware Fusion 제거
1. 우선 Finder를 열어 응용 프로그램에 가보면 VMware Fusion이 보입니다. 휴지통으로 보냅시다.
1. 그리고 파인더 메뉴의 이동에서 "폴더로 이동..."을 클릭!
1. 관리자 라이브러리 파일을 삭제해야 되므로 "/"혹은 "/라이브러리" 폴더로 이동
1. 라이브러리 폴더에 보면 Application Support 풀더가 보입니다.
1. 폴더에 들어가보면 VMware 혹은 WMware Fusion 폴더가 보입니다.
1. 둘다 있으면 둘다 지우고 하나만 있으면 하나만 지우면 됩니다.
1. 다시 라이브러리 폴더로 와서 Preferences 폴더를 찾아주고
1. 해당폴더에도 VMware Fusion 폴더가 보일입니다. 휴지통으로~
1. 나머지 하위 폴더 제거
> ../Application Support/VMware Fusion  
> ../Caches/com.vmware.fusion  
> ../Preferences/VMware Fusion  
> ../Preferences/com.vmware.fusion.LSSharedFileList.plist  
> ../Preferences/com.vmware.fusion.LSSharedFileList.plist.lockfile  
> ../Preferences/com.vmware.fusion.plist  
> ../Preferences/com.vmware.fusion.plist.lockfile  
> ../Preferences/com.vmware.fusionDaemon.plist  
> ../Preferences/com.vmware.fusionDaemon.plist.lockfile  
> ../Preferences/com.vmware.fusionStartMenu.plis  
> ../Preferences/com.vmware.fusionStartMenu.plist.lockfile  

> Tip. 위 방법으로 삭제후 다시 VMware를 설치하면 30일 평가판을 다시 사용할수 있습니다.  
> Tip. Finder의 도큐멘트 폴더에 보면 Virtual Machines이라는 폴더가 있는데 이 폴더는 VMware로 만든 이미지의 저장폴더입니다.  
> 해당 폴더가 있으면 재설치후 이미지를 다시 만들필요없이 바로 사용가능합니다.  

## 우분투 설치하기
http://www.ubuntu.com 에 접속하여 Ubuntu Server 이미지를 다운받아야 됩니다.

## 리눅스 서버 접속하기
1. 리눅스 서버에서 ifconfig로 ip 확인
1. ssh userName@ip
> Tip. SSH접속의 기본포트는 22번이다. 혹 포드번호를 바꿨을때에는 명령어 뒤에 -p [포트번호] 를 붙혀주면 된다.  

---
출처: [Run and Fly](http://mirwebma.tistory.com/115?category=394591 )