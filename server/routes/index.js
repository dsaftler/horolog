// const models = require('../models');
const express = require('express');
const path = require("path");
const router = require("express").Router(); 
// const apiRoutes = require('./api');
const userRoutes = require('./users');
const blockRoutes = require('./blocks');
const clientRoutes = require('./clients');
const projectRoutes = require('./projects');
// console.log('included');
// API Routes
// router.use("/api", apiRoutes);
// router.get("/test", () => console.log('test'));
//  
// If no API routes are hit, send the React app
// router.use(function (req, res) {
//   // res.sendFile(path.join(__dirname, "../client/build/index.html"));
router.use('/blocks', blockRoutes);
router.use('/clients', clientRoutes);
router.use('/projects', projectRoutes);
router.use('/users', userRoutes);
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });
module.exports = router;
