//TODO convert this to MySQL
const db = require("../models");

// Defining methods for the booksController
module.exports = function (app) {
  // GET route for getting all of the block
  app.get("/api/blocks/", function (req, res) {
    db.Block.findAll({})
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  });
  // Get route for retrieving a single block
  app.get("/api/blocks/:id", function (req, res) {
    db.Block.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  });
  // POST route for saving a new block
  // bdate, minutes, edate, is_submitted & is_booked should be set to default  values
  app.post("/api/blocks", function (req, res) {
    console.log(req.body);
    db.Block.create({
      notes: req.body.notes,
      curclass: req.body.curclass
    })
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  });
  app.delete("/api/blocks/:id", function (req, res) {
    db.Block.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  });
  // PUT route for updating block
  app.put("/api/block", function (req, res) {
    db.Block.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  });
};