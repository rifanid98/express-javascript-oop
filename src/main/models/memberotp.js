'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MemberOTP extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Member, { as: "member", foreignKey: "member_id"});
    }
  };
  MemberOTP.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "member otp id",
      primaryKey: true
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "member.id",
      references: {
        model: 'member',
        key: 'id'
      }
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "member otp"
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
    modelName: 'MemberOTP',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "member_otp_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return MemberOTP;
};