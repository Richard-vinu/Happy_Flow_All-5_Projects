import express from "express";
let route = express.Router()

route.get('/test',(req,res)=>res.status(200).json({success:1,message:'api fired!...'}))


export default route