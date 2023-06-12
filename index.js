const express = require('express');
const app = express()

app.set('port',process.env.PORT || 3000)

app.get('/',(res,req) => {
    app.render('./build/index.html')
})

app.listen(3000,() => {
    console.log(app.get('port'),'번 포트에서 대기중')
})