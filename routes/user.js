const bcrypt = require('bcrypt');
const {Router}=require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET="ayush";
const { userModel } = require('../db');
const userRouter=Router();



function auth(req,res){
               
}
/* ------------------------------ signup route ------------------------------ */
userRouter.post('/signup',async function(req,res){
               const email=req.body.email;
               const password=req.body.password;
               const firstName=req.body.firstName;
               const lastName=req.body.lastName;
               const hashPassword= await bcrypt.hash(password,4);
               //add user to db
               userModel.create({
                               email:email,
                               password:hashPassword,
                               firstName:firstName,
                               lastName:lastName,
               
               })

               
})

/* ------------------------------ signin route ------------------------------ */
userRouter.post('/signin',async function(req,res){
               const email=req.body.email;
               const password=req.body.password;
               const match=await userModel.findOne({email:email});
               if(match){
                               const matchPassword= await bcrypt.compare(password,match.password);
                               if(matchPassword){
                                                          const token=jwt.sign({id:match._id.toString},JWT_SECRET);
                                                          res.json({message:'Logged in successfully',token:token})

                               }else{
                                                          res.json({message:'Invalid password'})
                               }
               }
               else{
                              res.json({message:'User not found'})
               }
})
/* -------------------------------- purchases ------------------------------- */
userRouter.get('/purchases',function(req,res){

})

module.exports={
               userRouter:userRouter
}