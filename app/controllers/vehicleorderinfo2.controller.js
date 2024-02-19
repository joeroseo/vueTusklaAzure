const db = require("../models");
const VehicleOrderInfo2 = db.vehicleorderinfo;
const Op = db.Sequelize.Op;

// Create and Save a new VehicleOrderInfo2
exports.create = (req, res) => {
  // Valemailate request
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a VehicleOrderInfo2
  const vehicleorderinfo = {
    email: req.body.email,
    fname: req.body.fname,
    lname: req.body.lname,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    email: req.body.email,
    subtotal: req.body.subtotal,
    tax: req.body.tax,
    shipping: req.body.shipping,
    total: req.body.total
  };

  // Save VehicleOrderInfo2 in the database
  VehicleOrderInfo2.create(vehicleorderinfo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the VehicleOrderInfo2."
      });
    });
};

// Retrieve all VehicleOrderInfo2 from the database.
exports.findAll = (req, res) => {
  const email = req.query.email;
  var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

  VehicleOrderInfo2.findAll({ where: condition })
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

// Find a single VehicleOrderInfo2 with an email
exports.findOne = (req, res) => {
  const email = req.params.email;

  VehicleOrderInfo2.findByPk(email)
    .then(data => {
      if (data) {
        //res.send(data);
        res.json(data);
      } else {
        res.status(404).send({
          message: `Cannot find VehicleOrderInfo2 with email=${email}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving VehicleOrderInfo2 with email=" + email
      });
    });
};

// Update a VehicleOrderInfo2 by the email in the request
exports.update = (req, res) => {
  const email = req.params.email;

  VehicleOrderInfo2.update(req.body, {
    where: { email: email }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "VehicleOrderInfo2 was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update VehicleOrderInfo2 with email=${email}. Maybe VehicleOrderInfo2 was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating VehicleOrderInfo2 with email=" + email
      });
    });
};

// Delete a VehicleOrderInfo2 with the specified email in the request
exports.delete = (req, res) => {
  const email = req.params.email;

  VehicleOrderInfo2.destroy({
    where: { email: email }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "VehicleOrderInfo2 was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete VehicleOrderInfo2 with email=${email}. Maybe VehicleOrderInfo2 was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete VehicleOrderInfo2 with email=" + email
      });
    });
};

// Delete all VehicleOrderInfo2s from the database.
exports.deleteAll = (req, res) => {
  VehicleOrderInfo2.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} VehicleOrderInfo2s were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all vehicleorderinfos."
      });
    });
};

// find all published VehicleOrderInfo2
exports.findAllPublished = (req, res) => {
  VehicleOrderInfo2.findAll({ where: { published: true } })
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
