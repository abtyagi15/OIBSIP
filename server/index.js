const express = require('express');
const app = express();
require('dotenv').config();
const dbConnect = require('./configuration/database');
const PORT = process.env.PORT || 4000;
dbConnect();

app.use(express.json());


app.listen(PORT,()=>{
    console.log("Established server connection at PORT : " + PORT);
})