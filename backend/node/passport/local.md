
# Passport local

## 설치
```bash
npm install cookieSession --save
npm install connect-flash --save
npm install passport --save
npm install passport-local --save
```

## 코드 작성

### 기본 설정
```javascript
const passport = require('passport'); // passport module add
const LocalStrategy = require('passport-local').Strategy;
const cookieSession = require('cookie-session');
const flash = require('connect-flash');

app.use(cookieSession({
  keys: ['node_yun'],
  cookie: {
    maxAge: 1000 * 60 * 60 // 유효기간 1시간
  }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
```
passport.initialize(), passport.session() 통해서 passport를 미들뒈어로 등록시킵니다.  
cookieSession을 Request 객체를 통해 Session을 핸들링할 수 있게 설정합니다.  
만료기간 및 쿠키 키 값은 각자의 프로젝트에 맞게 설정하시면 됩니다.  

### 로컬 인증 로직
```javascript
passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true //인증을 수행하는 인증 함수로 HTTP request를 그대로  전달할지 여부를 결정한다
}, function (req, username, password, done) {
  if(username === 'user001' && password === 'password'){
    return done(null, {
      'user_id': username,
    });
  }else{
    return done(false, null)
  }
}));
```

### serializeUser
```javascript
passport.serializeUser(function (user, done) {
  done(null, user)
});
```
로그인에 성공할 시 serializeUser 메서드를 통해서 사용자 정보를 Session에 저장하게 됩니다.  

### deserializeUse
```javascript
passport.deserializeUser(function (user, done) {
  done(null, user);
});
```
로그인에 성공하게 되면 Session정보를 저장을 완료했기에 이제 페이시 접근 시마다 사용자 정보를 갖게 Session에 갖게 됩니다.  
인증이 완료되고 페이지 이동시 deserializeUser 메서드가 호출되는 것을 로그를 찍어 보시면 확인할 수 있습니다.  

### 로그인 유저 판단
isAuthenticated()  
```javascript
var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
};
```
Connect 미들웨어를 이용해서 isAuthenticated 메서드를 호출하여 로그인 판단 여부를 확인할 수 있습니다.  
로그인한 유저는 req.isAuthenticated는 true를 반환해서 next()를 호출해서 다음 작업을 진행하게 되고 로그인하지 않은 유저는 자연스럽게 login 페이지로 리다이렉트 시켜 로그인을 자연스럽게 유도할 수 있게 합니다.

