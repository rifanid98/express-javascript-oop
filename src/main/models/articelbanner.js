'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArticelBanner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: 'category_id',
      });
    }
  }
  ArticelBanner.init(
    {
      type: DataTypes.STRING,
      title: DataTypes.STRING,
      image_id: DataTypes.STRING,
      image: DataTypes.STRING,
      postdate: DataTypes.DATE,
      text_html: DataTypes.TEXT,
      description: DataTypes.TEXT,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ArticelBanner',
    }
  );
  return ArticelBanner;
};
