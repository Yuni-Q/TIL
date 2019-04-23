# sns
```javascript
router.put('/sns', isNotLoggedIn, async (req, res) => {
  let response = {
    nickName: null,
    email: null,
    gender: null,
    year: null,
  };
  try {
    if (req.body.sns === 'kakao') {
      const kakaoResponse = await request('GET', 'https://kapi.kakao.com/v2/user/me', {
          headers: {
            Authorization: `Bearer ${req.body.accessToken}`,
          },
      });
      const bufferOriginal = kakaoResponse.body.toString('utf8')
      const json = JSON.parse(bufferOriginal);
      response.nickName = json.properties.nickname;
      response.email = json.kakao_account.email;
      response.gender = json.kakao_account.gender;
      response.token = req.body.accessToken;
      const user = await users.findOne({
        where: {
          email: response.email,
          type: req.body.sns,
        },
      });
      if(user) {
        await users.update({
          email: response.email,
          nickName: response.nickName,
          gender: response.gender,
          deviceToken: req.body.deviceToken,
          type : req.body.sns,
          token: req.body.accessToken,
          auth: 1,
        }, {
          where: {
            id: req.user.id,
          },
        });
      } else {
        await users.create({
          email: response.email,
          nickName: response.nickName,
          gender: response.gender,
          deviceToken: req.body.deviceToken,
          token: req.body.accessToken,
          type: req.body.sns,
          auth: 1,
        });
      }
      res.json(resultFormat(true, null, response));
      return;
    } else {
      const facebookResponse = await request('GET', `https://graph.facebook.com/me?access_token=${req.body.accessToken}&fields=id,name,gender,birthday,email`);
      const bufferOriginal = facebookResponse.body.toString('utf8')
      const json = JSON.parse(bufferOriginal);
      response.nickName = json.name;
      response.email = json.email;
      response.year = (json.birthday).split('/')[2];
      response.gender = json.gender;
      response.token = req.body.accessToken;
      const user = await users.findOne({
        where: {
          email: response.email,
          type: req.body.sns,
        },
      });
      if(user) {
        await users.update({
          email: response.email,
          nickName: response.nickName,
          age: response.year,
          gender: response.gender,
          deviceToken: req.body.deviceToken,
          token: req.body.accessToken,
          type: req.body.sns,
          auth: 1,
        }, {
          where: {
            id: req.user.id,
          },
        });
      } else {
        await users.create({
          email: response.email,
          nickName: response.nickName,
          age: response.year,
          gender: response.gender,
          deviceToken: req.body.deviceToken,
          type: req.body.sns,
          token: req.body.accessToken,
          auth: 1,
        });
      }
      res.json(resultFormat(true, null, response));
      return;
    }
  } catch (error) {
    res.json(resultFormat(false, error.message));
    return;
  }
  res.json(resultFormat(false, 'kakao나 facebook이 아닙니다.'));
});
```