'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Member, { foreignKey: 'member_id', as: 'Members' })
            this.belongsTo(models.Member, { foreignKey: 'partner_id', as: 'Members' })
            this.belongsTo(models.OrderType, { foreignKey: 'ordertype_id', as: 'OrderType' })

        }
    };
    Order.init({
        member_id: DataTypes.INTEGER,
        partner_id: DataTypes.INTEGER,
        complaint: DataTypes.STRING,
        note: DataTypes.STRING,
        admin_fee: DataTypes.DOUBLE,
        sub_total: DataTypes.DOUBLE,
        total: DataTypes.DOUBLE,
        order_status: DataTypes.INTEGER,
        order_date: DataTypes.DATE,
        ordertype_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};