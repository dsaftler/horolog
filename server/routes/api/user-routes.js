// TODO change the router setup
const dbUser = require("express").Router();
const userController = require("../../controllers/userController");


// Matches with "/user-routes/signup"
dbUser.route("/signup")
  .post(userController.signup);
dbUser.route('/login')
  .post(userController.login);
dbUser.route('/logout')
  .post(userController.logout);
// // Matches with "/api/books/:id"
dbUser.route("/:id")
  // .get(userController.findById)
  // .put(userController.update)
  // .delete(userController.remove);

module.exports = dbUser;