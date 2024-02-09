const { Model, DataTypes } = require('sequelize');

class Comment extends Model { };

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
  sequelize,
  createdAt: true,
  underscored: true,
  freezeTableName: true,
  modelName: 'comment',
}
);

module.exports = Comment;