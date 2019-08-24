//TODO convert this to MySQL
const db = require("../models");

// Defining methods for the booksController
module.exports =  {
  create: function (req, res) {
    const body = req.body;
    console.log(`projectController.project ${req.body.brief}`);
    console.log(`projectController.ClientId ${req.param.clientId}`);
 
    db.projects.create({
      brief: req.body.brief,
      narrative: req.body.narrative,
      defclass: req.body.defclass,
      clientId: req.params.clientId
    })
      .then(function (dbProject) {
        res.json(dbProject);
      });
  },
  findActive: function (req, res) {
    const where = {
      'clients.is_active': 1
    };
      db.projects.findAll({
        where:  is_archived === 0
      })
    .then(function (dbProject) {
      res.json(dbProject);
    });
  },
  // .get("/projects/", 
  findAll: function (req, res) {
    db.projects.findAll({})
      .then(function (dbProject) {
        res.json(dbProject);
      });
  },
  // Get route for retrieving a single project
  // app.get("/projects/:id", 
  findByPk: function (req, res) {
    db.projects.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbProject) {
        res.json(dbProject);
      });
  },
  // POST route for saving a new project
  //  is_active should be set to default  values
  // app.post("/projects", 
  update: function (req, res) {
    console.log(req.body);
    // app.put("/project", function (req, res) {
    db.projects.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbProject) {
        res.json(dbProject);
      });
  },

  // app.delete("/projects/:id", 
  destroy: function (req, res) {
    db.projects.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbProject) {
        res.json(dbProject);
      });
  }
