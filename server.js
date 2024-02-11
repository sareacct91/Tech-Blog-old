require('express-async-errors');
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const { create } = require('express-handlebars');
const path = require('path');
const routes = require('./routes');
const errorHandler = require('./middlewares/error-handler');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT;
const hbs = create({ extname: 'hbs' });

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));

app.use(session({
  secret: process.env.SESS_SECRET,
  cookie: {
    maxAge: 60 * 60 * 24 * 1000,
  },
  saveUninitialized: false,
  resave: false,
  store: new SequelizeStore({ db: sequelize }),
}));

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(routes);
app.use(errorHandler);

(async function () {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));

  } catch (error) {
    console.log(error);
  }
})();