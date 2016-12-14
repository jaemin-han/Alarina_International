const db = require('../lib/dbConnect.js');

// GET A COMPANY INFORMATION BASED ON JOB.COMPANY_ID
function getCompany(req, res, next) {
  db.one(`SELECT company.company_name, company.company_description, company.industry, company.city, company.website, job.position, job.city, job.date_created
          FROM company
          LEFT JOIN job
          ON job.company_id = company.id
          WHERE company.id = $1;
          `, [req.params.id])
  .then((company) => {
    res.company = company;
    next();
  })
  .catch(err => next(err));
}

// ON company.id = job.company_id

// GET ALL COMPANY INFORMATION
// function getCompanyInfo(req, res, next) {
//   db.any(`SELECT * FROM company`)
//   .then((companyinfo) => {
//     res.companyinfo = companyinfo;
//     next();
//   })
//   .catch(error => next (err));
// }
function getCompanyInfo(req, res, next) {
  next();
};

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
  getCompany,
  getCompanyInfo,
  createCompany,
  deleteCompany,
  editCompany,
  getCompanyByUsername,
};
