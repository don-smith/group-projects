exports.seed = function (knex, Promise) {
  return Promise.join(
    knex('cohorts').del(),
    knex('students').del(),
    knex('projects').del(),
    knex('teams').del(),
    knex('photos').del()
  )
    .then(addCohort)
    .then(addStudents)
    .then(addProjects)
    .then(addPhotos)
    .then(addTeams)

  function addCohort () {
    return knex('cohorts')
      .insert({
        name: 'Kauri 2016',
        graduation: new Date('2016-07-15')
      })
  }

  function addStudents (lastCohortIds) {
    var lastCohortId = lastCohortIds[0]
    return knex('students')
      .insert([
        {
          firstName: 'Joe',
          lastName: 'Blow',
          photoUrl: 'http://images/joe.jpg',
          cohortId: lastCohortId
        }, {
          firstName: 'Sally',
          lastName: 'Sue',
          photoUrl: 'http://images/sally.jpg',
          cohortId: lastCohortId
        }, {
          firstName: 'Charlie',
          lastName: 'Chuckles',
          photoUrl: 'http://images/charlie.jpg',
          cohortId: lastCohortId
        }, {
          firstName: 'Harriet',
          lastName: 'Happiness',
          photoUrl: 'http://images/harriet.jpg',
          cohortId: lastCohortId
        }
      ])
      .then(function (lastStudentIds) {
        return {
          lastCohortId: lastCohortId,
          lastStudentId: lastStudentIds[0]
        }
      })
  }

  function addProjects (ids) {
    return knex('projects').insert([
      {
        week: 4,
        name: 'Project awesomeness',
        description: 'The most awesome project',
        cohortId: ids.lastCohortId
      }, {
        week: 4,
        name: 'Project excellentness',
        description: 'The most excellent project',
        cohortId: ids.lastCohortId
      }
    ])
      .then(function (lastProjectIds) {
        ids.lastProjectId = lastProjectIds[0]
        return ids
      })
  }

  function addPhotos (ids) {
    return knex('photos').insert([
      {
        photoUrl: 'http://project1/image1.jpg',
        projectId: ids.lastProjectId
      }, {
        photoUrl: 'http://project1/image2.jpg',
        projectId: ids.lastProjectId
      }, {
        photoUrl: 'http://project2/image1.jpg',
        projectId: ids.lastProjectId - 1
      }, {
        photoUrl: 'http://project2/image2.jpg',
        projectId: ids.lastProjectId - 1
      }
    ])
      .then(function () {
        return ids
      })
  }

  function addTeams (ids) {
    return knex('teams').insert([
      {
        studentId: ids.lastStudentId,
        projectId: ids.lastProjectId
      }, {
        studentId: ids.lastStudentId - 1,
        projectId: ids.lastProjectId
      }, {
        studentId: ids.lastStudentId - 2,
        projectId: ids.lastProjectId
      }, {
        studentId: ids.lastStudentId - 3,
        projectId: ids.lastProjectId
      }, {
        studentId: ids.lastStudentId,
        projectId: ids.lastProjectId - 1
      }, {
        studentId: ids.lastStudentId - 1,
        projectId: ids.lastProjectId - 1
      }, {
        studentId: ids.lastStudentId - 2,
        projectId: ids.lastProjectId - 1
      }, {
        studentId: ids.lastStudentId - 3,
        projectId: ids.lastProjectId - 1
      }
    ])
  }
}
