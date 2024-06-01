const mongoose = require("mongoose");

const DB = process.env.DATABASE


mongoose.connect(DB, {
    // useNewUrlParser: true, // Deprecated
    // useUnifiedTopology: true, // Deprecated
    // useCreateIndex: true, // Deprecated
    // useFindAndModify: false, // Deprecated
})
.then(() => {
    console.log('Database connected successfully');
})
.catch((err) => {
    console.log('Database connection failed: ', err);
});


// mongoose.connect(DB, {
//     useUnifieldTopology:true,
//     useNewUrlParser:true
// }).then(()=> console.log("DataBase Connected")).catch((err)=>{
//     console.log(err);
// })




// npm i -g nodemon