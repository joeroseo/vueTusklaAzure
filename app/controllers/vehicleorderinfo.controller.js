const db = require("../models");
const VehicleOrderInfo = db.vehicleorderinfo;
const Op = db.Sequelize.Op;

// Create and Save a new VehicleOrderInfo
exports.create = (req, res) => {
  // 
  if (!req.body.order_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a VehicleOrderInfo
  const vehicleorderinfo = {
    email: req.body.email,
    fname: req.body.fname,
    lname: req.body.lname,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    order_id: req.body.order_id,
    subtotal: req.body.subtotal,
    tax: req.body.tax,
    shipping: req.body.shipping,
    total: req.body.total,
    status: req.body.status
  };

  // Save VehicleOrderInfo in the database
  VehicleOrderInfo.create(vehicleorderinfo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the VehicleOrderInfo."
      });
    });
};

// Retrieve all VehicleOrderInfo from the database.
exports.findAll = (req, res) => {
  const order_id = req.query.order_id;
  var condition = order_id ? { order_id: { [Op.like]: `%${order_id}%` } } : null;

  VehicleOrderInfo.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving vehicleorderinfos."
      });
    });
};

// Find a single VehicleOrderInfo with an order_id
exports.findOne = (req, res) => {
  const order_id = req.params.order_id;

  VehicleOrderInfo.findByPk(order_id)
    .then(data => {
      if (data) {
        //res.send(data);
        res.json(data);
      } else {
        res.status(404).send({
          message: `Cannot find VehicleOrderInfo with order_id=${order_id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving VehicleOrderInfo with order_id=" + order_id
      });
    });
};

// Update a VehicleOrderInfo by the id in the request
exports.update = (req, res) => {

  const id = req.params.id;
  const num = 1;
  const email = req.params.email

  VehicleOrderInfo.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "VehicleOrderInfo was updated successfully."
        });
      } else {
        res.send({
          //message: `Cannot update VehicleOrderInfo with id=${id}. Maybe VehicleOrderInfo was not found or req.body is empty!`
            message: `message back  ${email}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating VehicleOrderInfo with order_id=" 
      });
    });
};

// Delete a VehicleOrderInfo with the specified order_id in the request
exports.delete = (req, res) => {
  const order_id = req.params.order_id;

  VehicleOrderInfo.destroy({
    where: { order_id: order_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "VehicleOrderInfo was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete VehicleOrderInfo with order_id=${order_id}. Maybe VehicleOrderInfo was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete VehicleOrderInfo with order_id=" 
      });
    });
};

// Delete all VehicleOrderInfos from the database.
exports.deleteAll = (req, res) => {
  VehicleOrderInfo.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} VehicleOrderInfos were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all vehicleorderinfos."
      });
    });
};

// find all published VehicleOrderInfo
exports.findAllPublished = (req, res) => {
  VehicleOrderInfo.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving vehicleorderinfos."
      });
    });
};
