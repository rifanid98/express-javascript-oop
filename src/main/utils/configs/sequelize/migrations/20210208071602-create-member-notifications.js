'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MemberNotifications', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "member notification id",
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
      title: {
        type: Sequelize.STRING(25),
        allowNull: false,
        comment: "member notification title"
      },
      description: {
        type: Sequelize.STRING(512),
        allowNull: true,
        comment: "member notification description"
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "member notification type"
      },
      type_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: "member notification type id"
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "member notification status"
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
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, {
      sequelize: Sequelize,
      tableName: 'MemberNotifications',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "member_notification_pk",
          unique: true,
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MemberNotifications');
  }
};