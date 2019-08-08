const router = require('express').Router();
const blockRoutes = require('./block-routes');

router.use('/block-routes',blockRoutes);
module.exports = router;