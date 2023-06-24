// YOUR_BASE_DIRECTORY/netlify/functions/api.ts
const express = require('express');
const serverless = require('serverless-http')
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const publicFolder = '/opt/build/repo/public'; 
const views = path.resolve(__dirname, '..', 'views');

const api = express();

api.set('views', publicFolder);
api.set('view engine', 'html');

nunjucks.configure(views,{
    express:api,
    watch:true
})

const router = express.Router();

router.use(express.static(publicFolder))


router.get('/hello', (req, res) => res.send('Hello World!'));
router.get('/', (req, res) => res.render('index'));

api.use(morgan('dev'));
api.use(express.static(publicFolder));
api.use(express.json());
api.use(express.urlencoded({extended: false}));
api.use('/', router);


module.exports.handler = serverless(api);

// api.set('port',3000)

// api.listen(api.get('port'), () => {
//     console.log(api.get('port'), '번 포트에서 대기중');
//   });