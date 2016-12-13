const express = require('express');
const companyRoute = express.Router();
const { getCompany, getCompanyInfo } = require('../models/company.js');
const sendJSONresp = (req, res) => res.json(res.companyinfo || []);
const sendJSONresp2 = (req, res) => res.json(res.company || []);

// Route to create a new company upon login
// companyRoute.route('/')
//   .get(getCompanyInfo, sendJSONresp);

companyRoute.route('/:id')
  .get(getCompany, sendJSONresp2);


module.exports = companyRoute;
