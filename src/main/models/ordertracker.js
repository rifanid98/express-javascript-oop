'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class OrderTracker extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Orders, { foreignKey: 'order_id', as: 'Orders' })
            this.belongsTo(models.OrderStatus, { foreignKey: 'orderstatus_id', as: 'OrderStatus' })
        }
    };
    OrderTracker.init({
        order_id: DataTypes.STRING,
        orderstatus_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        description: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'OrderTracker',
    });
    return OrderTracker;
};