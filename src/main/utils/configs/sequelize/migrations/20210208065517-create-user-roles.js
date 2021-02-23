'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserRoles', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "primary key",
        primaryKey: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "user.id",
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "role.id",
        references: {
          model: 'Roles',
          key: 'id'
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        comment: "created date"
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        comment: "updated date"
      }
    }, {
      sequelize: Sequelize,
      tableName: 'UserRoles',
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserRoles');
  }
};