const c = require('../../controllers/usersControllers');

const router = require('express').Router();

router.route('/signup')
  .get(c.renderSignUp)
  .post(c.createUser)

router.route('/login')
  .get(c.renderLogin)
  .post(c.login)

router.route('/logout')
  .post(c.logout)

router.route('/dashboard')
  .get(c.renderDashboard)

module.exports = router;