'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Role, { as: "role", foreignKey: "role_id"});
      this.belongsTo(models.User, { as: "user", foreignKey: "user_id"});
    }
  };
  UserRole.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "primary key",
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "user.id",
      references: {
        model: 'users',
        key: 'id'
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "role.id",
      references: {
        model: 'role',
        key: 'id'
      }
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
    modelName: 'UserRole',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_role_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return UserRole;
};