'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Payments', {
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
      paymenttype_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'PaymentTypes',
          key: 'id',
        },
      },
      amount: {
        type: Sequelize.DOUBLE,
      },
      data: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      transaction_id: {
        type: Sequelize.STRING,
      },
      transaction_time: {
        type: Sequelize.DATE,
      },
      transaction_status: {
        type: Sequelize.STRING,
      },
      status_message: {
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
    await queryInterface.dropTable('Payments');
  },
};
