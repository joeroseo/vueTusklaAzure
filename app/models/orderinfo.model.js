module.exports = (sequelize, Sequelize) => {
  const OrderInfo = sequelize.define("orderinfo", {
    email: {
      type: Sequelize.STRING
    },
    fname: {
      type: Sequelize.STRING
    },
    lname: {
      type: Sequelize.STRING
    },
    street: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    zip: {
      type: Sequelize.STRING
    },
    order_id: {
      type: Sequelize.STRING
    },

    subtotal: {
      type: Sequelize.DECIMAL(10, 2)
    },
    tax: {
      type: Sequelize.DECIMAL(10, 2)
    },
    shipping: {
      type: Sequelize.DECIMAL(10, 2)
    },
    total: {
      type: Sequelize.DECIMAL(10, 2)
    },
    status: {
      type: Sequelize.STRING
    }    




  });

  return OrderInfo;
};