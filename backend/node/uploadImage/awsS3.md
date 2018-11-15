
# AWS S3

## npm
```bash
npm install formidable
npm install async
npm install aws-sdk
```

```javascript
const formidable = require('formidable');
const AWS = require('aws-sdk');
const Upload = {};
AWS.config.region = 'ap-northeast-2'; //지역 서울 설정
AWS.config.update({ accessKeyId: config.signature.accessId, secretAccessKey: config.signature.secretKey });
const s3 = new AWS.S3();
const form = new formidable.IncomingForm({
    encoding: 'utf-8',
    multiples: true,
    keepExtensions: false //확장자 제거
});
/*S3 버킷 설정*/
const params = {
    Bucket: 'BucketName',
    Key: null,
    ACL: 'public-read',
    Body: null
};
```
formidable 메서드  
> 라우터에서 넘겨준 req 객체를 기반으로 파일 업로드를 진행합니다.  
> 파일 업로드 중 에러가 발생하게 되면 form.on(‘error’, …) 메서드를 통해서 에러를 callback으로 넘겨줍니다.  
> 파일 업로드가 정상적으로 완료되면 form.end(null, …)메서드가 호출되고 업로드한 파일의 정보(파일 사이즈, 파일 이름, 파일 경로 등등)가 callback 메서드를 통해서 으로 넘어가게 됩니다.  

s3 메서드 설명
> async.waterfall를 통해서 넘겨받은 files 객체에는 위에서 설명한 파일 정보가 들어있는 객체입니다.  
> params.Body값에는 위에서 업로드한 파일을 넘겨줍니다.  
> params.Key값에는 실제 S3에 업로드될 path + 파일 이름을 작성합니다.  