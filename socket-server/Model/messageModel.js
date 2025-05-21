const mongoose=require('mongoose')

const messageSchema=new mongoose.Schema({
    msg:{
        type:String,
        require:true,
    },
    sender:{
        _id:{

            type: mongoose.Schema.Types.ObjectId,
            require:true
        },
        name:{
            type:String,
            require:true
        }
        ,
        email:{
            type:String,
            require:true
        }
    },
    receiver:{
        _id:{

            type: mongoose.Schema.Types.ObjectId,
            require:true
        },
        name:{
            type:String,
            require:true
        }
        ,
        email:{
            type:String,
            require:true
        }
    }
},
{timestamps:true})

module.exports=mongoose.model("Message",messageSchema)