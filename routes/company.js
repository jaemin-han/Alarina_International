const express = require('express');
const { } = require('../models/company.js');
const companyRoute = express.Router();

// Route to create a new company upon login
companyRoute.get('/', (req, res) => {
  // res.send('company added');
});

// Route to get company information
// companyRoute.get('/:id', getCompanyInfo, (req, res) => {
//   res.json(res.companyinfo);
// });

module.exports = companyRoute;
