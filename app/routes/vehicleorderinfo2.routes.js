module.exports = app => {
  const vehicleorderinfo2 = require("../controllers/vehicleorderinfo2.controller.js");

  var router = require("express").Router();

  // Create a new OrderInfo
  router.post("/", vehicleorderinfo2.create);

  // Retrieve all OrderInfo
  router.get("/", vehicleorderinfo2.findAll);

  // Retrieve all published OrderInfos
  router.get("/published", vehicleorderinfo2.findAllPublished);

  // Retrieve a single OrderInfo with email
  router.get("/:email", vehicleorderinfo2.findOne);

  // Update a OrderInfo with email
  router.put("/:email", vehicleorderinfo2.update);

  // Delete a OrderInfo with email
  router.delete("/:email", vehicleorderinfo2.delete);

  // Delete all OrderInfos
  router.delete("/", vehicleorderinfo2.deleteAll);

  app.use('/api/vehicleorderinfo2', router);
};
