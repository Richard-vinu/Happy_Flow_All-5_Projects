// import mongoose from 'mongoose'
// let URI = process.env.MONGO_URI
// let DB = async (req,res)=>{
// try {

//    await mongoose.connect(URI) 
//    console.log('MongoDb Connected...!!');

    
// } catch (error) {
//     console.error;
// }

// }

// export default DB
import mongodb from "mongodb"
let DB = async (req,res)=>{
   
    const uri = process.env.MONGO_URI
 

    const client = new mongodb.MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
       
        console.log('connected Db..');
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export default DB