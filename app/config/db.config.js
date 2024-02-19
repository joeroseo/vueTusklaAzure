module.exports = {
  HOST: "tuskladbserver.mysql.database.azure.com",
  USER: "joeroseo",
  PASSWORD: "Test123Test123",
  DB: "CartDb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
