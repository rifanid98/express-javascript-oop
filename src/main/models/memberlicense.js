'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MemberLicense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Member, {
        foreignKey: 'member_id',
      });
    }
  }
  MemberLicense.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      license_number: DataTypes.STRING,
      expired_date: DataTypes.DATE,
      member_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'MemberLicense',
    }
  );
  return MemberLicense;
};
