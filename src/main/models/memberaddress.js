'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MemberAddress extends Model {
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
  MemberAddress.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "member address id",
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
    name: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "member address name"
    },
    address: {
      type: DataTypes.STRING(512),
      allowNull: false,
      comment: "member address"
    },
    geo_laltitude: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: "member address geolocation latitude"
    },
    geo_longitude: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: "member address geolocation longitude"
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
    modelName: 'MemberAddress',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "member_address_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return MemberAddress;
};