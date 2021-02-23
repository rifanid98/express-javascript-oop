'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MemberType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Member, { as: "members", foreignKey: "member_type_id"});
    }
  };
  MemberType.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "member type id",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      comment: "member type name"
    },
    is_third_party: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "is third party"
    },
    is_order: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "is order"
    },
    is_visible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "is visible"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "created date"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "updated date"
    }
  }, {
    sequelize,
    modelName: 'MemberType',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "member_type_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return MemberType;
};