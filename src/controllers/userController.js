import User from '../models/userModel.js'
import uploadFiles from '../aws.js'

let userRegister = async (req,res)=>{
    try{
        let data = req.body
        let files = req.files
         
        let profileLink = await uploadFiles(files[0])
    
        data.profile = profileLink
    
        //JSON.parse() method to convert JSON String to JSON Object.
        data.address = JSON.parse(data.address)
    
        console.log(data.address);
    
        let createData = await User.create(data)
    
        res.status(201).send({status:true,data:createData})

    }
    catch(err){
        console.log(err);
    }


}

export {userRegister}