'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrderStatuses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ordertype_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'OrderTypes',
          key: 'id',
        },
      },
      membertype_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Members',
          key: 'id',
        },
      },
      code: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      pos: {
        type: Sequelize.INTEGER,
      },
      sql_script: {
        type: Sequelize.STRING,
      },
      is_visible: {
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OrderStatuses');
  },
};
