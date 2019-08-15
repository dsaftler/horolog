
const express = require('express');
const path = require("path");
const router = require("express").Router(); 

const userRoutes = require('./users');
const blockRoutes = require('./blocks');
const clientRoutes = require('./clients');
const projectRoutes = require('./projects');
const qryRoutes = require('./queries')
// API Routes
router.use('/blocks', blockRoutes);
router.use('/clients', clientRoutes);
router.use('/projects', projectRoutes);
router.use('/queries', qryRoutes)
router.use('/users', userRoutes);

//  
// If no API routes are hit, send the React app

module.exports = router;
