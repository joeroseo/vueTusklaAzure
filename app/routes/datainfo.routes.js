module.exports = app => {
  const datainfo = require("../controllers/datainfo.controller.js");

  var router = require("express").Router();

  // Create a new Parameter
  router.post("/", datainfo.create);

  // Retrieve all Parameter
  router.get("/", datainfo.findAll);

  // Retrieve all published Parameters
  router.get("/published", datainfo.findAllPublished);

  // Retrieve a single Parameter with an Id
  router.get("/:id", datainfo.findByPk);

  // Update a Parameter with id
  router.put("/:id", datainfo.update);

  // Delete a Parameter with email
  router.delete("/:id", datainfo.delete);

  // Delete all Parameters
  router.delete("/", datainfo.deleteAll);

  app.use('/api/datainfo', router);
};
