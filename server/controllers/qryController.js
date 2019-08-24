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
  },


// here we tell the engine we're working async
  apiGetAll: async function (req, res) {
    try {
    // here we tell the engine to PAUSE EXECUTION and wait for a response
    // once it has a reponse, assign it to the variable 'resp' and continue
    const resp = await fetch(URL)
      console.log(resp)
    // this code will NOT run until 'resp' has been assigned
    // and then the program will PAUSE until it gets a reponse
    const data = await response.json()

    // this code only runs when data is assigned.
      return data
    } catch (err) {
      console.log(err)
    }
  }  
};
