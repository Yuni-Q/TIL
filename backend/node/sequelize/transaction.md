
# Transaction

```javascript
exports.register = (req, res) => {
  let userData = userDataForm(req.body);

  models.sequelize.transaction(t => {

      // User 추가
      return models.User.create(userData, {transaction: t}))
          .then(user => {

            // 추가된 User가 속한 Group 정보 조회
            modles.Group.findOne({id: user.GroupId, transaction: t}))
                .then(group => {

                  // 응답
                  return res.json({
                    user: user,
                    group: group
                  });
                });
          });
  });
}
```