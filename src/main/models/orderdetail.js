'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class OrderDetail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Orders, { foreignKey: 'order_id', as: 'Orders' })
            this.belongsTo(models.Products, { foreignKey: 'product_id', as: 'Products' })
        }
    };
    OrderDetail.init({
        order_id: DataTypes.STRING,
        product_id: DataTypes.INTEGER,
        qty: DataTypes.INTEGER,
        price: DataTypes.DOUBLE
    }, {
        sequelize,
        modelName: 'OrderDetail',
    });
    return OrderDetail;
};