'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MedicalRecords', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      anamnesis_type: {
        type: Sequelize.STRING,
      },
      subjective: {
        type: Sequelize.STRING,
      },
      objective: {
        type: Sequelize.STRING,
      },
      diagnosis: {
        type: Sequelize.TEXT,
      },
      medicine: {
        type: Sequelize.TEXT,
      },
      followup_note: {
        type: Sequelize.TEXT,
      },
      member_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Members',
          key: 'id',
        },
      },
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Patients',
          key: 'id',
        },
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
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
    await queryInterface.dropTable('MedicalRecords');
  },
};
