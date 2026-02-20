const express=require("express");
const app=express();
const cors=require("cors");
require("dotenv").config();
const connectDB=require('./config/db');

const User=require('./models/User');

//checking database connection
connectDB();

//middleware
app.use(cors());
app.use(express.json());

//test route 

app.get('/test-user',async(req,res)=>{
    try{
        const user= await User.create({
            name:"Gagan",
            email:"gagan@gmail.com",
            password:"123456"
        });
        res.json(user);
    }
        catch(error){
       res.status(500).json({error:error.message});
        }
});

app.get("/",(req,res)=>{
    res.send("Server is running going good");
})

const PORT=process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})