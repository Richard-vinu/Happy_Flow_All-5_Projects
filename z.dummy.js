// // let data = {
// //     username:"richard",
// //     address:{
// //         street:"mg road",
// //         pincode:564106
// //     }
// // }


// // data.address = JSON.parse(data.address)

// //what is Json.parse?

// const json = '{ "fruit": "pineapple", "fingers": 10 }';
// // const obj = JSON.parse(json);
// // console.log(obj.fruit, obj.fingers);
// console.log(json.fruit, json.fingers);



// const createCart = async (req, res) => {
//     try {
//       const userId = req.params.userId;
//           const requestBody = req.body;
  
//           req.body.quantity = 1
  
//           const { productId ,quantity,cartId} = requestBody;
  
//           // if(!isValidObjectId(cartId))
//           // return res.status(400).send({ status: false, message: "invalid CartID" })
  
//         //  let  cartfound = await cartModel.findById(cartId)
//         //  if(!cartfound)
//         //  return res.status(400).send({ status: false, message: "no cart by this cart-id" })
  
   
//         if(quantity > '1')
//         return res.status(400).send({ status: false, message: "Quantity should be 1" })
          
  
  
//           let user = await cartModel.findById(userId)
      
  
//           const findProduct = await productModel.findOne({ _id: productId, isDeleted: false });
  
//           const findCartOfUser = await cartModel.findOne({ userId: userId });
  
//           if (!findCartOfUser) {
//               let cartData = {
//                   userId: userId,
//                   items: [
//                       {
//                           productId: productId,
//                           quantity: quantity,
//                       },
//                   ],
//                   totalPrice: findProduct.price * quantity,
//                   totalItems: 1,
                 
//               };
//               const createCart = await cartModel.create(cartData);
//               return res.status(201).send({ status: true, message: `Success`, data: createCart });
//           }
  
//   //if cart productID presernt in the cart/items 
//   //In this we just update a qunatity and its price
  
//           if (findCartOfUser) {
  
//         let Totalprice = findCartOfUser.totalPrice + req.body.quantity * findProduct.price;
  
//          let arr = findCartOfUser.items;
  
//               for (let i in arr) {
//                   if (arr[i].productId.toString() === productId) {
//                       arr[i].quantity += quantity;   //just increase the quantity
//                       //arr[i].quantity = arr[i].quantity + quantity
  
//                       let updatedCart = {
//                           items: arr,
//                           totalPrice: Totalprice,
//                           totalItems: arr.length,    //1
//                       };
  
//                       let responseData = await cartModel.findOneAndUpdate(
//                           { _id: findCartOfUser._id },  
//                           updatedCart,
//                           { new: true }
//                       ).populate('items.productId');
  
  
//                       return res.status(201).send({ status: true, message: `Success`, data: responseData });
//                   }
//               } 
  
//     //if productId is new just *push into the items and *add to total price and *add a total items BY 1
//               arr.push({ productId: productId, quantity: quantity });
  
//               let updatedCart = {
//                   items: arr,
//                   totalPrice: Totalprice,
//                   totalItems: arr.length,
//               };
  
//               let responseData = await cartModel.findOneAndUpdate({ _id: findCartOfUser._id }, updatedCart, { new: true });
//               return res.status(201).send({ status: true, message: `Success`, data: responseData });
//           }
  
//     } catch (err) {
//       res.status(500).send({ status: false, error: err.message })
//     }
  
//   }

let userStr = {"name":"Sammy","email":"sammy@example.com","plan":"Pro"}

//let userObj = JSON.parse(userStr);


let userObji = JSON.stringify(userStr   )
console.log(userObji);
