module.exports = app => {
  const vehicleorderinfo = require("../controllers/vehicleorderinfo.controller.js");

  var router = require("express").Router();

  // Create a new VehicleOrderInfo
  router.post("/", vehicleorderinfo.create);

  // Retrieve all VehicleOrderInfo
  router.get("/", vehicleorderinfo.findAll);

  // Retrieve all published VehicleOrderInfos
  router.get("/published", vehicleorderinfo.findAllPublished);

  // Retrieve a single VehicleOrderInfo with order_id
  router.get("/:order_id", vehicleorderinfo.findOne);

  // Update a VehicleOrderInfo with order_id
  router.put("/:id", vehicleorderinfo.update);

  // Delete a VehicleOrderInfo with order_id
  router.delete("/:order_id", vehicleorderinfo.delete);

  // Delete all VehicleOrderInfos
  router.delete("/", vehicleorderinfo.deleteAll);

  app.use('/api/vehicleorderinfo', router);
};
