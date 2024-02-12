const userAuth = (req, res, next) => req.session.loggedIn ? next() : res.redirect('/users/login');

module.exports = userAuth;