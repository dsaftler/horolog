// TODO change the router setup
const dbBlocks = require("express").Router();
const blockController = require("../controllers/blockController");

// Matches with "/api/blocks"

dbBlocks.route("/users/:userId/projects/:projectId")
.post(blockController.create);

// Matches with "/api/blocks/:id"
// router
dbBlocks.route('/users/:userId')
  .get(blockController.findByUser)

dbBlocks.route("/:id")
  .get(blockController.findByPk)
  .put(blockController.update)
  .delete(blockController.destroy);
// console.log('block-routes')

dbBlocks.route('/projects/:projectId')
  .get(blockController.findByProject);

module.exports = dbBlocks;
