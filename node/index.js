const express = require('express')
const app = express()

app.get('/', function (req, res) {
    console.log(req)
    res.send('Hello world')
})

app.listen(80)