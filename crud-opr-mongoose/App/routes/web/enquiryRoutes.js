let express = require("express");
const {
  enquiryInsert,
  enquiryList,
  deleteEnquiry,
  enquiryUpdate,
} = require("../../controllers/web/userEnquiryController.js");
let enquiryRoutes =express.Router(); 

enquiryRoutes.post("/enquiry-insert", enquiryInsert);
enquiryRoutes.get("/enquiry-list", enquiryList);
enquiryRoutes.delete("/enquiry-delete/:id", deleteEnquiry);
enquiryRoutes.put("/enquiry-update/:id", enquiryUpdate);

module.exports = enquiryRoutes;