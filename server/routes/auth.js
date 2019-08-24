const passport = require('../config/middleware/passport');
const db = require("../models");
const dbAuth = require("express").Router();
const authController = require("../controllers/authController");

// Matches with "/auth/"
dbAuth.route('/login')
  .post(authController.login);
dbAuth.route('/authRequired')
  .get(authController.authenticated)
dbAuth.route('/logout')
  .post(authController.logout); 

module.exports = dbAuth;
