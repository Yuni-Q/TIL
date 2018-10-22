
# SlackBot

## Job 작성
```javascript
// sendSlackMessageJob.js
const { WebClient } = require('@slack/client');

exports.perform = function perform(channelName, message) {
  // An access token (from your Slack app or custom integration - xoxp, xoxb, or xoxa)
  const token = global.config.SLAc;

  const web = new WebClient(token);
  // const rtm = new RtmClient(token, { logLevel: 'error' });
  // rtm.start();

  web.chat.postMessage({
    channel: channelName,
    username: 'svmnotifybot',
    text: message,
    // 이모지가 들어가지 않는 것 같다
    icon_emoji: '',
  })
    .then((res) => {
      // `res` contains information about the posted message
      console.log('Message sent: ', res.ts);
    })
    .catch(console.error);
};
```

## 사용
```javascript
const SendSlackMessageJob = require('../../job/sendSlackMessageJob');
SendSlackMessageJob.perform(channelName, message);
```