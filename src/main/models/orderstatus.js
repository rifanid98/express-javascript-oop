'use strict';
module.exports = (sequelize, DataTypes) => {
    const OrderStatus = sequelize.define('OrderStatus', {
        ordertype_id: DataTypes.INTEGER,
        membertype_id: DataTypes.INTEGER,
        code: DataTypes.STRING,
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        pos: DataTypes.INTEGER,
        sql_script: DataTypes.STRING,
        is_visible: DataTypes.BOOLEAN
    }, {});
    OrderStatus.associate = function(models) {
        OrderStatus.belongsTo(models.MemberType, { foreignKey: 'membertype_id', as: 'MemberType' })
        OrderStatus.belongsTo(models.OrderType, { foreignKey: 'ordertype_id', as: 'OrderType' })
    };
    return OrderStatus;
};