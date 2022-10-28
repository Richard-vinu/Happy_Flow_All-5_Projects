import User from '../models/User.js'
import Cart from '../models/Cart.js'
import Product from '../models/Product.js'

let createCart = async (req,res)=>{
    try{
   
        let userId = req.params.userId

        let  productID = req.body.productId

        let quantity = req.body.quantity

       // let quantity = 1

        let user = await User.findById(userId)

        let product = await Product.findById(productID)  

        if(!user) return res.status(404).send({message:"user Not found"})

        if(!product) return res.status(404).send({message:"Product Not found"})

        let cart = await Cart.findOne({userId})

       
//Senario:1
//Creating a new cart for the User
        if(!cart){

            let newCart = {
                userId:userId,
                items:[
                        {
                            productId:product,
                            quantity:quantity
                        }
                     ],
                totalPrice:product.price,
                totalItems:quantity,
                totalQuantity:quantity
            } 

        let cart = await Cart.create(newCart)  
        return res.status(201).send({message:'Products added to cart',data:cart})
        
    }

//Senario:2
//Adding the same Product again ie increase the quantity and total Price
      
    if(cart){

        let arr = cart.items
        for (let i in arr){
          
            if(arr[i].productId.toString() === productID){
                arr[i].quantity = arr[i].quantity + quantity
             
            let updateCart = {
                items:arr,
                totalPrice:cart.totalPrice + quantity*product.price,
                totalItems:arr.length
            }
         
            let data = await Cart.findByIdAndUpdate({_id:cart._id},updateCart,{new:true})
            res.status(201).send({status:true,message:"product added to existing cart",data:data})
           }  
        } 

//Senario :3
//if the product is new 

    arr.push({productId:productID, quantity:req.body.quantity})

       let updateCart ={
        items: arr,
        totalPrice:cart.totalPrice + quantity*product.price,
        totalItems: arr.length,
       };
       
       let Data = await Cart.findByIdAndUpdate({ _id: cart._id }, updateCart, { new: true });
       return res.status(201).send({ status: true, message: `Success`, data: Data });
    
    
    }
        
    
}
    catch(err){
        res.status(500).send(err);
    }
}


export {createCart}