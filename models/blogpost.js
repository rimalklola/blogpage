// models/blogPost.js

module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      imageURL: {
        type: DataTypes.STRING
      }
    });
  
    BlogPost.associate = models => {
      BlogPost.belongsTo(models.Category, {
        foreignKey: {
          allowNull: false
        }
      });
      BlogPost.hasMany(models.Comment);
    };
  
    return BlogPost;
  };
  