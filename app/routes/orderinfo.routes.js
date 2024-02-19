module.exports = app => {
  const orderinfo = require("../controllers/orderinfo.controller.js");

  var router = require("express").Router();

  // Create a new OrderInfo
  router.post("/", orderinfo.create);

  // Retrieve all OrderInfo
  router.get("/", orderinfo.findAll);

  // Retrieve all published OrderInfos
  router.get("/published", orderinfo.findAllPublished);

  // Retrieve a single OrderInfo with order_id
  router.get("/:order_id", orderinfo.findOne);

  // Update a OrderInfo with order_id
  router.put("/:id", orderinfo.update);

  // Delete a OrderInfo with order_id
  router.delete("/:order_id", orderinfo.delete);

  // Delete all OrderInfos
  router.delete("/", orderinfo.deleteAll);

  app.use('/api/orderinfo', router);
};
