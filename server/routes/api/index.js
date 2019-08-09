const models = require('../../models');
const router = require('express').Router();
const blockRoutes = require('./block-routes');

router.use('/block-routes',blockRoutes);

router.get('/', function (req, res) {
  models.User.findAll({
    include: [models.Project]
  }).then(function (users) {
    res.render('./../../../client/src/pages/block.js', {
      title: 'Sequelize: Express Example',
      users: users
    });
  });
});



module.exports = router;