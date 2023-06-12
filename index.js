const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();

app.set('port', process.env.PORT || 3000);
app.set('view engine','html')

app.use(express.static('public'));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/index.html'));
});
app.use('/', router);

app.use((req,res,next) => {
    res.status(404).send('Not Found');
})

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});