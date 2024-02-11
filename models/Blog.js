const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Blog extends Model { };

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    createdAt: true,
    updatedAt: true,
    modelName: 'blog',
  }
);

module.exports = Blog;