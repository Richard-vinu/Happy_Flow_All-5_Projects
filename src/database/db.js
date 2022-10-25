
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
let URI = process.env.MONGO_URI

let connectDB = async ()=>{
    try{
        mongoose.connect(URI)
        console.log('Mongobd connected');
    }
    catch(err){
        console.log(err.message);
    }
}
export default connectDB