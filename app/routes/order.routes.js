module.exports = app => {
  const orders = require("../controllers/order.controller.js");

  var router = require("express").Router();

  // Create a new Orders
  router.post("/", orders.create);

  // Retrieve all Orders
  router.get("/", orders.findAll);

  // Retrieve all published Orderss
  router.get("/published", orders.findAllPublished);

  // Retrieve a single Orders with id
  router.get("/:order_id", orders.findOne);

  // Update a Orders with id
  router.put("/:order_id", orders.update);

  // Delete a Orders with id
  router.delete("/:order_id", orders.delete);

  // Delete all Orderss
  router.delete("/", orders.deleteAll);

  app.use('/api/orders', router);
};
