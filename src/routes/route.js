import express from 'express'

let route = express.Router()
import {userRegister,userLogin} from '../controllers/userController.js'

route.get('/test',(req,res)=>res.send({sucess:1,message:`Api fired`}))

route.post('/user/signup',userRegister)

route.post('/user/signin',userLogin)

export default route