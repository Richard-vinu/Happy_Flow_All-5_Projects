import mongoose, { model }  from "mongoose";

let userSchema = new mongoose.Schema({

    fname:{
        type:String,
        required:true
       },
       lname:{
        type:String,
        required:true
       },
       email:{
        type:String,
        required:true
       },
       password:{
        type:String,
        required:true
       },
       address: {
        shipping: {
          street: { type: String, required: true, trim:true },
          city: { type: String, required: true, trim:true },
          pincode: { type: Number, required: true, trim:true },
        },
        billing: {
          street: { type: String, required: true, trim:true },
          city: { type: String, required: true , trim:true},
          pincode: { type: Number, required: true, trim:true },
        },
      },

    profile:{
        type:String,
        required:true
}},{timestamps:true})


export default mongoose.model('User',userSchema)