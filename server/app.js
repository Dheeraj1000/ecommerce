const express = require('express');
const mongoose = require("mongoose");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
dotenv.config()

// importing routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product');


const uri = "mongodb+srv://first_db:123@dheeraj.oqgbv0w.mongodb.net/?retryWrites=true&w=majority"

async function connect()
{
    try{
        await mongoose.connect(uri)
        console.log("Connected to MongoDB")
    }
    catch(error){
        console.error(error);
    }
}
connect();

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors());

//routes
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})