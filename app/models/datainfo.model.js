module.exports = (sequelize, Sequelize) => {
  const DataInfo = sequelize.define("datainfo", {
    name: {
      type: Sequelize.STRING
    },
    value: {
      type: Sequelize.STRING
    },
    model: {
      type: Sequelize.STRING
    }
 
  });

  return DataInfo;
};