//TODO convert this to MySQL
const Sequelize = require('sequelize')
const SQLValues = require('sequelize-values')()
const db = require("../models");
console.log('clientController');

module.exports = {
  // GET route for getting all of the client
  create: function (req, res) {
    const body = req.body;
    console.log(`clientController.client ${req.body.name}`);
      db.clients.create({
        name: req.body.name,
      })
    .then(function (dbClient) {
      res.json(dbClient);
    });
  },
    // .get("/clients/", 
  findAll: function (req, res) {  
    db.clients.findAll({})
      .then(function (dbClient) {
        res.json(dbClient);
      });
  },
  // Get route for retrieving a single client
  // app.get("/clients/:id", 
  findByPk: function (req, res) {
    db.clients.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function (dbClient) {
      res.json(dbClient);
    });
  },
  // POST route for saving a new client
  //  is_active should be set to default  values
  // app.post("/clients", 
  update: function (req, res) {
    console.log(req.body);
    // app.put("/client", function (req, res) {
      db.clients.update(req.body,
        {
          where: {
            id: req.body.id
          }
        })
        .then(function (dbClient) {
          res.json(dbClient);
        });
  },

  // app.delete("/clients/:id", 
  destroy: function (req, res) {
    db.clients.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbClient) {
        res.json(dbClient);
      });
  }
  // PUT route for updating client
}
