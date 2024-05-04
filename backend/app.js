const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cordinateRoute=require("./routes/cordinate");
const PORT = 8080;

dotenv.config();


mongoose.connect(process.env.MONGO_URL)
       .then(()=>console.log("DB Connection Successfull!"))
       .catch((err)=>{console.log(err)});

app.use(cors());
app.use(express.json())
app.use("/api/cordinate",cordinateRoute);

app.listen(process.env.PORT || 8080,()=>{
    console.log("Backend Running!")
})

