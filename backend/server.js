import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import mainRouter from './routes/index.js';
import connectDB from './config/mongodb.js';


const app=express();
connectDB();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // 👈 your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // 👈 allows cookies or tokens
  })
);
app.get('/',(req,res)=>{
    res.json({message:"hello world he"})
})

app.use('/api/v1',mainRouter);
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})

// cucVjVptsGJW5mOV