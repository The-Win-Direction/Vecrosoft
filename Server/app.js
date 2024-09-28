const express = require("express");
const app = express();
const cookieParser=require("cookie-parser");
const path=require("path")
const router =require("./Routes/router");
const PORT = process.env.PORT || 4000;
const cors=require("cors");


//Database connection
const connectDB = require("./db/conn");
connectDB();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(router);
app.listen(PORT, () => {
    console.log(`Server running at port no ${PORT}`);
})