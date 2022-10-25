import express from 'express'

let route = express.Router()
import {userRegister} from '../controllers/userController.js'

route.get('/test',(req,res)=>res.send({sucess:1,message:`Api fired`}))

route.post('/user/signup',userRegister)

export default route