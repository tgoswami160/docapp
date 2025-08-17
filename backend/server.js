import express from "express";
import connectDb from "./Database/mongodb.js";
import dotenv from 'dotenv'
import userRoute from "./routes/userRoute.js";
import cors from 'cors'
dotenv.config({
    path:'.env'
})


const PORT=process.env.PORT||4000
const app=express();
await connectDb();
app.get('/',(req,res)=>{
    res.send("API woking fine");
    
});
app.use(cors())
app.use(express.json());
app.use("/api/users",userRoute)
app.listen(PORT,()=>{
    console.log("server is running on port:",PORT);
    
})
