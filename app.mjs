import express from "express";
import dotenv from 'dotenv'
import DB from './src/database/db.js'
import route from './src/routes/route.js'
let app = express()
dotenv.config()
let PORT = process.env.PORT

app.use('/',route)

DB()
app.listen(PORT,()=>console.log(`Server listining on ${PORT}`))
