//TODO convert this to MySQL
const db = require("../models");

module.exports = function (app) {
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
