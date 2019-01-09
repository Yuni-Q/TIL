
# 노드를 알려주기에 좋은 예제

```javascript


const { parseString } = require('xml2js');
const request = require('sync-request');
const fetch = require('node-fetch');

const busStopNumbers = [];
const busStopTimes = {};
let busStopName = '홍대입구역';
busStopName = encodeURI(busStopName);

const busStopKey = 'ZToJL71tb0BfKZ6CzMa%2FYCbxw5sVQQks%2F%2BEhWi0%2B29s7PdXcQGYxJGChT%2FRysDxAZWmhSQRT3D6WT90GqkwJJA%3D%3D';
const busStopNumberUri = `http://ws.bus.go.kr/api/rest/stationinfo/getStationByName?ServiceKey=${busStopKey}&stSrch=${busStopName}`;
fetch(busStopNumberUri)
  .then(res => res.text()) // XML
  .then(xml => parseString(xml, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    result.ServiceResult.msgBody[0].itemList.forEach((element) => {
      busStopNumbers.push(element.arsId.toString());
    });
  }))
  .then(() => {
    // console.log(busStopNumbers);
    busStopNumbers.forEach((element) => {
      busStopTimes[element] = [];
      const busTime = `http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid?ServiceKey=${busStopKey}&arsId=${element}`;
      const {
        body,
      } = request('GET', busTime);
      // body2 = body2.text() // XML
      parseString(body, (err, result2) => {
        if (err) {
          console.log(err);
          return;
        }
        const {
          itemList,
        } = result2.ServiceResult.msgBody[0];
        if (itemList) {
          itemList.forEach((element2) => {
            busStopTimes[element].push(`${element2.rtNm}번 버스 도착 시간은 ${element2.arrmsg1}입니다.`);
          });
        }
      });
    });
  })
  .then(() => {
    console.log(busStopTimes);
  })
  .catch(err => console.log(err));


// const a = { b: 1, c: 2 };
// const { c: d } = a;
// console.log(d);
```