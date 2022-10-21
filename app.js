import  express from "express"
import  route from './src/route.js';
import db from '../Happy_Flow_All-5_Projects/src/DB/database.js'

import db from "./src/DB/database.js";
const app = express()
const PORT = 8080

db()

app.use('/test', (req,res)=>{

    res.send("hello people ❤💻❤")
})

app.use('/',route)



app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})
