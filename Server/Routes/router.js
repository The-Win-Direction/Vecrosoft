const express = require("express");
const router = new express.Router();
const authenticate = require("../middleware/authenticate");
const adminAuthenticate = require("../middleware/adminAuthenticate");
const controllers = require("../Controllers/userControllers");
const adminControllers = require("../Controllers/adminControllers");
const { postUpload, profileUpload, articleUpload } = require("../multerconfig/storageConfig");

// Basic test route
router.get("/api/hello", (req, res) => {
  res.send("Hello World");
});

// User Authentication Routes
router.post("/api/sign-up", controllers.signUpApi);
router.post("/api/sign-in", controllers.signInApi);
router.get("/api/validation", authenticate, controllers.validationApi);
router.get("/api/profile", authenticate, controllers.viewProfileApi);

// User Post and Article Routes
router.post(
  "/api/create-post",
  authenticate,
  postUpload.single("image"),
  controllers.createPostApi
);
router.post(
  "/api/create-article",
  authenticate,
  articleUpload.single("image"),
  controllers.createArticleApi
);
router.get("/api/get-posts", authenticate, controllers.getPostsApi);
router.get("/api/get-articles", authenticate, controllers.getArticlesApi);

// User Update and Interaction Routes
router.post("/api/user/update",  authenticate,  profileUpload.single("profile_pic_url"),controllers.updateProfileApi
);
router.post("/api/posts/:postId/like", authenticate, controllers.likePostApi);
router.post("/api/posts/:postId/comment", authenticate, controllers.commentPostApi);
router.post('/api/send-email', authenticate, controllers.sendEmailAPI);
router.post('/api/contact-us', authenticate, controllers.contactUsAPI);
router.get("/api/who-ami", authenticate, controllers.whoAmIApi);

// Admin Statistics Route
router.get("/api/admin/stats", adminAuthenticate, adminControllers.getStatisticsApi);

// Admin Authentication Route
router.post("/api/admin/sign-in", adminControllers.adminSignInApi);

// Admin Validation Route
router.get("/api/admin/validate", adminAuthenticate, adminControllers.adminValidationApi); 

// Admin User Management Routes
router.get("/api/admin/users", adminAuthenticate, adminControllers.getUsersApi);
router.delete("/api/admin/users/:userId", adminAuthenticate, adminControllers.deleteUserApi);
router.get("/api/admin/users/:userId", adminAuthenticate, adminControllers.getUserProfileApi);

// Admin Admin Management Routes
router.post("/api/admin/add", adminAuthenticate, adminControllers.addAdminApi);
router.delete("/api/admin/:adminId", adminAuthenticate, adminControllers.deleteAdminApi);
router.get("/api/admin", adminAuthenticate, adminControllers.getAllAdminsApi); 

// Admin Post Management Routes
router.get("/api/admin/posts", adminAuthenticate, adminControllers.getPostsApi);
router.delete("/api/admin/posts/:postId", adminAuthenticate, adminControllers.deletePostApi);

// Admin Article Management Routes
router.get("/api/admin/articles", adminAuthenticate, adminControllers.getArticlesApi);
router.delete("/api/admin/articles/:articleId", adminAuthenticate, adminControllers.deleteArticleApi);

// Get Contact Routes
router.get("/api/admin/contacts", adminAuthenticate, adminControllers.getContactsApi);
router.delete("/api/admin/contacts/:contactId", adminAuthenticate, adminControllers.deleteContactApi);
router.post("/api/admin/send-email", adminAuthenticate, adminControllers.sendEmailAPI);

module.exports = router;adminAuthenticate
