'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.UserRole, { as: "user_roles", foreignKey: "role_id"});
    }
  };
  Role.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "primary key",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(13),
      allowNull: false,
      comment: "role name"
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "is admin"
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
    modelName: 'Role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "role_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return Role;
};