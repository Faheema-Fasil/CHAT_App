const express=require('express')
const http=require("http")
const cors=require('cors')
const userRouter=require('./Router/userRouter')
const messageRouter=require('./Router/messageRouter')
require('./db/connection')
const socket=require('./socket/socket')
const app = express(); 



app.use(cors())
app.use(express.json())

app.use('/api/user',userRouter)
app.use('/api/message',messageRouter)

const server = http.createServer(app);


app.use('/',(req,res)=>{
    res.json({msg:"hello "})
})
server.listen(5000,()=>{
    socket(server)
    console.log("5000");
    
});