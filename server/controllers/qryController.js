const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // GET route for getting all of the block
  timesheet: function (req, res) {
    console.log('from qryController: timesheet')
    db.blocks.findAll({ 
      // include: [
      //   { model: User, where: { id: req.params.userId } },
      //   { model: Project, where: {id: req.params.projectId}},
      //   { model: Client, where: {id: req.params.clientId}}
      // ]
      // return query.then(blocks => res.json(blocks))
    })
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  },
  report: function (req, res) {
    console.log('from qryController: reports')
    db.blocks.findAll({})
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  }
}