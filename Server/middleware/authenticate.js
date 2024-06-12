const jwt = require("jsonwebtoken");
const userDB = require("../models/userSchema");
const keysecret = "ProjectVecrosoftProjectVecrosoft";

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    //console.log(token);
    const verifytoken = jwt.verify(token, keysecret);
    //console.log(verifytoken);
    const rootUser = await userDB.findOne({ _id: verifytoken._id });
    //console.log(rootUser);
    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;
    next();
  } catch (err) {
    res.status(401).json({ status: 401, message: "unauthorized access" ,err});
  }
};
module.exports = authenticate;
