// TODO change the router setup
const dbProjects = require("express").Router();
const projectController = require("../controllers/projectController");

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

module.exports = dbProjects;