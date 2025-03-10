const mongoose=require('mongoose');
console.log("chl ra hai re ")
const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;
mongoose.connect('mongodb+srv://ayush:ayush%401335@cluster0.xcpea.mongodb.net/');
const userSchema= new Schema({
               email:{type:String,unique:true},
               password:{type:String,},
               firstName:String,
               lastName:String,
})
const adminSchema=new Schema({
               email:{type:String,unique:true},
               password:{type:String,},
               firstName:String,
               lastName:String,
})
const courseSchema=new Schema({
               title:String,
               description:String,
               price:Number,
               imageUrl:String,
               creatorId:ObjectId,
})
const purchaseSchema=new Schema({
               courseId:ObjectId,
               userId:ObjectId, 
})

const userModel=mongoose.model("user",userSchema);
const adminModel=mongoose.model("admin",adminSchema);
const courseModel=mongoose.model("course",courseSchema);
const purchaseModel=mongoose.model("purchese",purchaseSchema);

module.exports={
               userModel,
               adminModel,
               courseModel,
               purchaseModel
}