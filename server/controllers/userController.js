//TODO convert this to MySQL
// const Sequelize = require('sequelize')
// const SQLValues = require('sequelize-values')()
// const validate = require('validate.js');
const db = require('../models');
// const passport = require("../config/passport");

module.exports = {

 emailExists: async function(req,res) {
  // prevent duplicate of email
  // return use if exists, false if not taken
    const body = req.body;
    console.log(req.body.email);
    if (req.email === null || req.email === undefined) {
      throw new Error('No email was passed in')
    }
    const user = await db.users.findOne({
      where: { email }
    });

    if (user) { return user };
   },
  signup: function (req, res) {    
    console.log(`userController.signup ${req.body.lastname}`);
    debugger
    console.log(`userController.signup ${req.params.permissions}`);
    const body = req.body;
    // if (emailExists(req.body.email)) {
    //   console.log(`Email exists ${req.body.email}`)
    // } else {
    db.users.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password1,
        permissionId: req.params.permissionId
      })
      .then(function (dbUser) {
        res.json(dbUser);
      })
      .catch(function (err) {
        console.log(JSON.parse(JSON.stringify(err)));
        return res.redirect('/signup')
      });
  },
 
  logout: function (req, res) {
    req.logout();
    res.redirect("/");
  },
  findByPk: function (req, res) {
    db.users.findByPk({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  },
  update: function (req, res) {
    db.users.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  },
  remove:  function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  }
}
