//TODO convert this to MySQL
const db = require("../models");

module.exports = function (app) {
  // GET route for getting all of the client
  app.get("/api/clients/", function (req, res) {
    db.Client.findAll({})
      .then(function (dbClient) {
        res.json(dbClient);
      });
  });
  // Get route for retrieving a single client
  app.get("/api/clients/:id", function (req, res) {
    db.Client.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbClient) {
        res.json(dbClient);
      });
  });
  // POST route for saving a new client
  //  is_active should be set to default  values
  app.post("/api/clients", function (req, res) {
    console.log(req.body);
    db.Client.create({
      name: req.body.name
    })
      .then(function (dbClient) {
        res.json(dbClient);
      });
  });
  app.delete("/api/clients/:id", function (req, res) {
    db.Client.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbClient) {
        res.json(dbClient);
      });
  });
  // PUT route for updating client
  app.put("/api/client", function (req, res) {
    db.Client.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbClient) {
        res.json(dbClient);
      });
  });
};
