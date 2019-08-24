//TODO convert this to MySQL
const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // GET route for getting all of the block
  create:  function (req, res) {
    const body = req.body
     console.log(`User id ${req.params.userId}`);
    console.log(`Project id ${req.params.projectId}`);
    db.blocks.create({
      notes: req.body.notes,
      curclass: req.body.curclass,
      projectId: req.params.projectId,
      userId: req.params.userId
    })
    .then(function (dbBlock) {
        res.json(dbBlock);
      });
   },
  findByUser: function (req, res) {
    db.blocks.findAll({
      include: [
        { model: User, where: { id: req.params.userId } }
      ]
      // return query.then(blocks => res.json(blocks))
    })
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  },
  findAll: function (req, res) {
    db.blocks.findAll({})
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  },
  // Get route for retrieving a single block
  findByPk:  function (req, res) {
    db.blocks.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  },
  findByProject: function (req, res) {
    db.blocks.findOne({
      where: {
        projectId: req.params.id
      }
    })
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  },
  // POST route for saving a new block
  // bdate, minutes, edate, is_submitted & is_booked should be set to default  values
  destroy: function (req, res) {
    db.blocks.destroy({
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
    db.blocks.update(req.body,
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