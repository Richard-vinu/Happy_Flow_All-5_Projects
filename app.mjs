import express, { json } from "express";
import multer from 'multer'
import dotenv from 'dotenv'
import connectDB from './src/database/db.js'
import route from './src/routes/route.js'
let app = express()

let upload = multer()

app.use(upload.any())

app.use(express.json())

dotenv.config()
let PORT = process.env.PORT

app.use('/',route)

connectDB()
app.listen(PORT,()=>console.log(`Server listining at PORT ${PORT}`))
