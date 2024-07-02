const express = require("express");
const router = new express.Router();
const authenticate = require("../middleware/authenticate");
const bcrypt = require("bcryptjs");
const userDB = require("../models/userSchema");
const controllers = require("../Controllers/userControllers");
const { postUpload,pofileUpload } = require("../multerconfig/storageConfig");
router.get("/api/hello", (req, res) => {
  res.send("Hello World");
});

// authentication
router.post("/api/sign-up", controllers.signUpApi);
router.post("/api/sign-in", controllers.signInApi);
router.get("/api/validation", authenticate, controllers.validationApi);
router.get("/api/profile", authenticate, controllers.viewProfileApi);
router.post(
  "/api/create-post",
  authenticate,
  postUpload.single("image"),
  controllers.createPostApi
);

router.get("/api/get-posts", authenticate, controllers.getPostsApi);
router.post(  "/api/user/update",  authenticate,  pofileUpload.single("profile_pic_url"),controllers.updateProfileApi
);

router.post("/api/posts/:postId/like", authenticate, controllers.likePostApi);
router.post("/api/posts/:postId/comment", authenticate, controllers.commentPostApi);

router.get("/api/who-ami", authenticate, controllers.whoAmIApi);
module.exports = router;
