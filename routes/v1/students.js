var express = require('express')
var router = express.Router()

router.get('/:id', function (req, res) {
  var studentId = req.params.id
  var student = {} // db.getStudent(studentId)
  res.json(student)
})

router.put('/:id', function (req, res) {
  var studentId = req.params.id
  var student = req.body
// db.saveStudent(student, studentId)
})

module.exports = router
