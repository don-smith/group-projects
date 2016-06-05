var knex = require('knex')
var config = require('./knexfile')
var connection = knex(config[process.env.NODE_ENV])

module.exports = {
  getCohorts: getCohorts.bind(this, connection),
  saveCohort: saveCohort.bind(this, connection),
  getCohort: getCohort.bind(this, connection),
  updateCohort: updateCohort.bind(this, connection),
  getCohortStudents: getCohortStudents.bind(this, connection),
  saveCohortStudent: saveCohortStudent.bind(this, connection),
  getCohortProjects: getCohortProjects.bind(this, connection),
  saveCohortProject: saveCohortProject.bind(this, connection)
}

function getCohorts (conn) {
  return conn('cohorts').select()
}

function saveCohort (conn, cohort) {
  return conn('cohorts').insert(cohort)
}

function getCohort (conn, id) {
  return conn('cohorts').select().where('id', '=', id)
}

function updateCohort (conn, cohort, id) {
  return conn('cohorts').update(cohort).where('id', '=', id)
}

function getCohortStudents (conn, cohortId) {
  return conn('students')
    .join('cohorts', 'cohorts.id', 'students.cohortId')
    .where('students.cohortId', '=', cohortId)
    .select('students.id as id', 'students.firstName', 'students.lastName', 'students.photoUrl')
}

function saveCohortStudent (conn, student) {
  return conn('students').insert(student)
}

function getCohortProjects (conn, cohortId) {
  return conn('projects')
    .join('cohorts', 'cohorts.id', 'projects.cohortId')
    .where('projects.cohortId', '=', cohortId)
    .select('projects.id as id', 'projects.name', 'projects.week', 'projects.description')
}

function saveCohortProject (conn, project) {
  return conn('projects').insert(project)
}
