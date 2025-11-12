import mongoose from "mongoose";
import 'dotenv/config';

const connectDB=async()=>{
    try {
        // console.log(process.env.MONGODB_URL)
        mongoose.connection.on('connected',()=>{
            console.log("DB connected");
        })
        await mongoose.connect(process.env.MONGODB_URL)

        mongoose.connection.on('error',()=>{
            console.log('mongodb connection error')
        })
    } catch (error) {
        console.log("Failed to connect MongoDB")
        console.log(error)
    }
}

export default connectDB;