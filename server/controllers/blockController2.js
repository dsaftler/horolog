//TODO convert this to MySQL
const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // GET route for getting all of the block
  findAll: function (req, res) {
    db.Block.findAll({})
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  },
  // Get route for retrieving a single block
  findByPk:  function (req, res) {
    db.Block.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  },
  // POST route for saving a new block
  // bdate, minutes, edate, is_submitted & is_booked should be set to default  values
 create:  function (req, res) {
    console.log(req.body);
    db.Block.create({
      notes: req.body.notes,
      curclass: req.body.curclass
    })
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  },
  destroy: function (req, res) {
    db.Block.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  },
  // PUT route for updating block
  update:  function (req, res) {
    db.Block.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  }
};