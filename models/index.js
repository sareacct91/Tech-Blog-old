const Blog = require("./Blog");
const Comment = require("./Comment");
const User = require("./User");

User.hasMany(Blog, { foreignKey: { name: 'user_id', allowNull: false } });
Blog.belongsTo(User);
User.belongsToMany(Blog, { through: 'user_blog', uniqueKey: 'user_id' });


User.hasMany(Comment, { foreignKey: { name: 'user_id', allowNull: false } });
Comment.belongsTo(User);
User.belongsToMany(Comment, { through: 'user_comment', uniqueKey: 'user_id' });

Blog.hasMany(Comment, { foreignKey: { name: 'blog_id', allowNull: false } });
Comment.belongsTo(Blog);

module.exports = {
  User,
  Blog,
  Comment
}