exports.up = function (knex, Promise) {
  return Promise.join(
    knex.schema.createTableIfNotExists('cohorts', function (table) {
      table.increments('id').primary()
      table.string('name')
      table.date('graduation')
    }),
    knex.schema.createTableIfNotExists('students', function (table) {
      table.increments('id').primary()
      table.integer('cohortId').references('cohorts.id')
      table.string('firstName')
      table.string('lastName')
      table.string('photoUrl')
    }),
    knex.schema.createTableIfNotExists('projects', function (table) {
      table.increments('id').primary()
      table.string('name')
      table.string('description')
      table.integer('week')
    }),
    knex.schema.createTableIfNotExists('teams', function (table) {
      table.increments('id').primary()
      table.integer('studentId').references('students.id')
      table.integer('projectId').references('projects.id')
    }),
    knex.schema.createTableIfNotExists('photos', function (table) {
      table.increments('id').primary()
      table.integer('projectId').references('projects.id')
      table.string('photoUrl')
    })
  )
}

exports.down = function (knex, Promise) {
  return Promise.join(
    knex.schema.dropTableIfExists('cohorts'),
    knex.schema.dropTableIfExists('students'),
    knex.schema.dropTableIfExists('projects'),
    knex.schema.dropTableIfExists('teams'),
    knex.schema.dropTableIfExists('photos')
  )
}
