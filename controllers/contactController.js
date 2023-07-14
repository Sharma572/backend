//This npm for prevent try catch block
const asyncHandler = require("express-async-handler") 
// @desc Get all contacts
// @route Get /contact
// @access Public
const getAllContact = asyncHandler( async (req, res) => {
  res.status(200).json({
    message: "Get all contact",
  });
});

// @desc Create all contacts
// @route Create /contact
// @access Public
const createContact = asyncHandler( async (req, res) => {
    console.log(req.body, '<------This is the data😊😊😊😊😊😊😊😊😊😊😊😊')
    const {name , Phone, email} = req.body
    if(!name || !Phone || !email){
    res.status(400);
throw new Error("All Fields Are Required");
    }
  res.status(201).json({
    message: "Contact Created",
  });
});

// @desc GetOne all contacts
// @route GetOne /contact/:id
// @access Public
const getOneContact = asyncHandler( async (req, res) => {
  res.status(200).json({
    message: `Get contact for ${req.params.id}`,
  });
});

// @desc update contacts
// @route update /contact/:id
// @access Public
const updateContact = asyncHandler( async (req, res) => {
  res.status(200).json({
    message: `Updated contact for ${req.params.id}`,
  });
});

// @desc delete contacts
// @route delete /contact/:id
// @access Public
const deleteContact = asyncHandler( async (req, res) => {
  res.status(200).json({
    message: `Delete contact for ${req.params.id}`,
  });
});

module.exports = {
  getAllContact,
  createContact,
  getOneContact,
  updateContact,
  deleteContact,
};
