import Product from '../models/Product.js'
import uploadFiles from '../aws.js'


const createProduct = async (req,res)=>{

    let data = req.body
    let files = req.files

   let imageLink = await uploadFiles(files[0])

    data.productImage = imageLink

    let product = await Product.create(data)

    res.status(200).send({message:'product created',data:product})
}




const getProducts = async (req,res)=>{

     let data = req.body
let page = data.page
let limit = data.limit
    let product = await Product.find( ).skip((page-1)*limit).limit(limit)

    res.status(200).send({message:'products',data:product})
}
export {createProduct,getProducts} 

