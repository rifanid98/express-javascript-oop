'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MemberToken extends Model {
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
  MemberToken.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "member token id",
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
    token: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "member token"
    },
    user_agent: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "member token user agent"
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
    modelName: 'MemberToken',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "member_token_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return MemberToken;
};