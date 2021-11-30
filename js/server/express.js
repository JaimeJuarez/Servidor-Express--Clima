const express = require('express')
const app = express()
var routes = require('../routes/routes');

app.use('/', routes)
app.use(express.static('../../public'))
app.listen(3000)