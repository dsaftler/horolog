//TODO convert this to MySQL
const db = require("../models");

// Defining methods for the booksController
module.exports = function (app) {
  // GET route for getting all of the project
  app.get("/api/projects/", function (req, res) {
    db.Project.findAll({})
      .then(function (dbProject) {
        res.json(dbProject);
      });
  });
    // Get route for retrieving a single project
  app.get("/api/projects/:id", function (req, res) {
    db.Project.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbProject) {
        res.json(dbProject);
      });
  });
  // POST route for saving a new project
  // bdate and is_archived should be set to default values
  app.post("/api/projects", function (req, res) {
    console.log(req.body);
    db.Project.create({
      brief: req.body.brief,
      narrative: req.body.narrative,
      defclass: req.body.defclass
    })
      .then(function (dbProject) {
        res.json(dbProject);
      });
  });
  app.delete("/api/projects/:id", function (req, res) {
    db.Project.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbProject) {
        res.json(dbProject);
      });
  });
  // PUT route for updating project
  app.put("/api/project", function (req, res) {
    db.Project.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbProject) {
        res.json(dbProject);
      });
  });
};
