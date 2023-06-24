const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const app = express();

app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'html');

nunjucks.configure('views',{
    express:app,
    watch:true
})

const router = express.Router();


router.get('/hello', (req, res) => res.send('Hello World!'));
router.get('/', (req, res) => res.render('index'));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', router);


app.set('port',3000)

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
  });