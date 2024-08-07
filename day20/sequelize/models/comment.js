


const Sequelize = require("sequelize");

class Comment extends Sequelize.Model {
  static initiate(sequelize) {
    Comment.init(
      {
        comment: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.NOW,
        },
        commenter: {
          type: Sequelize.INTEGER.UNSIGNED, // 외래 키 타입
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Comment",
        tableName: "Comments",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });
  }
}

module.exports = Comment;