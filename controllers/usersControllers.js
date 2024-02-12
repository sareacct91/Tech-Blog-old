const { User } = require("../models");
const { BadRequestError, NotFoundError, UnauthorizedError } = require("../utils/errors");

async function renderLogin(req, res) {
  res.render('login');
};

async function renderSignUp(req, res) {
  res.render('signup');
};

async function renderDashboard(req, res) {
  res.render('dashboard', {loggedIn: req.session.loggedIn});
};

async function createUser(req, res) {
  const { name, password } = req.body;

  if (!(name && password)) {
    throw new BadRequestError('Missing username or password');
  }

  const resultData = await User.create({ name, password });
  const user = resultData.toJSON();


  req.session.save(() => {
    req.session.user_id = user.id;
    req.session.loggedIn = true;

    console.log(req.session);

    res.redirect('/users/dashboard');
  });
};

async function userLogin(req, res) {
  const { name, password } = req.body;

  console.log('\n', name, password, '\n');

  if (!(name && password)) {
    throw new BadRequestError('Missing username or password');
  }

  const user = await User.findOne({ where: { name } , raw: true});

  if (!user) {
    throw new UnauthorizedError('Unauthorized');
  }

  req.session.save(() => {
    req.session.user_id = user.id;
    req.session.loggedIn = true;

    res.redirect('/users/dashboard');
  })
};

async function userLogout(req, res) {
  req.session.destroy(() => {
    res.redirect('/');
  })
};


module.exports = {
  createUser,
  userLogout,
  userLogin,
  renderLogin,
  renderSignUp,
  renderDashboard,

}