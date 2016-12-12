const express = require('express');
const companyRoute = express.Router();
const { getCompanyInfo } = require('../models/company.js');
const sendJSONresp = (req, res) => res.json(res.jobs || []);

// Route to create a new company upon login
companyRoute.route('/getCompanyInfo')
  .get(getCompanyInfo, sendJSONresp);

// Route to get company information
// companyRoute.get('/:id', getCompanyInfo, (req, res) => {
//   res.json(res.companyinfo);
// });

module.exports = companyRoute;
