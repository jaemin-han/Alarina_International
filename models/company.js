const db = require('../lib/dbConnect.js');

// function getCompanyInfo(req, res, next) {
//   db.any(`SELECT application.id
//           FROM users
//           INNER JOIN application
//           ON users.id = application.user_id
//           WHERE users.id = $1;
//           `, [req,params.id])
//   .then((companyinfo) => {
//     res.companyinfo = companyinfo;
//     next();
//   })
//   .catch(error => next(err));
// }

function getCompanyInfo(req, res, next) {
  db.any(`SELECT * FROM company`)
  .then((companyinfo) => {
    res.companyinfo = companyinfo;
    next();
  })
  .catch(error => next (err));
}

// Display all Jobs/positions
// function getAllJobs(req, res, next) {
//   console.log('get all jobs.');
//   db.any(`SELECT * FROM job`)
//     .then((jobs) => {
//       console.log('result of jobs', jobs);
//       res.jobs = jobs;
//       next();
//     })
//     .catch(err => next (err));
// }

function createCompany(req, res, next) {
  console.log('create a new company in database');
  db.none(`INSERT INTO company (company_name, company_description, industry, city, website, username, password)
          VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [req.body.company_name, req.body.company_description, req.body.industry, req.body.city, req.body.website, req.body.username, req.body.password])
  .then(next())
  .catch(error => next(error));
}

function deleteCompany(req, res, next) {
  console.log('delete company :(');
  db.none(`DELETE FROM company WHERE id = $6`, [req.body.id])
  .then(next())
  .catch(error => next(error));
}

function editCompany(req, res, next) {
  db.none(`UPDATE company SET(company_name = $1, company_description = $2, industry = $3, website = $5)`,
          [req.body.company_name, req.body.company_description, req.body.industry, req.body.website])
  .then(next())
  .catch(error => next(error));
}

function getCompanyByUsername(username) {
  return db.one(`SELECT * FROM company WHERE username = $6;`, [username]);
}

module.exports = {
  getCompanyInfo,
  createCompany,
  deleteCompany,
  editCompany,
  getCompanyByUsername,
};
