const db = require("../models");
const OrderInfo2 = db.orderinfo;
const Op = db.Sequelize.Op;

// Create and Save a new OrderInfo2
exports.create = (req, res) => {
  // Valemailate request
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a OrderInfo2
  const orderinfo = {
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

  // Save OrderInfo2 in the database
  OrderInfo2.create(orderinfo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the OrderInfo2."
      });
    });
};

// Retrieve all OrderInfo2 from the database.
exports.findAll = (req, res) => {
  const email = req.query.email;
  var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

  OrderInfo2.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving orderinfos."
      });
    });
};

// Find a single OrderInfo2 with an email
exports.findOne = (req, res) => {
  const email = req.params.email;

  OrderInfo2.findByPk(email)
    .then(data => {
      if (data) {
        //res.send(data);
        res.json(data);
      } else {
        res.status(404).send({
          message: `Cannot find OrderInfo2 with email=${email}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving OrderInfo2 with email=" + email
      });
    });
};

// Update a OrderInfo2 by the email in the request
exports.update = (req, res) => {
  const email = req.params.email;

  OrderInfo2.update(req.body, {
    where: { email: email }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "OrderInfo2 was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update OrderInfo2 with email=${email}. Maybe OrderInfo2 was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating OrderInfo2 with email=" + email
      });
    });
};

// Delete a OrderInfo2 with the specified email in the request
exports.delete = (req, res) => {
  const email = req.params.email;

  OrderInfo2.destroy({
    where: { email: email }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "OrderInfo2 was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete OrderInfo2 with email=${email}. Maybe OrderInfo2 was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete OrderInfo2 with email=" + email
      });
    });
};

// Delete all OrderInfo2s from the database.
exports.deleteAll = (req, res) => {
  OrderInfo2.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} OrderInfo2s were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all orderinfos."
      });
    });
};

// find all published OrderInfo2
exports.findAllPublished = (req, res) => {
  OrderInfo2.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving orderinfos."
      });
    });
};
