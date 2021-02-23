'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProductPrices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      share_free_type: {
        type: Sequelize.STRING,
      },
      share_fee: {
        type: Sequelize.STRING,
      },
      is_visible: {
        type: Sequelize.BOOLEAN,
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
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
    await queryInterface.dropTable('ProductPrices');
  },
};
