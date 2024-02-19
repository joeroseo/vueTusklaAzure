module.exports = app => {
  const cart = require("../controllers/cart.controller.js");

  var router = require("express").Router();

  // Create a new Cart
  router.post("/", cart.create);

  // Retrieve all Carts
  router.get("/", cart.findAll);

  // Retrieve all published Carts
  router.get("/published", cart.findAllPublished);

  // Retrieve a single Cart with id
  router.get("/:id", cart.findOne);

  // Update a Cart with id
  router.put("/:id", cart.update);

  // Delete a Cart with id
  router.delete("/:id", cart.delete);

  // Delete all Carts
  router.delete("/", cart.deleteAll);

  app.use('/api/cart', router);
};
