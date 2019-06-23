var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.sendFile('index.html', {root : __dirname + '/views'})
})

app.use(express.urlencoded())

app.use('/api', require('./routes/employees'))

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
