const express = require("express");
const router = new express.Router();
const authenticate = require("../middleware/authenticate");
const bcrypt = require("bcryptjs");
const userDB = require("../models/userSchema");
const controllers = require("../Controllers/userControllers");
const { postUpload } = require("../multerconfig/storageConfig");
router.get("/api/hello", (req, res) => {
  res.send("Hello World");
});

// authentication
router.post("/api/sign-up", controllers.signUpApi);
router.post("/api/sign-in", controllers.signInApi);
router.get("/api/validation", authenticate, controllers.validationApi);
router.post("/api/create-post",authenticate,postUpload.single("image"), controllers.createPostApi);
router.get("/api/get-posts", authenticate, controllers.getPostsApi);


module.exports = router;
