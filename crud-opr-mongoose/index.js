let express = require("express");
let mongoose = require("mongoose"); //to connect to mongodb
let enquiryModel = require("./models/enquiry.model.js");
require("dotenv").config(); //to load env variables


let app = express(); //initialize express app

app.use(express.json());
// Here we are creating data thorugh Model
app.post("/api/enquiry-insert", (req, res) => {
  let { sName, sEmail, sPhone, sMessage } = req.body;
  let enquiry = new enquiryModel({
    name: sName,
    email: sEmail,
    phone: sPhone,
    message: sMessage,
  });
  enquiry
    .save()
    .then(() => {
      res.send({ status: 1, message: "Enquiry saved successfully" });
    })
    .catch(() => {
      res.send({ status: 0, message: "Error while saving enquiry", error:err });
    });
});

app.get("/api/enquiry-list", async(req, res)=>{
   let enquiryList=await enquiryModel.find()
   res.status(200).json({statius:1, message: "Enquiry-List", data:enquiryList})
});

app.delete("/api/enquiry-delete/:id",async(req, res)=>{
  let enquiryId = req.params.id;
  let deletedEnquiry = await enquiryModel.deleteOne({_id:enquiryId});
  res.send({status:1, message:"Enquiry deleted successfully", id: enquiryId,
  delRes: deletedEnquiry
   })
});

app.put("/api/enquiry-update/:id",async(req, res)=>{
     let enquiryId = req.params.id;
     let { sName, sEmail, sPhone, sMessage } = req.body;
     let updateObj = {
           name: sName,
           email: sEmail,
           phone: sPhone,
           message: sMessage,
     }
     let updateRes= await enquiryModel.updateOne({_id:enquiryId},updateObj) 
     res.send({status:1, messages:"Enquiry updated successfully",updateRes})
})


// Connect to MongoDB
mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Connect to MOngoDB");
  app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`);
  });
});
