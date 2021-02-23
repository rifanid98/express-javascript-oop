'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      birthdate: {
        type: Sequelize.DATE,
      },
      birthplace: {
        type: Sequelize.STRING,
      },
      disease_history_alergy: {
        type: Sequelize.STRING,
      },
      picture: {
        type: Sequelize.STRING,
      },
      member_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Members',
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
    await queryInterface.dropTable('Patients');
  },
};
