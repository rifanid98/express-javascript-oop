'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrderType.init({
    name: DataTypes.STRING,
    descripton: DataTypes.STRING,
    is_visible: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'OrderType',
  });
  return OrderType;
};