module.exports = app => {
  const orderinfo2 = require("../controllers/orderinfo2.controller.js");

  var router = require("express").Router();

  // Create a new OrderInfo
  router.post("/", orderinfo2.create);

  // Retrieve all OrderInfo
  router.get("/", orderinfo2.findAll);

  // Retrieve all published OrderInfos
  router.get("/published", orderinfo2.findAllPublished);

  // Retrieve a single OrderInfo with email
  router.get("/:email", orderinfo2.findOne);

  // Update a OrderInfo with email
  router.put("/:email", orderinfo2.update);

  // Delete a OrderInfo with email
  router.delete("/:email", orderinfo2.delete);

  // Delete all OrderInfos
  router.delete("/", orderinfo2.deleteAll);

  app.use('/api/orderinfo2', router);
};
