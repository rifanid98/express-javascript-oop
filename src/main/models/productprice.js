'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductPrice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: 'category_id',
      });
      this.belongsTo(models.Member, {
        foreignKey: 'member_id',
      });
      this.belongsTo(models.MemberType, {
        foreignKey: 'membertype_id',
      });
    }
  }
  ProductPrice.init(
    {
      price: DataTypes.INTEGER,
      share_free_type: DataTypes.STRING,
      share_fee: DataTypes.STRING,
      is_visible: DataTypes.BOOLEAN,
      category_id: DataTypes.INTEGER,
      member_id: DataTypes.INTEGER,
      membertype_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ProductPrice',
    }
  );
  return ProductPrice;
};
