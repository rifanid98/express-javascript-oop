'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.MedicalRecord);
      this.hasMany(models.Product);
      this.hasMany(models.OrderTypeMapping);
      this.hasMany(models.ProductPrice);
      this.belongsTo(models.Member, {
        foreignKey: 'parent_id',
      });
    }
  }
  Category.init(
    {
      parent_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      icon_id: DataTypes.INTEGER,
      icon_url: DataTypes.STRING,
      sort_order: DataTypes.STRING,
      is_visible: DataTypes.BOOLEAN,
      use_consumable: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Category',
    }
  );
  return Category;
};
