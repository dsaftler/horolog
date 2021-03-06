// TODO change the router setup
const dbUser = require("express").Router();
const userController = require("../controllers/userController");


// Matches with "/users/"
dbUser.route("/signup/permissions/:permissionId")
  .post(userController.signup);
// dbUser.route('/login')
//   .post(userController.login);
dbUser.route("/signup/checkEmailExists")
  .get(userController.checkEmailExists);
  
dbUser.route('/logout')
  .post(userController.logout);

// // Matches with "/api/books/:id"
dbUser.route("/:id")
  .get(userController.findByPk)
  .put(userController.update)
  .delete(userController.remove);

module.exports = dbUser;