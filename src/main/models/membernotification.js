'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MemberNotification extends Model {
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
  MemberNotification.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "member notification id",
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
    title: {
      type: DataTypes.STRING(25),
      allowNull: false,
      comment: "member notification title"
    },
    description: {
      type: DataTypes.STRING(512),
      allowNull: true,
      comment: "member notification description"
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "member notification type"
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "member notification type id"
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "member notification status"
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
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    modelName: 'MemberNotification',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "member_notification_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return MemberNotification;
};