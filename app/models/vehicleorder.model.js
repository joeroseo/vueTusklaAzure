module.exports = (sequelize, Sequelize) => {
  const VehicleOrder = sequelize.define("vehicleorder", {
    item: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.STRING
    },
    order_id: {
      type: Sequelize.STRING
    }
  });

  return VehicleOrder;
};