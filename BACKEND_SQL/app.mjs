import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

let app = express()
let PORT = process.env.PORT


// app.use('/',route)

app.listen(PORT,()=>console.log(`server listing on ${PORT}`))



