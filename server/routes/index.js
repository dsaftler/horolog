const models = require('../models');
const express = require('express');
const path = require("path");
const router = require("express").Router(); 
const apiRoutes = require('./api');
console.log('included');
// API Routes
router.use("/api", apiRoutes);
router.get("/test", () => console.log('test'));
//  
// If no API routes are hit, send the React app
// router.use(function (req, res) {
//   // res.sendFile(path.join(__dirname, "../client/build/index.html"));

//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });
module.exports = router;
