'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedicalRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Member, {
        foreignKey: 'member_id',
      });
      this.belongsTo(models.Patient, {
        foreignKey: 'patient_id',
      });
      this.belongsTo(models.Category, {
        foreignKey: 'category_id',
      });
    }
  }
  MedicalRecord.init(
    {
      anamnesis_type: DataTypes.STRING,
      subjective: DataTypes.STRING,
      objective: DataTypes.STRING,
      diagnosis: DataTypes.TEXT,
      medicine: DataTypes.TEXT,
      followup_note: DataTypes.TEXT,
      member_id: DataTypes.INTEGER,
      patient_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'MedicalRecord',
      paranoid: true,
      deletedAt: 'deleted_at',
    }
  );
  return MedicalRecord;
};
