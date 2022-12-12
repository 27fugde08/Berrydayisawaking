const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World Nguyễn Trọng Duy 27082002 Bình Định')
})

app.listen(3000)