'use strict'
// Storage for local variables: typically (API) KEYS
// Requires the express library
// Logger that sends inputs(errors: 200, 304, 404, 500, etc) to the terminal
// Gets the public folder(CSS/HTML)
require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user.js');
const companyRoute = require('./routes/company.js');
const jobRoute = require('./routes/job.js');
// const applicationRoute = require('./routes/application.js');

// Invoking the express library
// Localhost 3000 || other ports stated
const app = express();
const PORT = process.argv[2] || process.env.port || 3000;

// The express library uses the morgan dependency and outputs default data to the terminal
// Generates the Path to the folder indicated in the ' ', after __dirname
// Listening to port and console logs message
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
// });
app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/company/companyInfo', companyRoute);
app.use('/job', jobRoute);
// app.use('/application', applicationRoute);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});



app.listen(PORT, () => console.log('server here! listening on', PORT));
