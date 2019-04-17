# SQL

## 원하는 결과
```json
{
    "ok": true,
    "error": null,
    "result": {
        "Part1": {
            "Hackers Test(p70)3 Q1": {
                "me": [
                    {
                        "bookTitle": "2주 만에 끝나는 해커스 토익스피킹 Start",
                        "partTitle": "Part1",
                        "partId": 1,
                        "questionTitle": "Hackers Test(p70)3 Q1",
                        "questionId": 3,
                        "time": "45",
                        "title": "11",
                        "content": "11222",
                        "share": 0,
                        "userId": 3,
                        "imgUrl": "https://yunhee.s3.amazonaws.com/jxKdsDdw.png",
                        "fileUrl": null,
                        "updatedAt": "2019-04-15T16:08:43.000Z"
                    }
                ]
            },
            "Hackers Test(p70)2 Q1": {
                "me": [
                    {
                        "bookTitle": "2주 만에 끝나는 해커스 토익스피킹 Start",
                        "partTitle": "Part1",
                        "partId": 1,
                        "questionTitle": "Hackers Test(p70)2 Q1",
                        "questionId": 2,
                        "time": "45",
                        "title": "11",
                        "content": "11222",
                        "share": 0,
                        "userId": 3,
                        "imgUrl": "https://yunhee.s3.amazonaws.com/jxKdsDdw.png",
                        "fileUrl": null,
                        "updatedAt": "2019-04-15T16:08:22.000Z"
                    },
                    {
                        "bookTitle": "2주 만에 끝나는 해커스 토익스피킹 Start",
                        "partTitle": "Part1",
                        "partId": 1,
                        "questionTitle": "Hackers Test(p70)2 Q1",
                        "questionId": 2,
                        "time": "45",
                        "title": "11",
                        "content": "11",
                        "share": 1,
                        "userId": 3,
                        "imgUrl": "https://yunhee.s3.amazonaws.com/jxKdsDdw.png",
                        "fileUrl": null,
                        "updatedAt": "2019-04-15T13:20:15.000Z"
                    }
                ],
                "other": [
                    {
                        "bookTitle": "2주 만에 끝나는 해커스 토익스피킹 Start",
                        "partTitle": "Part1",
                        "partId": 1,
                        "questionTitle": "Hackers Test(p70)2 Q1",
                        "questionId": 2,
                        "time": "45",
                        "title": null,
                        "content": null,
                        "share": 1,
                        "userId": 1,
                        "imgUrl": "https://yunhee.s3.amazonaws.com/jxKdsDdw.png",
                        "fileUrl": null,
                        "updatedAt": "2019-01-23T13:28:29.000Z"
                    }
                ]
            },
            "Hackers Test(p70)1 Q1": {
                "me": [
                    {
                        "bookTitle": "2주 만에 끝나는 해커스 토익스피킹 Start",
                        "partTitle": "Part1",
                        "partId": 1,
                        "questionTitle": "Hackers Test(p70)1 Q1",
                        "questionId": 1,
                        "time": "45",
                        "title": "22",
                        "content": "22",
                        "share": 1,
                        "userId": 3,
                        "imgUrl": "https://yunhee.s3.amazonaws.com/jxKdsDdw.png",
                        "fileUrl": null,
                        "updatedAt": "2019-04-15T13:20:03.000Z"
                    },
                    {
                        "bookTitle": "2주 만에 끝나는 해커스 토익스피킹 Start",
                        "partTitle": "Part1",
                        "partId": 1,
                        "questionTitle": "Hackers Test(p70)1 Q1",
                        "questionId": 1,
                        "time": "45",
                        "title": "11",
                        "content": "11",
                        "share": 1,
                        "userId": 3,
                        "imgUrl": "https://yunhee.s3.amazonaws.com/jxKdsDdw.png",
                        "fileUrl": null,
                        "updatedAt": "2019-04-15T13:19:39.000Z"
                    }
                ],
                "other": [
                    {
                        "bookTitle": "2주 만에 끝나는 해커스 토익스피킹 Start",
                        "partTitle": "Part1",
                        "partId": 1,
                        "questionTitle": "Hackers Test(p70)1 Q1",
                        "questionId": 1,
                        "time": "45",
                        "title": null,
                        "content": null,
                        "share": 1,
                        "userId": 1,
                        "imgUrl": "https://yunhee.s3.amazonaws.com/jxKdsDdw.png",
                        "fileUrl": null,
                        "updatedAt": "2019-01-23T13:28:23.000Z"
                    }
                ]
            }
        }
    }
}
```


## 최악
```javascript
router.get('/books/:id', isLoggedIn, async (req, res) => {
  const result = {};

  const parts = await db.parts.findAll({ where: { bookId: req.params.id } });

  for (let i = 0; i < parts.length; i++) {
    result[parts[i].title] = [];
    const questions = await db.questions.findAll({ where: { partId: parts[i].id } });
    for (let j = 0; j < questions.length; j++) {
      result[parts[i].title][j] = { [questions[j].title]: { me: [], other: []}};
      const query1 = `
        select
          * 
        from toasts 
        where questionId = ${questions[j].id}
          and userId = ${req.user.id}
        ORDER BY
          updatedAt
      `;
      const toasts = (await db.sequelize.query(query1, {
          type: sequelize.QueryTypes.SELECT,
        }))
      result[parts[i].title][j][questions[j].title].me = toasts;
      if (toasts.length > 0) {
        const query2 = `
          select
            * 
          from toasts 
          where questionId = ${questions[j].id}
            userId != ${req.user.id}
          ORDER BY
            updatedAt
        `;
        const otherToast = (await db.sequelize.query(query2, {
          type: sequelize.QueryTypes.SELECT,
        }))
        result[parts[i].title][j][questions[j].title].other = otherToast;
      }
    }
  }
  res.json(resultFormat(true, null, result));
});
```

