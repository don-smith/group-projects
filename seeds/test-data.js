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
    return knex('cohorts').insert({name: 'Kauri 2016', graduation: ''})
  }

  function addStudents (cohortId) {
    var id = cohortId[0]
    return knex('students').insert([
      {
        firstName: 'Joe',
        lastName: 'Blow',
        photoUrl: 'http://images/joe.jpg',
        cohortId: id
      }, {
        firstName: 'Sally',
        lastName: 'Sue',
        photoUrl: 'http://images/sally.jpg',
        cohortId: id
      }, {
        firstName: 'Charlie',
        lastName: 'Chuckles',
        photoUrl: 'http://images/charlie.jpg',
        cohortId: id
      }, {
        firstName: 'Harriet',
        lastName: 'Happiness',
        photoUrl: 'http://images/harriet.jpg',
        cohortId: id
      }
    ])
  }

  function addProjects (lastStudentId) {
    console.log('lastStudentId', lastStudentId)
    return knex('projects').insert([
      {
        week: 4,
        name: 'Project awesomeness',
        description: 'The most awesome project',
      }, {
        week: 4,
        name: 'Project excellentness',
        description: 'The most excellent project',
      }
    ])
      .then(function (lastProjectId) {
        console.log('lastProjectId', lastProjectId)
        return {
          lastStudentId: lastStudentId[0],
          lastProjectId: lastProjectId[0]
        }
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
