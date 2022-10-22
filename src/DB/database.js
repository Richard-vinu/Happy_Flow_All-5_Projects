import mongoose  from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

let db = async (req,res)=>{
try{
    mongoose.connect(process.env.MONGO_URI)

    console.log('MongoDB Connected...!');
}
catch(err){
    console.log(err);
}

}

export default db