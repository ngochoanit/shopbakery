
const path = require('path');
const express = require('express')
const morgan=require('morgan')
const app = express()
const port = 3000
const db= require("./config/db")
const route = require('./routes')

// connect db
db.connect();
app.set('view engine', 'pug')
app.set('views','./src/views');
app.locals.moment = require('moment');
 
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')));

route(app);

app.get('/', function (req, res) {
  res.render('user/index', { title: 'Hey', message: 'Hello User!' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})