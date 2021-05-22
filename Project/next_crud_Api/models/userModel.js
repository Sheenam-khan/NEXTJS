const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
image:{
    data:Buffer,
    contentType:String
}
})

module.exports=mongoose.model('User',userSchema)

