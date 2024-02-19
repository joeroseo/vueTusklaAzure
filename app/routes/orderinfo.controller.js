const db = require("../models");
const OrderInfo = db.orderinfo;
const Op = db.Sequelize.Op;

// Create and Save a new OrderInfo
exports.create = (req, res) => {
  // Valorder_idate request
  if (!req.body.order_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a OrderInfo
  const orderinfo = {
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

  // Save OrderInfo in the database
  OrderInfo.create(orderinfo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the OrderInfo."
      });
    });
};

// Retrieve all OrderInfo from the database.
exports.findAll = (req, res) => {
  const order_id = req.query.order_id;
  var condition = order_id ? { order_id: { [Op.like]: `%${order_id}%` } } : null;

  OrderInfo.findAll({ where: condition })
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

// Find a single OrderInfo with an order_id
exports.findOne = (req, res) => {
  const order_id = req.params.order_id;

  OrderInfo.findByPk(order_id)
    .then(data => {
      if (data) {
        //res.send(data);
        res.json(data);
      } else {
        res.status(404).send({
          message: `Cannot find OrderInfo with order_id=${order_id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving OrderInfo with order_id=" + order_id
      });
    });
};

// Update a OrderInfo by the order_id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  OrderInfo.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "OrderInfo was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update OrderInfo with id=${id}. Maybe OrderInfo was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating OrderInfo with id=" + id
      });
    });
};

// Delete a OrderInfo with the specified order_id in the request
exports.delete = (req, res) => {
  const order_id = req.params.order_id;

  OrderInfo.destroy({
    where: { order_id: order_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "OrderInfo was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete OrderInfo with order_id=${order_id}. Maybe OrderInfo was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete OrderInfo with order_id=" + order_id
      });
    });
};

// Delete all OrderInfos from the database.
exports.deleteAll = (req, res) => {
  OrderInfo.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} OrderInfos were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all orderinfos."
      });
    });
};

// find all published OrderInfo
exports.findAllPublished = (req, res) => {
  OrderInfo.findAll({ where: { published: true } })
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
