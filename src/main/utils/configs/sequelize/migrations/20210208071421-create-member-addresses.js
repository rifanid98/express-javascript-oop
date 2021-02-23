'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MemberAddresses', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "member address id",
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
      name: {
        type: Sequelize.STRING(25),
        allowNull: true,
        comment: "member address name"
      },
      address: {
        type: Sequelize.STRING(512),
        allowNull: false,
        comment: "member address"
      },
      geo_laltitude: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        comment: "member address geolocation latitude"
      },
      geo_longitude: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        comment: "member address geolocation longitude"
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
      tableName: 'MemberAddresses',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "member_address_pk",
          unique: true,
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MemberAddresses');
  }
};