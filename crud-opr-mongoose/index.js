let express = require("express");
let mongoose = require("mongoose"); //to connect to mongodb
const enquiryRoutes = require('./App/routes/web/enquiryRoutes.js')
require("dotenv").config(); //to load env variables

let app = express(); //initialize express app

app.use(express.json());
app.use("/web/api/enquiry", enquiryRoutes)

//http://localhost:8000/web/api/enquiry/enquiry-list

// Connect to MongoDB
mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Connect to MOngoDB");
  app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`);
  });
});
