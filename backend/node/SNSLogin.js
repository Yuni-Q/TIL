const clientId = global.config.naver.ClientID;
const clientSecret = global.config.naver.ClientSecret;

const redirectURI = encodeURI('http://localhost:3000/signin/callback');
router.get('/naverlogin', (req, res) => {
  const state = 'ONEPIC';
  const apiUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectURI}&state=${state}`;
  // res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  // res.end(`<a href='${apiUrl}'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>`);
  res.redirect(apiUrl);
});

router.get('/callback', (req, res) => {
  const {
    code,
  } = req.query;
  const {
    state,
  } = req.query;
  let apiUrl = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectURI}&code=${code}&state=${state}`;
  let options = {
    url: apiUrl,
    headers: {
      'X-Naver-Client-Id': clientId,
      'X-Naver-Client-Secret': clientSecret,
    },
  };
  request.get(options, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.writeHead(200, {
        'Content-Type': 'text/json;charset=utf-8',
      });
      // res.end(body);
      const { access_token: accessToken } = JSON.parse(body);
      console.log(accessToken, 'aaa');
      const header = `Bearer ${accessToken}`; // Bearer 다음에 공백 추가
      apiUrl = 'https://openapi.naver.com/v1/nid/me';
      options = {
        url: apiUrl,
        headers: { Authorization: header },
      };
      request.get(options, (error2, response2, body2) => {
        if (!error2 && response2.statusCode === 200) {
          console.log(JSON.parse(body2).response.email);
          res.end(body2);
        } else {
          console.log('error');
          if (response2 != null) {
            res.status(response2.statusCode).end();
            console.log(`error = ${response2.statusCode}`);
          }
        }
      });
    } else {
      res.status(response.statusCode).end();
      console.log(`error = ${response.statusCode}`);
    }
  });
});
