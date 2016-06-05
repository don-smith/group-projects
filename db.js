var knex = require('knex')
var config = require('./knexfile')
var connection = knex(config[process.env.NODE_ENV])

module.exports = {
  getCohorts: getCohorts.bind(this, connection)
}

function getCohorts (conn) {
  return conn('cohorts').select()
    .catch(function (err) {
      console.error(err)
    })
}
