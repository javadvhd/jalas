const { findAllUsers, createUser } = require('./database/dbFunctions')

setTimeout(
  () =>
    findAllUsers().then(
      res =>
        !res.length &&
        [
          {
            firstname: 'hosein',
            lastname: 'norouzi',
            username: 'hoseinNorouzi',
            email: 'hosein.norouzi76@gmail.com',
            password: '1',
          },
          {
            firstname: 'hosein',
            lastname: 'norouzi',
            username: 'hoseinNorouzi2',
            email: 'hosein.norouzi76@yahoo.com',
            password: '1',
          },
          {
            firstname: 'javad',
            lastname: 'vahedi',
            username: 'jVahedi',
            email: 'vahedi.r46@gmail.com',
            password: '1',
          },
          {
            firstname: 'mohammad reza',
            lastname: 'arabzadeh',
            username: 'mra',
            email: 'mra_arabzadeh@yahoo.com',
            password: '1',
          },
        ].forEach(createUser),
    ),
  3000,
)
