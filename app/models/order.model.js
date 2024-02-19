module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    item: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.DECIMAL(10, 2)
    },
    quantity: {
      type: Sequelize.INTEGER  
    },
    itemTotal: {
      type: Sequelize.DECIMAL(10, 2)
    },    
    order_id: {
      type: Sequelize.STRING
    }
  });

  return Order;
};