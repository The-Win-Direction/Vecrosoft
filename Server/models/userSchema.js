const mongoose = require("mongoose");
const validator=require("validator");
const bcrypt = require('bcryptjs');

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

usersSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});


//model 
const userDB=new mongoose.model("users",usersSchema)
module.exports=userDB;