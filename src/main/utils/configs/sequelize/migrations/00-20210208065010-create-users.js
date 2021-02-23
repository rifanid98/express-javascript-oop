'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'primary key',
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(25),
        allowNull: false,
        comment: 'user name',
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: 'user password',
      },
      picture: {
        type: Sequelize.STRING(512),
        allowNull: true,
        comment: 'user picture',
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        comment: 'user email',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        comment: 'created date',
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        comment: 'updated date',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};
