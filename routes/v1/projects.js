var express = require('express')
var router = express.Router()

router.get('/:id', function (req, res) {
  var projectId = req.params.id
  var project = {} // db.getProject(projectId)
  res.json(project)
})

router.put('/:id', function (req, res) {
  var projectId = req.params.id
  var project = req.body
// db.saveProject(project, projectId)
})

router.get('/:id/students', function (req, res) {
  var projectId = req.params.id
  var students = [] // db.getProjectStudents(projectId)
  res.json(students)
})

router.post('/:id/students', function (req, res) {
  var projectId = req.params.id
  var student = req.body
// db.saveProjectStudent(student, projectId)
})

router.get('/:id/photos', function (req, res) {
  var id = req.params.id
  var photos = [] // db.getProjectPhotos(id)
  res.json(photos)
})

router.post('/:id/photos', function (req, res) {
  var projectId = req.params.id
  var photo = req.body
// db.saveProjectPhoto(photo, projectId)
})

module.exports = router
