'use strict';
const { Model, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.UserRole, {
        as: 'user_roles',
        foreignKey: 'user_id',
      });
      this.hasMany(models.Member, { as: 'members', foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'primary key',
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(25),
        allowNull: false,
        comment: 'user name',
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'user password',
      },
      picture: {
        type: DataTypes.STRING(512),
        allowNull: true,
        comment: 'user picture',
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'user email',
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        comment: 'created date',
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        comment: 'updated date',
      },
    },
    {
      sequelize,
      modelName: 'User',
      timestamps: false,
      indexes: [
        {
          name: 'users_pk',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );
  return User;
};
