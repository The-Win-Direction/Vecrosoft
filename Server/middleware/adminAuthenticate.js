const jwt = require("jsonwebtoken");
const adminDB = require("../models/adminSchema");
require('dotenv').config();
const keysecret = process.env.KEY_SECRET;

const adminAuthenticate = async (req, res, next) => {
  try {
   
    const token = req.headers.authorization;
      if (!token) {
      return res.status(401).json({ status: 401, message: "No token provided" });
    }

    const verifytoken = jwt.verify(token, keysecret);
    // console.log(verifytoken+"hello");
    const rootAdmin = await adminDB.findOne({ _id: verifytoken._id });

    if (!rootAdmin) {
      throw new Error("Admin not found");
    }

    req.token = token;
    req.rootAdmin = rootAdmin;
    req.adminId = rootAdmin._id;

    next();
  } catch (err) {
    res.status(401).json({ status: 401, message: "Unauthorized access", error: err.message });
  }
};

module.exports = adminAuthenticate;
