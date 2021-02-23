'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ChatMessages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
      message: {
        type: Sequelize.TEXT,
      },
      data: {
        type: Sequelize.STRING,
      },
      sent_at: {
        type: Sequelize.DATE,
      },
      order_id: {
        type: Sequelize.INTEGER,
      },
      member_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Members',
          key: 'id',
        },
      },
      membertype_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MemberTypes',
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
    await queryInterface.dropTable('ChatMessages');
  },
};
