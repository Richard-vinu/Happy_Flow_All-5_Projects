import mongoose from 'mongoose'



const auhtorSchema = new mongoose.Schema({

    fname: {
        type:String,
        }, 
        lname: {
            type:String,
            
        }, 
        title: {
         type:String, 
         enum:["Mr", "Mrs", "Miss"]
        },
         email: {
            type:String,
             unique:true
            },
             password: {
                type:String,
               }
             },{timestamps:true}
)

exports = mongoose.model('author',auhtorSchema)