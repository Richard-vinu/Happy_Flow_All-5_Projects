import User from '../models/User.js'
import uploadFiles from '../aws.js'
import bcrypt from 'bcrypt'
import userModel from '../models/User.js'
import jwt from 'jsonwebtoken'
let sign = process.env.SIGNATURE

let userRegister = async (req,res)=>{
    try{
        let data = req.body
        let files = req.files
         
        let profileLink = await uploadFiles(files[0])
    
    
        data.profile = profileLink
    
        //JSON.parse() method to convert JSON String to  JS Object.
        data.address = JSON.parse(data.address)

   
        data.password = await bcrypt.hash(data.password,10)
       
    
        let createData = await User.create(data)
    
        res.status(201).send({status:true,data:createData})

    }
    catch(err){
        console.log(err);
    }
}


let userLogin  = async (req,res)=>{

    let data = req.body

    let user = await userModel.findOne({email:data.email})

    if(!user)
    return res.status(400).send('sign Up')

    data.password = bcrypt.compare(user.password,data.password)

    let payload = {
        userId :user._id
    }

    let token = jwt.sign(payload,sign)

    res.status(200).send({message:'login sucessfull',token:token})
   
}

export {userRegister,userLogin}