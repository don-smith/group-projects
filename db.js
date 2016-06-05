var knex = require('knex')
var config = require('./knexfile')
var connection = knex(config[process.env.NODE_ENV])

module.exports = {
  getCohorts: getCohorts.bind(this, connection),
  saveCohort: saveCohort.bind(this, connection),
  getCohort: getCohort.bind(this, connection),
  updateCohort: updateCohort.bind(this, connection)
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
