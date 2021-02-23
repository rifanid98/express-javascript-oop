'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrderTrackers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      order_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Orders',
          key: 'id',
        },
      },
      orderstatus_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'OrderStatuses',
          key: 'id',
        },
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('OrderTrackers');
  },
};
