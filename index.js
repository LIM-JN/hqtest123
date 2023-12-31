const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();

app.use(express.static('public'));

app.set('port',3000)

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/.netlify/functions/api/', router);

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});