const express = require("express");
const router = new express.Router();
const userDB=require("../models/userSchema");
router.get("/hello", (req, res) => {
    res.send("Hello World");
});

router.post("/SignUp",async(req,res)=>{
    try {
        const { fname, lname, email, password } = req.body;
        if(!fname||!lname||!email||!password){
            res.status(422).json({message:"fill all the details"})
        }
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


router.post("/SignIn",async(req,res)=>{
    try {
        const { email, password } = req.body;
        if (!user||!password) {
            return res.status(422).json({ message: 'fill all details' });
        }

        let user = await userDB.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid details' });
        }

        user = new userDB({
            fname,
            lname,
            email,
            password
        });

        await user.save();
        res.status(201).json({ message: 'SignIn successful' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
    }
});


router.get("/Validation",async(req,res)=>{

});
   
   

module.exports=router;

