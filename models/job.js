const db = require('../lib/dbConnect.js');

// Display all Jobs/positions
function getAllJobs(req, res, next) {
  console.log('get all jobs.');
  db.any(`SELECT * FROM job`)
    .then((jobs) => {
      console.log('result of jobs', jobs);
      res.jobs = jobs;
      next();
    })
    .catch(err => next (err));
}

module.exports = {
  getAllJobs,
};

// SELECT job.id, job.position, job.description, job.date_created
//           FROM job
//           INNER JOIN company
//           ON job.company_id = company.id
//           ORDER BY job.date_created DESC;
