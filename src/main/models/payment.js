'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Payment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Orders, { foreignKey: 'order_id', as: 'Orders' })
            this.belongsTo(models.PaymentTypes, { foreignKey: 'paymenttype_id', as: 'PaymentTypes' })
        }
    };
    Payment.init({
        order_id: DataTypes.STRING,
        paymenttype_id: DataTypes.INTEGER,
        amount: DataTypes.DOUBLE,
        data: DataTypes.STRING,
        status: DataTypes.STRING,
        transaction_id: DataTypes.STRING,
        transaction_time: DataTypes.DATE,
        transaction_status: DataTypes.STRING,
        status_message: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Payment',
    });
    return Payment;
};