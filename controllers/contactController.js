// @desc Get all contacts
// @route Get /contact
// @access Public
const getAllContact = (req, res) => {
  res.status(200).json({
    message: "Get all contact",
  });
};

// @desc Create all contacts
// @route Create /contact
// @access Public
const createContact = (req, res) => {
    console.log(req.body, '<------This is the data😊😊😊😊😊😊😊😊😊😊😊😊')
    const {name , Phone, email} = req.body
    if(!name || !Phone || !email){
    res.status(400);
throw new Error("All Fields Are Required");
    }
  res.status(201).json({
    message: "Contact Created",
  });
};

// @desc GetOne all contacts
// @route GetOne /contact/:id
// @access Public
const getOneContact = (req, res) => {
  res.status(200).json({
    message: `Get contact for ${req.params.id}`,
  });
};

// @desc update contacts
// @route update /contact/:id
// @access Public
const updateContact = (req, res) => {
  res.status(200).json({
    message: `Updated contact for ${req.params.id}`,
  });
};

// @desc delete contacts
// @route delete /contact/:id
// @access Public
const deleteContact = (req, res) => {
  res.status(200).json({
    message: `Delete contact for ${req.params.id}`,
  });
};

module.exports = {
  getAllContact,
  createContact,
  getOneContact,
  updateContact,
  deleteContact,
};
