const passport = require('../config/middleware/passport');
const db = require("../models");

module.exports = {
test: function (req, res) {
    console.log('Inside POST /login callback function')
    console.log(req.body.email)
    res.send(`You posted to the login page!\n`)
  },
login: function (req, res, next) {
    console.log(`authController.email ${req.body.email}`);
    console.log(`authController.password ${req.body.password}`);
  passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
      res.redirect('/');
    };

  // passport.authenticate("local", {
  //   successRedirect: "/block",
  //   failureRedirect: "/login"
  // })(req, res, next);
    // passport.authenticate('local',
    //   function (req, res) {
    //     res.status(200).send('logged in!');
    //   };
//           console.log('inside passport' + req.body.email);
// ) 
//       (req, res, next)
  },
      // const { email, state, zip, username, uid }= req.body;
      // console.log(req.session);
      // res.send(req.session);
      // console.log(dbUser);
      // return res.redirect('../api/billtrack50/billsJson.js')
    // });passport.authenticate("local"),
    //  function (req, res) {
    //    // If this function gets called, authentication was successful.
    //    // `req.user` contains the authenticated user.

    //    res.redirect('/blocks/');
    //   }(req, res, next);

    // }(req, res, next);
    // const { email, state, zip, username, uid }= req.body;
    // console.log(req.session);
    // res.send(req.session);
    // console.log(dbUser);
    // return res.redirect('../api/billtrack50/billsJson.js')
 
  // login: function( req,res, next){ passport.authenticate('local'),
  //   function (req, res) {
  //     successRedirect: "/blocks",
  //       failureRedirect: "/login"
      // If this function gets called, authentication was successful.
      // `req.user` property contains the authenticated user.
    // },
  // login: function (req, res, next) {
  //   console.log(`authController.login ${req.body.email}`);
  
  //     passport.authenticate('local', {
  //       successRedirect: "/blocks",
  //       failureRedirect: "/login"
  //     })
  //     console.log(`req.user: ${JSON.stringify(res.user)}`)
  //    (req, res,next);
  // },
  authenticated:  function (req,res) {
    {
      if (req.isAuthenticated()) {
        res.send('you hit the authentication endpoint\n');
      } else {
        res.redirect('/login');
      }
    };
  },
  logout: function (req, res) {
    req.logout();
    res.redirect('/');
  }

}