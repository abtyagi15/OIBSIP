const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["User","Admin"]
    }
})

module.exports = mongoose.model("auth",authSchema);