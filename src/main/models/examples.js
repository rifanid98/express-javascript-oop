'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Examples extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Examples.init({
    field1: DataTypes.STRING,
    field2: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Examples',
    underscored: true,
  });
  return Examples;
};