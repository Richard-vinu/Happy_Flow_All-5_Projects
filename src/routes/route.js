import express from 'express'

let route = express.Router()
import {userRegister,userLogin} from '../controllers/userController.js'

import {createProduct, getProducts} from '../controllers/productController.js'

import { createCart } from '../controllers/cartController.js'

route.get('/test',(req,res)=>res.send({sucess:1,message:`Api fired`}))

route.post('/user/signup',userRegister)

route.post('/user/login',userLogin)

route.post('/products',createProduct)

route.get('/products',getProducts)


route.post('/users/:userId/cart',createCart)


export default route