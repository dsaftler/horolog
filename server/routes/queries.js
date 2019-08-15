const qryController = require('../controllers/qryController')
const qryRoutes = require("express").Router();

qryRoutes.route("/queries/timesheet")
  .get(qryController.timesheet);
console.log('from queries/timesheet')
qryRoutes.route("/queries/report")
  .get(qryController.report);
console.log('from queries/report')
//! here changes to 'submitted & booked'  and queries for specific reports including timesheet & report_params
// qryRoutes.route("/projects:id")
//   .get(qryController.findByPk)
//   .put(qryController.update)
//   .delete(qryController.destroy);

module.exports = qryRoutes;