const db = require('../lib/dbConnect.js');

function createUser(req, res, next) {
  console.log('create a new user in database');
  db.none(`INSERT INTO users (f_name, l_name, email, college, degree, username, password)
          VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [req.body.f_name, req.body.l_name, req.body.email, req.body.college, req.body.degree, req.body.username, req.body.password])
  .then(next())
  .catch(error => next(error));
}

function deleteUser(req, res, next) {
  console.log('delete user :(');
  db.none(`DELETE FROM users WHERE id = $6`, [req.body.id])
  .then(next())
  .catch(error => next(error));
}

function editUser(req, res, next) {
  db.none(`UPDATE users SET(f_name = $1, l_name = $2, college = $4, degree = $5)`,
          [req.body.f_name, req.body.l_name, req.body.college, req.body.degree])
  .then(next())
  .catch(error => next(error));
}

function getUserByUsername(username) {
  return db.one(`SELECT * FROM users WHERE username = $6;`, [username]);
}

function getUserInfo(req, res, next) {
  db.any('SELECT * FROM users;')
  .then((users) => {
    res.users = users;
    next();
  })
  .catch(error => next(err));
}

// function getUserInfo(req, res, next) {
//   db.any(`SELECT application.id
//           FROM users
//           INNER JOIN application
//           ON users.id = application.user_id
//           WHERE users.id = $1;
//           `, [req,params.id])
//   .then((info) => {
//     res.info = info;
//     next();
//   })
//   .catch(error => next(err));
// }

module.exports = {
  createUser,
  deleteUser,
  editUser,
  getUserByUsername,
  getUserInfo
};
