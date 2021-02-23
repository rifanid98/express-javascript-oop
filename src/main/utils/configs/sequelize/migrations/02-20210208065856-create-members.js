'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Members', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "member.id",
        primaryKey: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "user.id",
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      member_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "member_type.id",
        references: {
          model: 'MemberTypes',
          key: 'id'
        }
      },
      phone: {
        type: Sequelize.STRING(15),
        allowNull: false,
        comment: "member phone"
      },
      field_name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "member field name"
      },
      gender: {
        type: Sequelize.ENUM("L", "P"),
        allowNull: false,
        comment: "ENUM('P,'L')"
      },
      birth_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        comment: "member birth date"
      },
      birth_place: {
        type: Sequelize.STRING(187),
        allowNull: true,
        comment: "member birth place"
      },
      religion: {
        type: Sequelize.STRING(10),
        allowNull: true,
        comment: "member religion"
      },
      status: {
        type: Sequelize.ENUM("active", "inactive", "pending"),
        allowNull: false,
        defaultValue: "pending",
        comment: "ENUM('active','inactive','pending')"
      },
      geo_latitude: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        comment: "member geolocation latitude"
      },
      geo_longitude: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        comment: "member geolocation longitude"
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
      sequelize:Sequelize,
      tableName: 'Members',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "member_pk",
          unique: true,
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Members');
  }
};