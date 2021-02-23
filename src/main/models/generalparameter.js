'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GeneralParameter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Member, {
        foreignKey: 'parent_id',
      });
    }
  }
  GeneralParameter.init(
    {
      parent_id: DataTypes.INTEGER,
      type_parameter: DataTypes.STRING,
      code: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      value: DataTypes.STRING,
      tag: DataTypes.STRING,
      pos: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'GeneralParameter',
    }
  );
  return GeneralParameter;
};
