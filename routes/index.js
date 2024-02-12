const { renderHomePage } = require('../controllers');
const usersRoutes = require('./users');
const blogsRoutes = require('./blogs');

const router = require('express').Router();


router.get('/', renderHomePage);
router.use('/users', usersRoutes);
router.use('/blogs', blogsRoutes);

module.exports = router;