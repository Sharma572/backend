const express = require("express");
const {
  getAllContact,
  createContact,
  getOneContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const router = express.Router();

router.route("/").get(getAllContact).post(createContact);

router.route("/:id").get(getOneContact).put(updateContact).delete(deleteContact);


module.exports = router;
