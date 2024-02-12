function slog(req, res, next) {
  console.log('\n', req.session, '\n');
  next();
}

module.exports = slog;