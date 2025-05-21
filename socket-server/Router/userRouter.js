const {Router}=require('express')
const router=Router()
const { register, loginUser } =require ('../controller/userContoller')
router.post("/register",register)
router.post("/login",loginUser)





module.exports=router