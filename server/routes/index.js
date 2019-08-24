
const express = require('express');
const path = require("path");
const router = require("express").Router(); 

const authRoutes = require('./auth');
const blockRoutes = require('./blocks');
const clientRoutes = require('./clients');
const projectRoutes = require('./projects');
const qryRoutes = require('./queries')
const userRoutes = require('./users');
// API Routes
router.use('/auth', authRoutes) // just calls Passport from .auth
router.use('/blocks', blockRoutes); // dbBlocks
router.use('/clients', clientRoutes); //dbClients
router.use('/projects', projectRoutes); //dbProjects
router.use('/queries', qryRoutes); //dbQueries
router.use('/users', userRoutes); //dbUsers


module.exports = router;
