import express from 'express'

let route = express.Router()
import {userRegister,userLogin} from '../controllers/userController.js'
import {createProduct, getProducts} from '../controllers/productController.js'
import { createCart } from '../controllers/cartController.js'
import { createOrders } from '../controllers/orderController.js'

route.get('/test',(req,res)=>res.send({sucess:1,message:`Api fired`}))

//user APis
route.post('/user/signup',userRegister)
route.post('/user/login',userLogin)

//product Apis
route.post('/products',createProduct)
route.get('/products',getProducts)

//cart Apis
route.post('/users/:userId/cart',createCart)

//order Apis
route.post('/users/:userId/orders',createOrders)


export default route