const { Sequelize } = require('sequelize');

const URL = process.env.JAWSDB_URL || process.env.DB_URI;

const sequelize = new Sequelize(URL);

module.exports = sequelize;