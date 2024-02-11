const { Blog, User } = require('../models');

async function homePage(req, res) {
  const data = await Blog.findAll({ include: User });
  console.log(data);

  const loggedIn = req.session.loggedIn;
  console.log(req.session);

  res.render('home', { loggedIn });
};

module.exports = {
  homePage,
}