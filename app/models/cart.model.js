module.exports = (sequelize, Sequelize) => {
  const Cart = sequelize.define("cart", {
    subtotal: {
      type: Sequelize.STRING
    },
    tax: {
      type: Sequelize.STRING
    },
    total: {
      type: Sequelize.STRING
    }
  });

  return Cart;
};