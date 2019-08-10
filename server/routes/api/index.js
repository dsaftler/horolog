const models = require('../../models');
const router = require('express').Router();
const userRoutes = require('./user-routes');
const blockRoutes = require('./block-routes');
const clientRoutes = require('./client-routes');
const projectRoutes = require('./project-routes');
// const login = require('./login');
// const logout = require('./logout');
// const signup = require('./signup')

router.use('/block-routes',blockRoutes);
router.use('/client-routes',clientRoutes);
router.use('/project-routes',projectRoutes);
router.use('/user-routes',userRoutes);
// router.use('/signup',userRoutes);
// router.use('/login',userRoutes.login);
// router.use('/logout',logout)




module.exports = router;