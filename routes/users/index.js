const c = require('../../controllers/usersControllers');
const userAuth = require('../../middlewares/auth');

const router = require('express').Router();

router.route('/signup')
  .get(c.renderSignUp)
  .post(c.createUser)

router.route('/login')
  .get(c.renderLogin)
  .post(c.userLogin)

router.route('/logout')
  .get(c.userLogout)

router.route('/dashboard')
  .get(userAuth, c.renderDashboard)

module.exports = router;