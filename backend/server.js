const express=require("express");
const app=express();
const cors=require("cors");
require("dotenv").config();
const connectDB=require('./config/db');

const User=require('./models/User');
const authRoutes = require("./routes/authRoutes");
const protect=require('./middleware/authMiddleware')

//checking database connection
connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/api/protected",protect,(req,res)=>{
    res.json({
        message:"you have accessed protected route",
        user:req.user,
    });
});

app.get("/",(req,res)=>{
    res.send("Server is running going good");
})

const PORT=process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})