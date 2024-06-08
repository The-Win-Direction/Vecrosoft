const express = require("express");
const router = new express.Router();

router.get("/hello", (req, res) => {
    res.send("Hello World");
});

router.post("/register",async(req,res)=>{
    console.log(req.body)
    const{fname,lname,email,password}=req.body;
    
})

module.exports=router;