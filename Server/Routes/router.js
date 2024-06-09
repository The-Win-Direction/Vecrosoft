const express = require("express");
const router = new express.Router();
const userDB=require("../models/userSchema");
router.get("/hello", (req, res) => {
    res.send("Hello World");
});

router.post("/SignUp",async(req,res)=>{
    try {
        const { fname, lname, email, password } = req.body;
        let user = await userDB.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        user = new userDB({
            fname,
            lname,
            email,
            password
        });

        await user.save();
        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
    }
});
   

module.exports=router;

