const {Router}=require('express');
const userRouter=Router();

/* ------------------------------ signup route ------------------------------ */
userRouter.post('/signup',function(req,res){

})

/* ------------------------------ signin route ------------------------------ */
userRouter.post('/signin',function(req,res){

})
/* -------------------------------- purchases ------------------------------- */
userRouter.get('/purchases',function(req,res){

})

module.exports={
               userRouter:userRouter
}