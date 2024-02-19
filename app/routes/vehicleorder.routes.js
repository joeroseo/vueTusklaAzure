module.exports = app => {
  const vehicleorders = require("../controllers/vehicleorder.controller.js");

  var router = require("express").Router();

  // Create a new Orders
  router.post("/", vehicleorders.create);

  // Retrieve all Orders
  router.get("/", vehicleorders.findAll);

  // Retrieve all published Orderss
  router.get("/published", vehicleorders.findAllPublished);

  // Retrieve a single Orders with id
  router.get("/:order_id", vehicleorders.findOne);

  // Update a Orders with id
  router.put("/:order_id", vehicleorders.update);

  // Delete a Orders with id
  router.delete("/:order_id", vehicleorders.delete);

  // Delete all Orderss
  router.delete("/", vehicleorders.deleteAll);

  app.use('/api/vehicleorders', router);
};
