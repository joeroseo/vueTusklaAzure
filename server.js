const express = require("express");
const cors = require("cors");

const app = express();
const multer = require('multer');
const mysql = require('mysql2');

var corsOptions = {
//  origin: "https://nodetusklaazure.azurewebsites.net"
origin: "*"
};

app.use(cors(corsOptions));

//const __basefolder = "C:/Users/Joe/Vue/FileUpload/node-app";
const __basefolder = "C:/Users/Joe/Vue/Shopping_Firebase/Vue/public/img";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basefolder + '/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({storage});


app.post('/upload', upload.single('image'), (req, res) => {
  res.send('File uploaded successfully!');
});

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");


db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


require("./app/routes/cart.routes")(app);
require("./app/routes/order.routes")(app);
require("./app/routes/orderinfo.routes")(app);
require("./app/routes/orderinfo2.routes")(app);
require("./app/routes/productinfo.routes")(app);
require("./app/routes/vehicleorder.routes")(app);
require("./app/routes/vehicleorderinfo.routes")(app);
require("./app/routes/vehicleorderinfo2.routes")(app);
require("./app/routes/datainfo.routes")(app);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
