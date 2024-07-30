
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Sequelize.Model {}

  Comment.init({
    comment: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.NOW,
    },
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comment2',
    timestamps: false,
  });

  Comment.associate = function(db) {
    db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });
  };

  return Comment;
};
