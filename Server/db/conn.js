const mongoose = require("mongoose");

const DB = process.env.DATABASE

mongoose.connect(DB, {
    useUnifieldTopology:true,
    useNewUrlParser:true
}).then(()=> console.log("DataBase Connected")).catch((err)=>{
    console.log(err);
})