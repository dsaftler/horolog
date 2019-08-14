//TODO convert this to MySQL
const db = require("../models");

// Defining methods for the booksController
module.exports =  {
  create: function (req, res) {
    const body = req.body;
    console.log(`projectController.project ${req.body.name}`);
 
    db.projects.create({
      brief: req.body.brief,
      narrative: req.body.narrative,
      defclass: req.body.defclass
    })
      .then(function (dbProject) {
        res.json(dbProject);
      });
  },
  // .get("/projects/", 
  findAll: function (req, res) {
    db.projects.findAll({})
      .then(function (dbProject) {
        res.json(dbProject);
      });
  },
  // Get route for retrieving a single project
  // app.get("/projects/:id", 
  findByPk: function (req, res) {
    db.projects.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbProject) {
        res.json(dbProject);
      });
  },
  // POST route for saving a new project
  //  is_active should be set to default  values
  // app.post("/projects", 
  update: function (req, res) {
    console.log(req.body);
    // app.put("/project", function (req, res) {
    db.projects.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbProject) {
        res.json(dbProject);
      });
  },

  // app.delete("/projects/:id", 
  destroy: function (req, res) {
    db.projects.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbProject) {
        res.json(dbProject);
      });
  }
}      
  // search for known ids
  //!Project.find(123).success(function (project) {
    // project will be an instance of Project and stores the content of the table entry
    // with id 123. if such an entry is not defined you will get null
  //! })

  // search for attributes
 //! Project.find({ where: { title: 'aProject' } }).success(function (project) {
    // project will be the first entry of the Projects table with the title 'aProject' || null
  //! })

  // since v1.3.0: only select some attributes and rename one
  //! Project.find({
  //!  where: { title: 'aProject' },
  //!   attributes: ['id', ['name', 'title']]
  //! }).success(function (project) {
    // project will be the first entry of the Projects table with the title 'aProject' || null
    // project.title will contain the name of the project
  //!})

// find multiple entries
//! Project.findAll().success(function (projects) {
//   // projects will be an array of all Project instances
//! })

// also possible:
//! Project.all().success(function (projects) {
//   // projects will be an array of all Project instances
//! })

//! search for specific attributes - hash usage
//! Project.findAll({ where: { name: 'A Project' } }).success(function (projects) {
//   // projects will be an array of Project instances with the specified name
//! })

// !search with string replacements
//! Project.findAll({ where: ["id > ?", 25] }).success(function (projects) {
//   // projects will be an array of Projects having a greater id than 25
//! })

// // search within a specific range
//! Project.findAll({ where: { id: [1, 2, 3] } }).success(function (projects) {
//   // projects will be an array of Projects having the id 1, 2 or 3
//   // this is actually doing an IN query
//! })

// // or
//!Project.findAll({ where: "name = 'A Project'" }).success(function (projects) {
//   // the difference between this and the usage of hashes (objects) is, that string usage
//   // is not sql injection safe. so make sure you know what you are doing!
//! })

// // since v1.7.0 we can now improve our where searches
//! Project.findAll({
//!  where: {
//!     id: {
//!       gt: 6,              // id > 6
//!      gte: 6,             // id >= 6
//!       lt: 10,             // id < 10
//!     lte: 10,            // id
//   // GET route for getting all of the project
//! Project.find({
//!  where: Sequelize.and(
//!     { name: 'a project' },
//!     Sequelize.or(
//!       { id: [1, 2, 3] },
//!       { id: { lt: 10 } }
//!     )
//!   )
//! })
// SELECT *
//   FROM`Projects`
// WHERE(
//   `Projects`.`name` = 'a project'
//    AND(`Projects`.`id` IN(1, 2, 3) OR`Projects`.`id` < 10)
// )
// LIMIT 1
//   ;
//! step over the first 10 elements, and take 2
//! Project.findAll({ offset: 10, limit: 2 })
// !Project.findAll({ order: 'title DESC' })
// yields ORDER BY title DESC

// !Project.findAll({ group: 'name' })
// yields GROUP BY name
// something.find({
//   order: [
//     'name',
//     // will return `name`
//     'username DESC',
//     // will return `username DESC` -- i.e. don't do it!
//     ['username', 'DESC'],
//     // will return `username` DESC
//     sequelize.fn('max', sequelize.col('age')),
//     // will return max(`age`)
//     [sequelize.fn('max', sequelize.col('age')), 'DESC'],
//     // will return max(`age`) DESC
//     [sequelize.fn('otherfunction', sequelize.col('col1'), 12, 'lalala'), 'DESC'],
//     // will return otherfunction(`col1`, 12, 'lalala') DESC
//     [sequelize.fn('otherfunction', sequelize.fn('awesomefunction', sequelize.col('col'))), 'DESC']
//     // will return otherfunction(awesomefunction(`col`)) DESC, This nesting is potentially infinite!
//     [{ raw: 'otherfunction(awesomefunction(`col`))' }, 'DESC']
//     // This won't be quoted, but direction will be added
//   ]
// })
// String - will be quoted
// Array - first element will be qouted, second will be appended verbatim
// Object -
//   Raw will be added verbatim without quoting
// Everything else is ignored, and if raw is not set, the query will fail
// Sequelize.fn and Sequelize.col returns functions and quoted cols
/*
  Let's assume 3 person objects with an attribute age.
  The first one is 10 years old,
  the second one is 5 years old,
  the third one is 40 years old.
*/
//! Project.sum('age').success(function (sum) {
  // this will return 55
//! })

//! Project.sum('age', { where: { age: { gt: 5 } } }).success(function (sum) {
  // wil be 50
//! })

  // POST route for saving a new project
  // bdate and is_archived should be set to default values
