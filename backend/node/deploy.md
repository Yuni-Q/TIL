
# 배포

## EC2
```bash
ssh -i ~/.ssh/yuniq.pem ec2-user@13.125.198.255
vi /home/ec2-user/project/.git/hooks/deploy.sh
chmod +x deploy.sh # 실행 권한
```

## 로컬 서버
```json
"scripts": {
  "start": "npx nodemon app.js",
  "test": "swagger project test",
  "deploy": "git pull && npm install && pm2 start ecosystem.config.js --env",
  "ssh": "ssh -i ~/.ssh/yuniq.pem ec2-user@13.125.198.255 /home/ec2-user/project/.git/hooks/deploy.sh"
}
```
> npm run ssh  
> ~/.ssh/yuniq.pem 파일이 존재해야 합니다.  
