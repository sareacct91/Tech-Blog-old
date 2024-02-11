const { User } = require("../models");
const { BadRequestError } = require("../utils/errors");

async function renderLogin(req, res) {
  res.render('login');
};

async function renderSignUp(req, res) {
  res.render('signup');
};

async function renderDashboard(req, res) {
  res.status(200).json({ msg: 'ok' });
};




async function createUser(req, res) {
  const { name, password } = req.body;

  if (!(name, password)) {
    throw new BadRequestError('Missing username or password');
  }

  const resultData = await User.create({ name, password });
  const user = resultData.toJSON();

  console.log(user);

  req.session.save(() => {
    req.session.user_id = user.id;
    req.session.loggedIn = true;

    console.log(req.session);

    res.redirect('/');
  });
};

async function login(req, res) {

};

async function logout(req, res) {

};


module.exports = {
  createUser,
  logout,
  login,
  renderLogin,
  renderSignUp,
  renderDashboard,

}