const express = require('express');
const jobRoute = express.Router();
const { getAllJobs} = require('../models/job.js');
const sendJSONresp = (req, res) => res.json(res.jobs || []);
// const sendJSONresp2 = (req, res) => res.json(res.jobs || []);

jobRoute.route('/allPositions')
  .get(getAllJobs, sendJSONresp);

// jobRoute.route('/position/:id')
//   .get(getJob, sendJSONresp2);

module.exports = jobRoute;
