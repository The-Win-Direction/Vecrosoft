const express = require("express");
const router = new express.Router();
const authenticate = require("../middleware/authenticate");
const bcrypt = require("bcryptjs");
const userDB = require("../models/userSchema");
const controllers = require("../Controllers/userControllers");
router.get("/api/hello", (req, res) => {
  res.send("Hello World");
});


router.post("/api/sign-up", controllers.signUpApi);
router.post("/api/sign-in", controllers.signInApi);
router.get("/api/validation", authenticate, controllers.validationApi);


module.exports = router;
