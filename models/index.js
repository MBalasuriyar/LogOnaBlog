const User = require("./User");
const Comment = require("./Comment");
const BlogPost = require("./BlogPost");

//everything belongs to everything else, or it has what belongs to it

User.hasMany(BlogPost, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

BlogPost.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(BlogPost, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

BlogPost.hasMany(Comment, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  BlogPost,
  Comment,
  User,
};
