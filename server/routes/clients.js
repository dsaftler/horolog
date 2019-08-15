// TODO change the router setup
const dbClients = require("express").Router();
const clientController = require("../controllers/clientController");

dbClients.route("/")
  .post(clientController.create)
  .get(clientController.findAll);

// Matches with "/api/blocks/:id"
// router
dbClients.route("/clients:id")
  .get(clientController.findByPk)
  .put(clientController.update)
  .delete(clientController.destroy);
// console.log('block-routes')

module.exports = dbClients;