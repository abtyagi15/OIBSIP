const express = require('express');
const app = express();
require('dotenv').config();
const dbConnect = require('./configuration/database');
const PORT = process.env.PORT || 4000;
const auth = require('./routes/authRoutes');
const cors = require('cors');
dbConnect();

app.use(express.json());
app.use(cors());
app.use("/abtyagi15/v1",auth);
app.listen(PORT,()=>{
    console.log("Established server connection at PORT : " + PORT);
})