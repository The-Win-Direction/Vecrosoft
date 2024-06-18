const bcrypt = require("bcryptjs");
const userDB = require("../models/userSchema");

//api
//signUp
exports.signUpApi = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;
    if (!fname || !lname || !email || !password) {
      res.status(422).json({ message: "fill all the details" });
    }
    let user = await userDB.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new userDB({
      fname,
      lname,
      email,
      password,
    });

    await user.save();
    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

//signIn
exports.signInApi = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ message: "fill all details" });
    }

    let user = await userDB.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(422).json({ message: "Invalid details" });
      } else {
        const token = await user.generateAuthToken();
        //console.log(token);

        res.cookie("usercookie", token, {
          expires: new Date(Date.now() + 9000000),
          httpOnly: true,
        });
        const result = {
          user,
          token,
        };
        res.status(201).json({ status: 201, result });
      }
    } else {
      res
        .status(401)
        .json({ status: 401, message: "invalid details try again" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error try again" });
  }
};

//validation api

exports.validationApi = async (req, res) => {
  try {
    const validUserOne = await userDB.findOne({ _id: req.userId });
    res.status(201).json({ status: 201, validUserOne });
  } catch (err) {
    res.status(401).json({ status: 401, err });
  }
};
