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
      return res.sendStatus(200)
    })
    .catch(handleError.bind(null, res))
})

router.get('/:id', function (req, res) {
  var cohortId = req.params.id
  db.getCohort(cohortId)
    .then(function (cohort) {
      return res.json(cohort)
    })
    .catch(handleError.bind(null, res))
})

router.put('/:id', function (req, res) {
  var cohortId = req.params.id
  var cohort = req.body
  db.updateCohort(cohort, cohortId)
    .then(function () {
      return res.sendStatus(200)
    })
    .catch(handleError.bind(null, res))
})

router.get('/:id/students', function (req, res) {
  var cohortId = req.params.id
  db.getCohortStudents(cohortId)
    .then(function (students) {
      return res.json(students)
    })
    .catch(handleError.bind(null, res))
})

router.post('/:id/students', function (req, res) {
  var student = req.body
  student.cohortId = req.params.id
  db.saveCohortStudent(student)
    .then(function () {
      return res.sendStatus(200)
    })
    .catch(handleError.bind(null, res))
})

router.get('/:id/projects', function (req, res) {
  var cohortId = req.params.id
  db.getCohortProjects(cohortId)
    .then(function (projects) {
      return res.json(projects)
    })
    .catch(handleError.bind(null, res))
})

router.post('/:id/projects', function (req, res) {
  var project = req.body
  project.cohortId = req.params.id
  db.saveCohortProject(project)
    .then(function () {
      return res.sendStatus(200)
    })
    .catch(handleError.bind(null, res))
})

module.exports = router
