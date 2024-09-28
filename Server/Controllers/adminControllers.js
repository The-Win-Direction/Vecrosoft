const bcrypt = require("bcryptjs");
const adminDB = require("../models/adminSchema");
const userDB = require("../models/userSchema");
const postDB = require("../models/postSchema");
const articleDB = require("../models/articleSchema");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const keysecret = process.env.KEY_SECRET;

// SignIn for Admin
exports.adminSignInApi = async (req, res) => {
  
  try {
    const { email, password } = req.body;
    // console.log(email, password);
    if (!email || !password) {
      return res.status(422).json({ message: "Please fill in all details" });
    }

    const admin = await adminDB.findOne({ email });
    //console.log(admin);
    if (!admin) {
      return res.status(401).json({ message: "Invalid details" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(422).json({ message: "Invalid details" });
    }

    const token = await admin.generateAuthToken();
    res.status(201).json({ token, adminId: admin._id ,fname:admin.fname,lname:admin.lname});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error, try again" });
  }
};

//admin Validation
exports.adminValidationApi = async (req, res) => {
  try {
    // console.log("i am here");
    const validAdmin = await adminDB.findOne({ _id: req.adminId });
  // console.log(validAdmin);
    if (!validAdmin) {
      return res.status(404).json({ status: 404, message: "Admin not found" });
    }

    res.status(200).json({ status: 200, validAdmin });
  } catch (err) {
    res
      .status(500)
      .json({ status: 500, message: "Server error", error: err.message });
  }
};

// get Admin
exports.getAllAdminsApi = async (req, res) => {
  try {
    const admins = await adminDB.find(); 

    if (!admins.length) {
      return res.status(404).json({ status: 404, message: "No admins found" });
    }

    res.status(200).json({ status: 200, admins });
  } catch (err) {
    res
      .status(500)
      .json({ status: 500, message: "Server error", error: err.message });
  }
};

// Add Admin
exports.addAdminApi = async (req, res) => {
  try {
    const { email, password ,fname,lname} = req.body;

    if (!email || !password||!fname||!lname) {
      return res
        .status(422)
        .json({ message: "Email and password are required" });
    }

    const existingAdmin = await adminDB.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const newAdmin = new adminDB({ email, password,fname,lname });
    await newAdmin.save();
    res.status(201).json({ message: "Admin added successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete Admin
exports.deleteAdminApi = async (req, res) => {
  try {
    const { adminId } = req.params;

    const totalAdmins = await adminDB.countDocuments();
    if (totalAdmins <= 1) {
      return res.status(400).json({
        message: "Cannot delete admin, at least one admin must remain.",
      });
    }

    const admin = await adminDB.findByIdAndDelete(adminId);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Get All Users
exports.getUsersApi = async (req, res) => {
  try {
    const users = await userDB.find();
    res.status(200).json({ users });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete User
exports.deleteUserApi = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await userDB.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Get All Posts
exports.getPostsApi = async (req, res) => {
  try {
    const posts = await postDB
      .find()
      .populate("user_id", "fname lname profile_pic_url")
      .populate("likes", "fname lname profile_pic_url")
      .populate("comments.user_id", "fname lname profile_pic_url");

    res.status(200).json({ posts });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete Post
exports.deletePostApi = async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await postDB.findByIdAndDelete(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Get All Articles
exports.getArticlesApi = async (req, res) => {
  try {
    const articles = await articleDB
      .find()
      .populate("user_id", "fname lname profile_pic_url")
      .populate("likes", "fname lname profile_pic_url")
      .populate("comments.user_id", "fname lname profile_pic_url");

    res.status(200).json({ articles });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete Article
exports.deleteArticleApi = async (req, res) => {
  try {
    const { articleId } = req.params;

    const article = await articleDB.findByIdAndDelete(articleId);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({ message: "Article deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// statistics about users, posts, articles, admins
exports.getStatisticsApi = async (req, res) => {
  try {
    const totalUsers = await userDB.countDocuments();
    const totalPosts = await postDB.countDocuments();
    const totalArticles = await articleDB.countDocuments();
    const totalAdmins = await adminDB.countDocuments();

    res.status(200).json({
      status: 200,
      statistics: {
        totalUsers,
        totalPosts,
        totalArticles,
        totalAdmins,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// // initial admin creation lol
// const x = async () => {
//   try {
//     let email = "test@gmail.com";
//     let password = "testtest";

//     let fname="Dipak Raj"
//     let lname="Giri"
//     const existingAdmin = await adminDB.findOne({ email });
//     if (existingAdmin) {
//       console.error("Admin with this email already exists.");
//       return;
//     }

//     const newAdmin = new adminDB({ fname,lname,email, password });
//     await newAdmin.save();
//     console.log("Admin added successfully!");
//   } catch (error) {
//     console.error(error.message);
//   }
// };
// x();
 