

import {Auhtor} from '../models/author'

const createAuhtor = async function(req,res){

 let body  = req.body
    
 let data = await Auhtor.create(body)

    res.json({status:true, msg:data})

}


const login = async (req,res)=>{

   let {...data} = req.body

   const validate = await Auhtor.findOne({email:email,password:password})

   payload = {
     auhtorId : validate._id
   }

   token = jwt.sign(payload, 'secret-key🤫🤫', { expiresIn: '1h' });

   res.json({data:token})
}

exports= {createAuhtor,login }