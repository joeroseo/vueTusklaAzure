const db = require("../models");
const VehicleOrder = db.vehicleorders;
const Op = db.Sequelize.Op;

// Create and Save a new VehicleOrder
exports.create = (req, res) => {
  // Validate request

  // Create a VehicleOrder
  const vehicleorder = {
    item: req.body.item,
    price: req.body.price,
    order_id: req.body.order_id
  };

  // Save VehicleOrder in the database
  VehicleOrder.create(vehicleorder)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the VehicleOrder."
      });
    });
};

// Retrieve all VehicleOrders from the database.
exports.findAll = (req, res) => {
  const order_id = req.query.order_id;
  var condition = order_id ? { order_id: { [Op.like]: `%${order_id}%` } } : null;

  VehicleOrder.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving orders."
      });
    });
};

// Find a single VehicleOrder with an id
exports.findOne = (req, res) => {
  const order_id = req.params.order_id;

  VehicleOrder.findByPk(order_id)
    .then(data => {
      if (data) {
        //res.send(data);
        res.json(data);
      } else {
        res.status(404).send({
          message: `Cannot find VehicleOrder with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving VehicleOrder with id=" + id
      });
    });
};

// Update a VehicleOrder by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  VehicleOrder.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "VehicleOrder was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update VehicleOrder with id=${id}. Maybe VehicleOrder was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating VehicleOrder with id=" + id
      });
    });
};

// Delete a VehicleOrder with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  VehicleOrder.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "VehicleOrder was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete VehicleOrder with id=${id}. Maybe VehicleOrder was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete VehicleOrder with id=" + id
      });
    });
};

// Delete all VehicleOrders from the database.
exports.deleteAll = (req, res) => {
  VehicleOrder.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} VehicleOrders were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all orders."
      });
    });
};

// find all published VehicleOrder
exports.findAllPublished = (req, res) => {
  VehicleOrder.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving orders."
      });
    });
};
