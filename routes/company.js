const express = require('express');
const companyRoute = express.Router();
const { getCompanyInfo } = require('../models/company.js');
const sendJSONresp = (req, res) => res.json(res.companyinfo || []);

// Route to create a new company upon login
companyRoute.route('/getCompanyInfo')
  .get(getCompanyInfo, sendJSONresp);

module.exports = companyRoute;
