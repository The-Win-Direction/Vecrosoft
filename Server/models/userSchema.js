const mongoose = require("mongoose");
const validator=require("validator");

//userschema definition
const usersSchema = new mongoose.Schema({ 
    fname:{
        type:String,
        requried:true,
        trim:true
    },
    lname:{
        type:String,
        requried:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new error("Invalid email")
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    tokens:[
        {token:{
            type:String,
            required:true
        }}
    ]
    
});


//model 
const userdb=new mongoose.model("users",usersSchema)

module.exports=userdb;