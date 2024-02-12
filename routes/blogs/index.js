const router = require('express').Router();
const c = require('../../controllers/blogsController');

router.route('/')
  .get(c.renderNewBlog)
  .post(c.createBlog)

router.route('/:id')
  .get(c.getBlog)


module.exports = router;