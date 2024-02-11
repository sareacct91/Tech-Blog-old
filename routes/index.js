const { homePage } = require('../controllers');
const usersRoutes = require('./users');

const router = require('express').Router();

router.get('/', homePage);
router.use('/users', usersRoutes);

module.exports = router;