const Message=require('../Model/messageModel')

exports.saveMsg=async(data)=>{
    console.log(data);
    try {
        
        const saveMsg=new Message(data)
        await saveMsg.save()
        return saveMsg;
    } catch (error) {
        res.status(400).send({msg:"inernal server error"})
    }
    
}
exports.getMessages=async(req,res)=>{
    const id=req.params.id
    try {
        
        if (!id) {
            return res.status(400).send({msg:"user id reqired"})
        }
        const allMsg=await Message.find({
            $or:[{"sender._id":id},{"receiver._id":id}]
        })
        return res.send({
            data:allMsg,
            msg:"allMsg"
        })
    } catch (error) {
        res.status(500).send({msg:"inernal server error"})

    }
}