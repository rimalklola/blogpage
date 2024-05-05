// models/category.js
//models is for defining data models//
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Category;
  };
  