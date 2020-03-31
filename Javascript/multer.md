# multer

```javascript
import * as AWS from "aws-sdk";
import * as multer from "multer";
import * as multerS3 from "multer-s3";
import * as Bluebird from "bluebird"; // Promise 대신 사용

AWS.config.update({
  region: "ap-northeast-2",
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: "react-nodebird",
    key(req, file, cb) {
      cb(null, `original/${+new Date()}${path.basename(file.originalname)}`);
    }
  }),
  limits: { fileSize: 20 * 1024 * 1024 }
});
// upload.none()
// upload.array('image')
if (req.body.image) {
  // 이미지 주소를 여러개 올리면 image: [주소1, 주소2]
  if (Array.isArray(req.body.image)) {
    const promises: Bluebird<Image>[] = req.body.image.map((image: string) =>
      Image.create({ src: image })
    );
    const images = await Promise.all(promises);
    await newPost.addImages(images);
  } else {
    // 이미지를 하나만 올리면 image: 주소1
    const image = await Image.create({ src: req.body.image });
    await newPost.addImage(image);
  }
}
```

- .array(fieldname[, maxCount])
  - fieldname 인자에 명시된 이름의 파일 전부를 배열 형태로 전달 받습니다. 선택적으로 maxCount 에 명시된 값 이상의 파일이 업로드 될 경우 에러를 출력할 수 있습니다. 전달 된 배열 형태의 파일은 req.files 에 저장될 것입니다.
- .single(fieldname)
  - fieldname 인자에 명시된 이름의 단수 파일을 전달 받습니다. 이 파일은 req.file 에 저장될 것 입니다.
- .fields(fields)
  - fields 인자에 명시된 여러 파일을 전달 받습니다. 파일 객체는 배열 형태로 req.files 에 저장될 것입니다.
- .none()
  - 오직 텍스트 필드만 허용합니다. 만일 파일이 업로드 되었을 경우, "LIMIT_UNEXPECTED_FILE" 와 같은 에러 코드가 발생할 것입니다. 이는 upload.fields([]) 와 같은 동작을 합니다.
- .any()
  - 전달된 모든 파일을 허용합니다. 파일 배열은 req.files 에 저장될 것입니다.
  - 주의: 항상 사용자가 업로드한 파일을 다룬다는 점을 명심하세요. 악의적인 사용자가 여러분이 예측하지 못한 곳으로 파일을 업로드 할 수 있으므로 절대 multer를 글로벌 미들웨어로 사용하지 마세요.

## npm

- https://github.com/expressjs/multer/blob/master/doc/README-ko.md
