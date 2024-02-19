module.exports = (sequelize, Sequelize) => {
  const VehicleOrderInfo = sequelize.define("vehicleorderinfo", {
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
      type: Sequelize.STRING
    },
    tax: {
      type: Sequelize.STRING
    },
    shipping: {
      type: Sequelize.STRING
    },
    total: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    }    




  });

  return VehicleOrderInfo;
};