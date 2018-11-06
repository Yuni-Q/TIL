
```javascript
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = [token]

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  // bot.sendMessage(chatId, 'Received your message');
  console.log(chatId);
});

exports.bot = bot;

```

> BotFather의 설명에 따라 chat_bot 생성<br>
> api 확인 : https://api.telegram.org/bot[token]/getUpdates<br>
> /start 후 메세지 전송<br>
> 결과 중 “from”:{“id”:4200110535 에서 숫자 4200110535 가 chat_id 입니다.<br>
> 위 방법으로 힘들 경우 @get_id_bot에서 /my_id를 통해 chat_id를 가져 올 수 있습니다.<br>

```javascript
await sendTelegramChatJob.bot.sendMessage(chatId, [messeage]);
```
