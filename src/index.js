
const path = require('path');
const express = require('express')
const morgan=require('morgan')
const app = express()
const port = 3000


app.set('view engine', 'pug')
app.set('views','./src/views');

 
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/admin', function (req, res) {
  res.render('admin/index', { title: 'Hey', message: 'Hello Admin!' })
})
app.get('/', function (req, res) {
  res.render('user/index', { title: 'Hey', message: 'Hello User!' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})