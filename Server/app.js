const express = require("express")
const app = express();
const router =require("./Routes/router")
const PORT = 4000;
const cors=require("cors");

//Database connection
const connectDB = require("./db/conn");
connectDB();
    
app.use(express.json());
app.use(cors());
app.use(router);
app.listen(PORT, () => {
    console.log(`Server running at port no ${PORT}`);
})