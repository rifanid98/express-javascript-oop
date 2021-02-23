'use strict';
module.exports = (sequelize, DataTypes) => {
    const OrderTypeMapping = sequelize.define('OrderTypeMapping', {
        membertype_id: DataTypes.INTEGER,
        partnertype_id: DataTypes.INTEGER,
        catogoryproduct_id: DataTypes.INTEGER,
        ordertype_id: DataTypes.INTEGER,
        is_visible: DataTypes.BOOLEAN
    }, {});
    OrderTypeMapping.associate = function(models) {
        OrderTypeMapping.belongsTo(models.MemberType, { foreignKey: 'membertype_id', as: 'MemberType' })
        OrderTypeMapping.belongsTo(models.MemberType, { foreignKey: 'partnertype_id', as: 'MemberType' })
        OrderTypeMapping.belongsTo(models.CategoryProduct, { foreignKey: 'catogoryproduct_id', as: 'CategoryProduct' })
        OrderTypeMapping.belongsTo(models.OrderType, { foreignKey: 'ordertype_id', as: 'OrderType' })
    };
    return OrderTypeMapping;
};