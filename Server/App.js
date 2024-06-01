require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 1213



app.get("/",(req,res)=>{
    res.status(201).json("server start")
});

app.listen(PORT,()=>{
    console.log(`Server start at port no $(PORT)`)
})