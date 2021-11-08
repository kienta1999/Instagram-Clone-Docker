module.exports = (sequelize, Sequelize, User) => {
  const Post = sequelize.define("post", {
    content: {
      type: Sequelize.TEXT,
    },
  });
  Post.belongsTo(User);
  // Same: User.hasOne(Post)

  return Post;
};

// Player.belongsTo(Team)  // `teamId` will be added on Player / Source model
// Coach.hasOne(Team)  // `coachId` will be added on Team / Target model
