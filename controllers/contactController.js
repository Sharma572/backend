const Contact = require("../model/contactModal")
//This npm for prevent try catch block
const asyncHandler = require("express-async-handler") 
// @desc Get all contacts
// @route Get /contact
// @access Public
const getAllContact = asyncHandler( async (req, res) => {
  const contact = await Contact.find()
  res.status(200).json({
    message: "Get all contact",
    result : contact
  });
});

// @desc Create all contacts
// @route Create /contact
// @access Public
const createContact = asyncHandler( async (req, res) => {
    console.log(req.body, '<------ data😊')
    const {name , Phone, email} = req.body
    if(!name || !Phone || !email){
    res.status(400);
throw new Error("All Fields Are Required");
    }
    const contact = Contact.create({
      name,
      Phone,
      email
    })
  res.status(201).json({
    message: "Contact Created",
    result: req.body
  });
});

// @desc GetOne all contacts
// @route GetOne /contact/:id
// @access Public
const getOneContact = asyncHandler( async (req, res) => {
  // const id = req.params._id
  const contact = await Contact.findById(req.params.id)
  if(!contact){
      res.status(404);
      throw new Error("No Contact Found")
  }
  res.status(200).json({
    message: `Get contact for ${req.params.id}`,
    result : contact
  });
});

// @desc update contacts
// @route update /contact/:id
// @access Public
const updateContact = asyncHandler( async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if(!contact){
      res.status(404);
      throw new Error("No Contact Found")
  }
  const updateContact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new : true})
  res.status(200).json(updateContact);
});

// @desc delete contacts
// @route delete /contact/:id
// @access Public
const deleteContact = asyncHandler( async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if(!contact){
      res.status(404);
      throw new Error("No Contact Found")
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

module.exports = {
  getAllContact,
  createContact,
  getOneContact,
  updateContact,
  deleteContact,
};
