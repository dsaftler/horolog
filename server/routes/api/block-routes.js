// TODO change the router setup
const dbBlocks = require("express").Router();
const blockController = require("../../controllers/blockController");

// Matches with "/api/blocks"
dbBlocks.route("/blocks")
 .get(blockController.findAll)
 .post(blockController.create);

// Matches with "/api/blocks/:id"
// router
dbBlocks.route("/blocks:id")
  .get(blockController.findByPk)
  .put(blockController.update)
  .delete(blockController.destroy);
// console.log('block-routes')
module.exports = dbBlocks;
