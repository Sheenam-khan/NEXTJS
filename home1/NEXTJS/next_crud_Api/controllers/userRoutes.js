const express = require('express')
const router = express.Router()
const User=require('../models/userModel');
let ObjectID = require('mongoose').Types.ObjectId


router.get('/get', async(req, res) => {
 const user=await User.find()
  return res.send(user)
      
})

router.post('/upload',async(req,res)=>{

  console.log("iimage",req.body)
  // const obj={
  //    name:"sheenam",
  //    image:req.body.data
  // }
  // const newUser=await User.create(obj)
     await User.deleteMany()
let Imagedata=new Buffer(req.body.data.split(',')[1],'base64')
const newUser=await User.create({name:'Seenam Bee',
image:{data:Imagedata,contentType:'image/png'}
})
 
return res.json("successFully added")
})
 

// router.post('/upload',async(req,res)=>{

//     console.log(req.body)
// let Imagedata=new Buffer(req.body.data.split(',')[1],'base64')
// const NextUser=await User.findOneAndUpdate({name:'Seenam Bee'},{image:{data:Imagedata,contentType:'image/png'}})

// console.log(NextUser)
// return res.send(NextUser)
// })


module.exports = router

