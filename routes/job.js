const express = require('express');
const jobRoute = express.Router();
const { getAllJobs } = require('../models/job.js');
const sendJSONresp = (req, res) => res.json(res.jobs || []);

jobRoute.route('/main')
  .get(getAllJobs, sendJSONresp);

module.exports = jobRoute;