import  express from "express"

import  route from './src/route.js';
import  mongoose  from "mongoose"
const app = express()
const PORT = 8080


mongoose.connect("mongodb+srv://richardwork:2YLjcp0favzUASR9@cluster3.bli4t.mongodb.net/BookAssignment?retryWrites=true&w=majority")


app.use('/test', (req,res)=>{

    res.send("hell people")
})

app.use('/',route)



app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})
