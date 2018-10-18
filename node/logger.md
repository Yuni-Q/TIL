# Log

## winston & winston-daily-rotate-file
```bash
npm i winston winston-daily-rotate-file moment
```
> 로그를 위한 winston<br>
> 데일리 로그를 위한 winston-daily-rotate-file<br>

## Error Level
```javascript
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  verbose: 3,
  debug: 4,
  silly: 5,
};
```
> 높은 숫자는 낮은 숫자의 로그를 포함 합니다.

## ./lib/logger.js
```javascript
const winston = require('winston');
require('winston-daily-rotate-file');

// Timestamp를 찍기 위한 포맷
const myFormat = winston.format.printf(info => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`);

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.label({ label: 'right meow!' }),
    winston.format.timestamp(),
    myFormat,
    // JSON 형식으로 저장
    winston.format.json(),
  ),
  transports: [
    // 날짜별로 로그 저장
    new winston.transports.DailyRotateFile({
      filename: './logs/error-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      level: 'error',
    }),
    // 로그 저장
    new winston.transports.File({
      filename: './logs/debug.log',
      level: 'debug',
    }),
  ],
});

module.exports = logger;

```

## 사용
```javascript
// 1번 방법
logger.log({
        level: 'error',
        message: 'Hello distributed log files!',
      });

// 2번 방법
logger.info({
  'Hello distributed log files!',
  },
});
```