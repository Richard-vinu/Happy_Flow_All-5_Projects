import express from 'express'
import dotenv from 'dotenv'
import db from './src/DB/database.js'
import route from './src/routes/route.js'
dotenv.config()
db();

let app = express()
let PORT = process.env.PORT


app.use('/',route)

app.listen(PORT,()=>console.log(`server listing on ${PORT}`))



