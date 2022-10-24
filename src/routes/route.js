import express from 'express'

let route = express.Router()

route.get('/test',(req,res)=>res.send({sucess:1,message:`Api fired`}))

export default route