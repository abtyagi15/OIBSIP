const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL; 

const dbConnect = () =>{
    mongoose.connect(DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('Connected to the DATABASE');
    })
    .catch((error)=>{
        console.log("Error in connecting to DB : "+error);
        process.exit(1);
    })
}

module.exports = dbConnect;