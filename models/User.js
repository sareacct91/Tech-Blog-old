const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
class User extends Model {
  async checkPW(user) {
    return await bcrypt.compare(user.password, this.password);
  }
};

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      async beforeCreate(user) {
        user.password = await bcrypt.hash(user.password, 10);
        return user;
      },
      async beforeUpdate(user) {
        user.password = await bcrypt.hash(user.password, 10);
        return user;
      }
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    createdAt: true,
    updatedAt: true,
    modelName: 'user',
  }
);

module.exports = User;