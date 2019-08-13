// TODO change the router setup
const dbClients = require("express").Router();
const clientController = require("../controllers/clientController");

// Matches with "/api/books"
// router.route("/")
//   .get(blocksController.findAll)
//   .post(blocksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(blocksController.findById)
//   .put(blocksController.update)
//   .delete(blocksController.remove);

module.exports = dbClients;