## 차악
```javascript
router.get('/books/:id', isLoggedIn, async (req, res) => {
  const query1 = `
    select
      books.title as bookTitle,
      parts.title as partTitle,
      parts.id as partId,
      questions.title as questionTitle,
      questions.id as questionId,
      questions.content as time,
      toasts.title as title,
      toasts.content as content,
      toasts.share as share,
      toasts.userId as userId,
      imgUrl,
      fileUrl
    from toasts 
      join questions on questions.id = toasts.questionId
      join parts on parts.id = questions.partId
      join books on books.id = parts.bookId
    where toasts.userId = ${req.user.id}
      and books.id = ${req.params.id}
    order by toasts.updatedAt DESC
  `;
  const toasts = await db.sequelize.query(query1, {
    type: sequelize.QueryTypes.SELECT,
  });
  let list = _.groupBy(toasts, function (item) {
    return item.partTitle;
  });

  _.forEach(list, function (value, key) {
    list[key] = _.groupBy(list[key], function (item) {
      return item.questionTitle;
    });
  });

  const jsonString = JSON.stringify(list);

  const result = JSON.parse(jsonString)

  await Aigle.forEach(Object.keys(result), async (key) => {
  //  Object.keys(result).forEach((key) => {
    await Aigle.forEach(Object.keys(result[key]), async (k) => {
    //  Object.keys(result[key]).forEach(async (k) => {
      const me = result[key][k];
        result[key][k] = {}
        result[key][k].me = me;
      const index =  result[key][k].me.findIndex(i => i.share == true);
      if (index >= 0) {
        const query2 = `
            select
              books.title as bookTitle,
              parts.title as partTitle,
              parts.id as partId,
              questions.title as questionTitle,
              questions.id as questionId,
              questions.content as time,
              toasts.title as title,
              toasts.content as content,
              toasts.share as share,
              toasts.userId as userId,
              imgUrl,
              fileUrl
            from toasts 
              join questions on questions.id = toasts.questionId
              join parts on parts.id = questions.partId
              join books on books.id = parts.bookId
            where toasts.userId != ${req.user.id}
              and questions.id = ${result[key][k].me[0].questionId}
              and share = 1
            order by toasts.updatedAt DESC
      `;
        const otherToasts = await db.sequelize.query(query2, {
          type: sequelize.QueryTypes.SELECT,
        });
        result[key][k].other = otherToasts;
      }
    })
  })
  res.json(resultFormat(true, null, result));
```

## 개선
```javascript
router.get('/books/:id', isLoggedIn, async (req, res) => {
  const query1 = `
  SELECT 
    B.title as bookTitle,
    P.title as partTitle,
    P.id as partId,
    Q.title as questionTitle,
    Q.id as questionId,
    Q.content as time,
    T.title as title,
    T.content as content,
    T.share as share,
    T.userId as userId,
    B.imgUrl as imgUrl,
    T.fileUrl as fileUrl,
    T.updatedAt as updatedAt
  FROM books AS B
  INNER JOIN parts AS P
    ON B.id = P.bookId
  INNER JOIN questions AS Q
    ON P.id = Q.partId
  INNER JOIN toasts AS T
    ON Q.id = T.questionId
      AND T.userId = ${req.user.id}
  WHERE B.id = ${req.params.id}
  
    
  UNION ALL

  SELECT 
    B.title as bookTitle,
    P.title as partTitle,
    P.id as partId,
    Q.title as questionTitle,
    Q.id as questionId,
    Q.content as time,
    ORI.title as title,
    ORI.content as content,
    ORI.share as share,
    ORI.userId as userId,
    B.imgUrl as imgUrl,
    ORI.fileUrl as fileUrl,
    ORI.updatedAt as updatedAt
  FROM books AS B
    INNER JOIN parts AS P
      ON B.id = P.bookId
    INNER JOIN questions AS Q
      ON P.id = Q.partId
    INNER JOIN toasts AS ORI
      ON Q.id = ORI.questionId
  WHERE ORI.share = 1
    AND B.id = ${req.params.id}
    AND ORI.userId != ${req.user.id}
    AND ORI.questionId IN (SELECT DISTINCT T.questionId
      FROM books AS B
      INNER JOIN parts AS P
        ON B.id = P.bookId
      INNER JOIN questions AS Q
        ON P.id = Q.partId
      INNER JOIN toasts AS T
        ON Q.id = T.questionId
            AND T.userId = ${req.user.id}
            AND T.share = 1);
  `;
  const toasts = await db.sequelize.query(query1, {
    type: sequelize.QueryTypes.SELECT,
  });

  const sortToasts = toasts.sort(function(a, b){return b.updatedAt-a.updatedAt})
  
  let result = _.groupBy(sortToasts, function (item) {
    return item.partTitle;
  });

  _.forEach(result, function (value, key) {
    result[key] = _.groupBy(result[key], function (item) {
      return item.questionTitle;
    });
  });

  _.forEach(result, function (value, key) {
    _.forEach(result[key], function (value, k) {
      result[key][k] = _.groupBy(result[key][k], function (i) {
      if (i.userId === req.user.id) return "me";
      else return "other";
    })
  })
})
  res.json(resultFormat(true, null, result));
});
```