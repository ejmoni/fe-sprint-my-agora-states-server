const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const discussions = require('./router/discussions');


// TODO: cors를 적용합니다.
// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.
app.use(cors());
app.use(express.json());
app.use('/discussions', discussions);

const port = 3001;

// TODO: /discussions 경로로 라우팅합니다. 
// app.get('/discussions', (req, res) => {
//   res.send()
// });

app.get('/', (req, res) => {
  // TODO: 서버 상태 확인을 위해 상태 코드 200으로 응답합니다.
  res.status(200).send('Welcome, Agora!')
  // throw 'true';
});
app.get((req, res, next) => {
  res.status(404).send('Not Found!')
});
app.get((err,req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: 'Internal Server Error',
    stacktrace: err.toString()
  })
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
