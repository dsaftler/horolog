//TODO convert this to MySQL
const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // GET route for getting all of the block
  findByUser: function (req, res) {
    db.blocks.findAll({
      include: [
        { model: User, where: { id: req.params.userId } }
      ]
      // return query.then(blocks => res.json(blocks))
    })
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  },
  findAll: function (req, res) {
    db.blocks.findAll({})
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  },
  // Get route for retrieving a single block
  findByPk:  function (req, res) {
    db.blocks.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  },
  findByProject: function (req, res) {
    db.blocks.findOne({
      where: {
        projectId: req.params.id
      }
    })
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  },
  // POST route for saving a new block
  // bdate, minutes, edate, is_submitted & is_booked should be set to default  values
 create:  function (req, res) {
   const body = req.body
    console.log(`User id ${req.body.userId}`);
   console.log(`Project id ${req.body.projectId}`);
    // User.findById(body.userId)
    //    .then(() => blocks.create(body))
      //  .then(blog => Promise.all(tags).then(storedTags => blog.addTags(storedTags)).then(() => blog))
      //  .then(blog => Blog.findOne({ where: { id: blog.id }, include: [User, Tag] }))
      //  .then(blogWithAssociations => res.json(blogWithAssociations))
      //  .catch(err => res.status(400).json({ err: `User with id = [${body.userId}] doesn\'t exist.` }))
    db.blocks.create({
      notes: req.body.notes,
      curclass: req.body.curclass,
      projectId: req.body.projectId,
      userId: req.body.userId
    })
    .then(function (dbBlock) {
        res.json(dbBlock);
      });
    // todo : how do I pass in the foreign key projectId and userId?
    // https://stackoverflow.com/questions/52776491/unable-to-insert-id-into-a-table-that-belongs-to-a-foreign-key-referenced-table

  },
  destroy: function (req, res) {
    db.blocks.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  },
  // PUT route for updating block
  update:  function (req, res) {
    db.blocks.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbBlock) {
        res.json(dbBlock);
      });
  }
};