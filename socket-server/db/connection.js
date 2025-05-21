const mongoose=require('mongoose')
const connectionString="mongodb+srv://chatapp:chatapp@cluster0.avvaeam.mongodb.net/chatapp?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB Atlas connected succesfully to server");
    
}).catch(errr=>{
    console.log(errr);
    
})