import User from '../models/User.js'
import Cart from '../models/Cart.js'
import Order from '../models/Order.js'

let createOrders =async (req,res)=>{
    try{
        let data = req.body
        let userId = req.params.userId
        let user = await User.findById(userId)
        if(!user) return res.status(404).send({message:"user Not found"})

        let cart = await Cart.findById(req.body.cartId)

        if(!cart) return res.status(404).send({message:"Product Not found"})
        
        data.userId = userId
        data.items = cart.items
        data.totalPrice = cart.totalPrice
        data.totalItems = cart.totalItems
        data.totalQuantity = 0
        cart.items.map(x=>{data.totalQuantity+=x.quantity})

        let order = await Order.create(data)
    
        res.status(201).send({status:true,data:order})

    }
    catch(err){
        console.log(err);
    }
}


export {createOrders}
