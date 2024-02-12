const { Blog, User } = require('../models');

async function renderHomePage(req, res) {
  const blogs = await Blog.findAll({ include: User, raw: true });
  console.log(blogs);

  const { loggedIn } = req.session;

  res.render('home', { loggedIn });
};

module.exports = {
  renderHomePage,
}