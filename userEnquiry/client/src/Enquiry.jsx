import React from "react";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import EnquiryList from "./enquiry/EnquiryList.jsx";

const Enquiry = () => {
  let saveEnquiry = (e) => {
    alert("Enquiry Saved");
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="text-[40px] text-center py-6 font-bold">User Enquiry</h1>
      <div className="grid grid-cols-[30%_auto] gap-11">
        <div className="bg-gray-200 p-4">
          <h2 className="text-[20px] font-bold">Enquiry Form</h2>
          <form action="" onSubmit={saveEnquiry}>
            <div className="py-3">
              <Label htmlFor="name" value="your name">
                Your Name
              </Label>
              <TextInput
                type="text"
                name="name"
                placeholder="enter your name"
                required
              />
            </div>
            <div className="py-3">
              <Label htmlFor="email" value="your email">
                Your Email
              </Label>
              <TextInput
                type="email"
                name="email"
                placeholder="enter your email"
                required
              />
            </div>
            <div className="py-3">
              <Label htmlFor="phone" value="your phone ">
                Your Phone no.{" "}
              </Label>
              <TextInput
                type="text"
                name="phone"
                placeholder="enter your phone no."
                required
              />
            </div>
            <div className="py-3">
              <Label htmlFor="message" value="your phone ">
                Your Meassage{" "}
              </Label>
              <Textarea
                name="message"
                placeholder="enter your message"
                required
                rows={4}
              />
            </div>
            <div className="py-3">
              <Button type="submit" className="w-[100%]">
                Save
              </Button>
            </div>
          </form>
        </div>
          <EnquiryList />
      </div>
    </div>
  );
};


export default Enquiry;
