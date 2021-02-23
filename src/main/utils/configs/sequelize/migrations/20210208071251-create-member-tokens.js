'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MemberTokens', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "member token id",
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
      token: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment: "member token"
      },
      user_agent: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment: "member token user agent"
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
      tableName: 'MemberTokens',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "member_token_pk",
          unique: true,
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MemberTokens');
  }
};