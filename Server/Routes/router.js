const express = require("express");
const router = new express.Router();
const authenticate = require("../middleware/authenticate");
const bcrypt = require("bcryptjs");
const userDB = require("../models/userSchema");
const contrllers = require("../Controllers/userControllers");
router.get("/hello", (req, res) => {
  res.send("Hello World");
});


router.post("api/sign-up", contrllers.signUpApi);
router.post("api/sign-in", contrllers.signInApi);
router.get("api/validation", authenticate, contrllers.validationApi);


module.exports = router;
