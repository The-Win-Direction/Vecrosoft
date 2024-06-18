/* const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const keysecret = "ProjectVecrosoftProjectVecrosoft";
const usersSchema = new mongoose.Schema({
  fname: {
    type: String,
    requried: true,
    trim: true,
  },
  lname: {
    type: String,
    requried: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new error("Invalid email");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

usersSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

usersSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, keysecret, { expiresIn: "1d" });
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {}
};


const userDB = new mongoose.model("users", usersSchema);
module.exports = userDB;
 */

const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const keysecret = "ProjectVecrosoftProjectVecrosoft";
const usersSchema = new mongoose.Schema({
  fname: {
    type: String,
    requried: true,
    trim: true,
  },
  lname: {
    type: String,
    requried: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new error("Invalid email");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  bio: { type: String },
  profile_pic_url: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  /* followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], */
});

usersSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});


/* usersSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
}); */

usersSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, keysecret, { expiresIn: "1d" });
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {}
};

//model
const userDB = new mongoose.model("users", usersSchema);
module.exports = userDB;
