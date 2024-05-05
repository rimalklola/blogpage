// models/comment.js

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      rating: {
        type: DataTypes.INTEGER
      }
    });
  
    Comment.associate = models => {
      Comment.belongsTo(models.BlogPost, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Comment;
  };
  