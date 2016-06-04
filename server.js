var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var PORT = process.env.PORT

var cohorts = require('./routes/v1/cohorts')
var students = require('./routes/v1/students')
var projects = require('./routes/v1/projects')

var app = express()
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'static')))

app.use('/cohorts', cohorts)
app.use('/students', students)
app.use('/projects', projects)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
