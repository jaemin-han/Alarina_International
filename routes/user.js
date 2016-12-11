const express = require('express');
const { createUser, getUserInfo } = require('../models/user.js');
// deleteUser, editUser, getUserByUsername, getUserInfo
const userRoute = express.Router();

// Route to create a new user upon login
userRoute.post('/', createUser, (req, res) => {
  res.send('user added');
  // res.status 204
});

// Route to get user information
userRoute.get('/:id', getUserInfo, (req, res) => {
  res.send('user all');
  // res.json(res.users);
});

module.exports = userRoute;
