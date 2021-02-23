'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.MedicalRecord);
      this.belongsTo(models.Member, {
        foreignKey: 'member_id',
      });
    }
  }
  Patient.init(
    {
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthdate: DataTypes.DATEONLY,
      birthplace: DataTypes.STRING,
      disease_history_alergy: DataTypes.STRING,
      picture: DataTypes.STRING,
      member_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Patient',
      paranoid: true,
      deletedAt: 'deleted_at',
    }
  );
  return Patient;
};
