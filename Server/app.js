const express = require("express");
const connectDB = require("./db/conn");
const app = express();
const PORT = 4000;

connectDB();

app.get("/", (req, res) => {
    res.status(201).json("server started");
});

app.listen(PORT, () => {
    console.log(`Server running at port no ${PORT}`);
});


/*
app.use(cors());
app.use(express.json());
app.use(router);
*/
//require("./db/conn");
//const cors = require("cors");
//const router = require("./Routes/router");
//require("dotenv").config();


//my change added
//component 2

//componet 3
