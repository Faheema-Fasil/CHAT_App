const {Router}=require('express')
const { getMessages } = require('../controller/messageController')
const router=Router()

router.get("/:id",getMessages)






module.exports=router