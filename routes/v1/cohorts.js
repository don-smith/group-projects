var express = require('express')
var router = express.Router()

var db = require('../../db')
var handleError = require('../../handle-error')

router.get('/', function (req, res) {
  db.getCohorts()
    .then(function (cohorts) {
      return res.json(cohorts)
    })
    .catch(handleError.bind(null, res))
})

router.post('/', function (req, res) {
  var cohort = req.body
  db.saveCohort(cohort)
    .then(function () {
      res.sendStatus(200)
    })
    .catch(handleError.bind(null, res))
})

router.get('/:id', function (req, res) {
  var cohortId = req.params.id
  db.getCohort(cohortId)
    .then(function (cohort) {
      res.json(cohort)
    })
    .catch(handleError.bind(null, res))
})

router.put('/:id', function (req, res) {
  var cohortId = req.params.id
  var cohort = req.body
  db.updateCohort(cohort, cohortId)
    .then(function () {
      res.sendStatus(200)
    })
    .catch(handleError.bind(null, res))
})

router.get('/:id/students', function (req, res) {
  var cohortId = req.params.id
  var students = [] // db.getCohortStudents(cohortId)
  res.json(students)
})

router.post('/:id/students', function (req, res) {
  var cohortId = req.param.id
  var student = req.body
// db.saveCohortStudent(student, cohortId)
})

router.get('/:id/projects', function (req, res) {
  var cohortId = req.params.id
  var projects = [] // db.getCohortProjects(cohortId)
  res.json(projects)
})

router.post('/:id/projects', function (req, res) {
  var cohortId = req.params.id
  var project = req.body
// db.saveCohortProject(project, cohortId)
})

module.exports = router
