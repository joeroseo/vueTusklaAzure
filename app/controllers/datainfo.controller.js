const db = require("../models");
const DataInfo = db.datainfo;
const Op = db.Sequelize.Op;

// Create and Save a new DataInfo
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a DataInfo
  const datainfo = {
    model: req.body.model,
    name: req.body.name,
    value: req.body.value,
  };

  // Save DataInfo in the database
  DataInfo.create(datainfo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the DataInfo."
      });
    });
};

// Retrieve all DataInfo from the database.
exports.findAll = (req, res) => {
  const model = req.query.model;
  var condition = model ? { model: { [Op.like]: `%${model}%` } } : null;

  DataInfo.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving datainfos."
      });
    });
};

// Find a single DataInfo with an id
exports.findByPk = (req, res) => {
  const id = req.params.id;

  DataInfo.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving datainfos."
      });
    });
};

// Update a DataInfo by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  DataInfo.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "DataInfo was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update DataInfo with id=${id}. Maybe DataInfo was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating DataInfo with id =" + id
      });
    });
};

// Delete a DataInfo with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  DataInfo.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "DataInfo was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete DataInfo with id=${id}. Maybe DataInfo was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete DataInfo with id=" + id
      });
    });
};

// Delete all DataInfos from the database.
exports.deleteAll = (req, res) => {
  DataInfo.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} DataInfos were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all datainfos."
      });
    });
};

// find all published DataInfo
exports.findAllPublished = (req, res) => {
  DataInfo.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving datainfos."
      });
    });
};
