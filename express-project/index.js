let express = require("express");
require("dotenv").config();
const { checkToken } = require("./checkTokenMiddlaware");

let app = express();
app.use(express.json());

console.log(process.env.MyToken);

//Middleware function to check token
// let myToken = "12345";
// let myPass = "ram@4";

// let checkToken = (req, res, next) => {
//   if (req.query.token == "" || req.query.token == undefined) {
//     return res.send({
//       status: 0,
//       msg: "Token is missing",
//     });
//   }
//   if (req.query.token != myToken) {
//     return res.send({
//       status: 0,
//       msg: "Token is invalid",
//     });
//   }
//   next();
// };

// app.use((req,res,next) => {
//     if (req.query.pass == "" || req.query.pass == undefined) {
//     return res.send({
//       status: 0,
//       msg: "Password is missing",
//     });
//   }
//   if (req.query.pass != myPass) {
//     return res.send({
//       status: 0,
//       msg: "Password is invalid",
//     });
//   }
//   next();
// })

// app.use(checkToken); //Middleware

app.get("/", (req, res) => {
  res.send({ status: 1, msg: "Welcome to the Express.js" });
});

app.get("/news", checkToken, (req, res) => {
  res.send({ status: 2, msg: "This is news page of express.js" });
});
app.get("/news/:id", (req, res) => {
  let currentId = req.params.id;
  res.send("News Details API" + currentId);
});
app.post("/login", (req, res) => {
  console.log(req.body);

  res
    .status(200)
    .json({
      status: 3,
      msg: "This is login page of express.js",
      Bodydata: req.body,
      queryData: req.query,
    });
});

app.listen(8000, () => {
  console.log("Srevertis running on port 8000 ");
});
