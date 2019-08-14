// TODO change the router setup
const projectController=require('../controllers/projectController')
const dbProjects = require("express").Router();

dbProjects.route("/projects")
  .post(projectController.create)
  .get(projectController.findAll);
console.log('from dbProjects')
// Matches with "/api/blocks/:id"
// router
dbProjects.route("/projects:id")
  .get(projectController.findByPk)
  .put(projectController.update)
  .delete(projectController.destroy);
// console.log('block-routes')

module.exports = dbProjects;