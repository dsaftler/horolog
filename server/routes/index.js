const models = require('../models');
const express = require('express');
const path = require("path");
const router = require("express").Router(); const apiRoutes = require('./api');

// API Routes
router.use("./api", apiRoutes);
// TODO this is where I will determine whether the user is logged in, and if not, will present login form : and if, will determine whether there is an open block and if, will present a closeblock or if not, will present an new block  -- right now this just goes to the blank index.html
//  
// If no API routes are hit, send the React app
router.use(function (req, res) {
  // res.sendFile(path.join(__dirname, "../client/build/index.html"));

  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
