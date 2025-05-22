const socket=require("socket.io")
const { saveMsg } = require("../controller/messageController")
const onlineUsers=[]
const addUser=(user,socketId)=>{
    const isExit=onlineUsers.findIndex((item) => item._id=== user._id)
    if(isExit!==-1){
        onlineUsers.splice(isExit,1)
    }
    user.socketId=socketId
    onlineUsers.push(user)
    console.log(user);
    
}
const removeUser=(socketId)=>{
     const isExit=onlineUsers.findIndex((item) => item.socketId=== socketId)
     if(isExit!==-1){
        onlineUsers.splice(isExit,1)
    }
};
const socketInit=(server)=>{
    const io=socket(server,{
        cors:{
            origin:"*",
            method:["GET","POST"],
            credentials: true
        }
    })
    // console.log("test",server);
    io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("ADD_USER",(user)=>{
    console.log(user);
    addUser(user,socket.id)
    io.emit("USER_ADDED",onlineUsers)
    
  })
  socket.on("SEND_MSG",(msg)=>{
    console.log(msg,"msg ffrom frontend ");
    saveMsg(msg)
    socket.to(msg.receiver?.socketId).emit("RECEIVED_MSG",msg)
    
  })
  socket.on("disconnect",()=>{
    console.log(socket.id,"disconnect");
    removeUser(socket.id)
    io.emit("USER_ADDED",onlineUsers)
    
  })
  
  
});
return io;

}
module.exports=socketInit