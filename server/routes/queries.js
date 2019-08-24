const qryController = require('../controllers/qryController')
const dbQueries = require("express").Router();

dbQueries.route("/timesheet")
  .get(qryController.timesheet);
// console.log('from queries/timesheet')
dbQueries.route("/report")
.get(qryController.report);
// console.log('from queries/report')
module.exports = dbQueries;


//! here changes to 'submitted & booked'  and queries for specific reports including timesheet & report_params
// qryRoutes.route("/projects:id")
//   .get(qryController.findByPk)
//   .put(qryController.update)
//   .delete(qryController.destroy);



// const connection = mysql.createConnection({
//   database: "horolog",
//   user: "root",
//   password: "P35c@d0r3",
//   host: "localhost"
// });
// connection.connect(err => {
//   if (err) {
//     console.log(err)
//   }
// })
// const qryAll = "SELECT * from blocks"
// app.get('/test', (req, res) => {
//   connection.query(qryAll, (err, results) => {
//     if (err) {
//       return res.send(err)
//     } else {
//       console.log(results)
//       return res.json({
//         data: results
//       })
//     }
//   }
//   )
// })