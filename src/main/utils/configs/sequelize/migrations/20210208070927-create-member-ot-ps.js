'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MemberOTPs', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "member otp id",
        primaryKey: true
      },
      member_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "member.id",
        references: {
          model: 'Members',
          key: 'id'
        }
      },
      otp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "member otp"
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
      tableName: 'MemberOTPs',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "member_otp_pk",
          unique: true,
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MemberOTPs');
  }
};