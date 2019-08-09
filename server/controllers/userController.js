//TODO convert this to MySQL
const db = require("../models");
console.log('userController');

module.exports = function (app) {
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
  app.get("/api/users/", function (req, res) {
    db.User.findAll({})
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });
  // Get route for retrieving a single user
  app.get("/api/users/:id", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });
  // POST route for saving a new user
  // bdate and is_archived should be set to default values
  app.post("/api/users", function (req, res) {
    console.log(req.body);
    db.User.create({
      username: req.body.username,
      password: req.body.password,
      role: req.body.role
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });
  app.delete("/api/users/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });
  // PUT route for updating user
  app.put("/api/user", function (req, res) {
    db.User.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });
};
