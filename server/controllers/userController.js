//TODO convert this to MySQL
const Sequelize = require('sequelize')
const SQLValues = require('sequelize-values')()
const validate = require('validate.js');
const db = require('../models');
const passport = require("../config/passport");

module.exports = {
// module.exports = function (app)
  signup: function (req, res) {    
    console.log(`userController.signup ${req.body.lastname}`);
    const body = req.body;
    db.users.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password1,
      permissionId: req.params.permissionId
    })
    .then(function () {
      return res.redirect('/login')
      return res.status(200).res.jsonp([body])
        // { message: "user created", userid: users.id  });
        })
    .catch(function (err) {
      console.log(JSON.parse(JSON.stringify(err)));
      return res.redirect('/signup')
    })
  },
  login: function (req, res) {
    app.post("/", function (req, res, next) {
      passport.authenticate("local", {
        successRedirect: "/blocks",
        failureRedirect: "/users/login"
      })
        // .then {
          //  req.session.userId = res.userId
          // send info as json
          (req, res, next);
        });
      },
  logout: function (req, res) {
    req.logout();
    res.redirect("/");
  },
  update: function (req, res) {
    db.users.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
    }
  }
      // app.put("/user", function (req, res) {
      //   db.User.update(req.body,
      //     {
      //       where: {
      //         id: req.body.id
      //       }
      //     })
      //     .then(function (dbUser) {
      //       res.json(dbUser);
      //     });
      // });
    // .catch(function (err) {
  //   return res.status(400).json({ message: "issues trying to connect to database" });
  //     })
  // .then(newUser => {
  //     console.log(`New user ${newUser.firstname}, with id ${newUser.id} has been created.`);
  //     res.redirect(307, "/users/login");
  // })
  // .catch(function (err) {
  //   console.log(err);
  //   res.status(401).json(err);
  //   })
  // .then(function (dbUser) {
  //   res.json(dbUser);
      
  // app.get("/logout", function (req, res) {
  //   req.logout();
  //   res.redirect("/");
  // });


  //!User
 //!   .findOrCreate({ username: 'sdepold' }, { job: 'Technical Lead JavaScript' })
  //! .success(function (user, created) {
 //!     console.log(user.values)
 //!    console.log(created)

      /*
        {
          username: 'sdepold',
          job: 'Technical Lead JavaScript',
          id: 1,
          createdAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET),
          updatedAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET)
        }
        created: true
      // Notice that the success callback has two arguments.When using promises you should call spread(API ref) instead of then, since then will only recieve the first argument(the DAO), while spread will recieve both the DAO, and the created boolean.
  //!  })
  //! User.findAll({ include: [Task] }).success(function (users) {
  //   console.log(JSON.stringify(users))
  // Notice that the accessor of the associated data is the name of the model in camelcase with lowercased first character.Also the accessor is singular as the association is one - to - something.


    /*
      // [{
        "name": "John Doe",
        "id": 1,
        "createdAt": "2013-03-20T20:31:45.000Z",
        "updatedAt": "2013-03-20T20:31:45.000Z",
        // "tasks": [{
          "name": "A Task",
          "id": 1,
          "createdAt": "2013-03-20T20:31:40.000Z",
          "updatedAt": "2013-03-20T20:31:40.000Z",
          "UserId": 1
      //   }]
      // }]
    */
  //! })
  //! User.findAll({ include: [Task] }).success(function (users) {
    // console.log(JSON.stringify(users))
  // Notice that the accessor is plural.This is because the association is many - to - something.
    /*
      // [{
        "name": "John Doe",
        "id": 1,
        "createdAt": "2013-03-20T20:31:45.000Z",
        "updatedAt": "2013-03-20T20:31:45.000Z",
        // "tasks": [{
          "name": "A Task",
          "id": 1,
          "createdAt": "2013-03-20T20:31:40.000Z",
          "updatedAt": "2013-03-20T20:31:40.000Z",
          "UserId": 1
      //   }]
      // }]
    */
  //! })
  // GET route for getting all of the user
  // app.get("/users/", function (req, res) {
  //   console.log(`api users`);
    
  //   db.User.findAll({})
  //     .then(function (dbUser) {
  //       res.json(dbUser);
  //     });
  // });
  // // Get route for retrieving a single user
  // // app.get("/users/:id", function (req, res) {
  //   db.User.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function (dbUser) {
  //       res.json(dbUser);
  //     });
  // });
  // // POST route for saving a new user
  // // bdate and is_archived should be set to default values
  //   app.post('/signup', function (req, res) {
  //     console.log(req);
      
  //     db.User.create ({
  //     firstname: req.body.firstname,
  //     lastname: req.body.lastname,
  //     email: req.body.email,
  //     password: req.body.password
  //     })
  //     // role: req.body.role
  //     // .then(function () {
  //    .then(newUser => {
  //         console.log(`New user ${newUser.firstname}, with id ${newUser.id} has been created.`);
  //       })
  //     .catch(function (err) {
  //       res.status(401).json(err);
  //       console.log(err);
  //     })
  //        // .then(function (dbUser) {
  //       //   res.json(dbUser);
    
  //   })
  // app.delete("/users/:id", function (req, res) {
  //   db.User.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function (dbUser) {
  //       res.json(dbUser);
  //     });
  // });
  // // PUT route for updating user
