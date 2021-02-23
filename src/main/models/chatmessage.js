'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Order, {
        foreignKey: 'order_id',
      });
      this.belongsTo(models.Member, {
        foreignKey: 'member_id',
      });
      this.belongsTo(models.MemberType, {
        foreignKey: 'membertype_id',
      });
    }
  }
  ChatMessage.init(
    {
      type: DataTypes.STRING,
      message: DataTypes.TEXT,
      data: DataTypes.STRING,
      sent_at: DataTypes.DATE,
      order_id: DataTypes.INTEGER,
      member_id: DataTypes.INTEGER,
      membertype_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ChatMessage',
    }
  );
  return ChatMessage;
};
