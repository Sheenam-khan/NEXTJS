const express = require('express')
const router = express.Router()
const Employee=require('../models/employeeModel');
let ObjectID = require('mongoose').Types.ObjectId


router.get('/get', async(req, res) => {
 const employee=await Employee.find()
  return res.send(employee)
      
})

router.post('/add',async(req, res) => {
const values=req.body
console.log(req.body)
try{
const employee=await Employee.create(values)
  return res.send(employee)
}
catch(err){
  return res.send(err)
} 
})

router.put('/update/:id', async(req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id)

   const updatedRecord=req.body
  const employee= await Employee.findByIdAndUpdate(req.params.id, { $set: updatedRecord },{new:true} )
  return res.send(employee)
})

router.delete('/delete/:id',async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id)

  const employee= await Employee.findByIdAndRemove(req.params.id,{ useFindAndModify: false})
  return res.send(employee)    
})





module.exports = router

