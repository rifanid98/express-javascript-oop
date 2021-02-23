'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      member_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Members',
          key: 'id',
        },
      },
      partner_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Members',
          key: 'id',
        },
      },
      complaint: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.STRING,
      },
      admin_fee: {
        type: Sequelize.DOUBLE,
      },
      sub_total: {
        type: Sequelize.DOUBLE,
      },
      total: {
        type: Sequelize.DOUBLE,
      },
      order_status: {
        type: Sequelize.INTEGER,
      },
      order_date: {
        type: Sequelize.DATE,
      },
      ordertype_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'OrderTypes',
          key: 'id',
        },
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
    await queryInterface.dropTable('Orders');
  },
};
