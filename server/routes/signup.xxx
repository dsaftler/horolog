let db = require('../../models');
let passport = require('../../config/passport');
module.exports = app =>{
  app.post('../api/signup', function (req, res) {
    db.User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email
      password: req.body.password
    
      // role: req.body.role
    })
    .then(function () {
      res.redirect(307, '../api/login');
    })
    .catch(function (err) {
      res.status(401).json(err);
      console.log(err);
    });
    console.log(db.User);
  });
  app.post('../api/login', function (req, res, next) {
    passport.authenticate("local", {
      successRedirect: "/blocks",
      failureRedirect: "/login"
    }) (req, res, next);
  });
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
  app.get('../api/user_data', function(req, res) {
 
    if(!req.user) {
      // not logged in, send back empty obj
      res.json({})
    } else {
      console.log(res);
      res.json({ 
        id: req.user.id,
        role: req.user.role
      });      
    }
  });   
};
