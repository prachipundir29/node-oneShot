let express = require("express");
const { dbConnection } = require("./dbConnection");
const { ObjectId } = require("mongodb");

let app = express();

app.use(express.json());

app.get("/student-read", async (req, res) => {
  let myDB = await dbConnection();
  let studentCollection = myDB.collection("students");
  let data = await studentCollection.find().toArray();

  let resObj = {
    status: 1,
    msg: "Students List",
    data,
  };
  res.send(resObj);
});

app.post("/student-create", async (req, res) => {
  let myDB = await dbConnection();
  let studentCollection = myDB.collection("students");

  // let obj = {
  //     sName: req.body.sName,
  //     sEmail: req.body.sEmail,
  //     sAge: req.body.sAge
  // }

  let { sName, sEmail, sAge } = req.body;
  let obj = { sName, sEmail, sAge };

  let insertRes = await studentCollection.insertOne(obj);

  let resObj = {
    status: 1,
    msg: "Data Inserted",
    insertRes,
  };

  res.send(resObj);
});

app.delete("/student-delete/:id", async (req, res) => {
  let { id } = req.params; // {id: '68ea85f257cfbe180f65a6e'}ye ek object return karega}
  // id: 68ea85f257cfbe180f65a6e ye id {id} variable me store ho jayegi
  let myDB = await dbConnection();
  let studentCollection = myDB.collection("students");
  let deleteRes = await studentCollection.deleteOne({ _id: new ObjectId(id) });

  let resObj = {
    status: 1,
    msg: "Data Deleted",
    deleteRes,
  };

  res.send(resObj);
});

app.put("/student-update/:id", async (req, res) => {
  let { id } = req.params;
  let { sName, sEmail, sAge } = req.body;
  let obj = { sName, sEmail, sAge };

  let myDB = await dbConnection();
  let studentCollection = myDB.collection("students");

  let updateRes = await studentCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { sName, sEmail } }
  );

  let resObj = {
    status: 1,
    msg: "Data Updated",
    updateRes,
  };
  res.send(resObj);
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
