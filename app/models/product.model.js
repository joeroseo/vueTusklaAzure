module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    name: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.DECIMAL(10, 2)
    },
    category: {
      type: Sequelize.STRING 
    },
    image: {
      type: Sequelize.STRING
    },
    id: {
      type: Sequelize.STRING,
      primaryKey: true // Mark 'id' as the primary key
    },
    isAvailable: {
      type: Sequelize.STRING,
    }    
  });

  return Product;
};