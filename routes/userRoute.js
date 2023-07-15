const express = require("express");
const {registerUser,currentUser,loginUser} = require("../controllers/userController");

const router = express.Router();

router.post("/login", loginUser)

router.post("/register", registerUser)

  router.post("/me", currentUser)

  module.exports = router