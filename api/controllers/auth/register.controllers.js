const bcrypt=require('bcryptjs')
const {validationError,errorMsg}=require('../../lib/function')
const { Patient }=require('../../models')

class RegisterCtrl{
    register=async(req,res,next)=>{
        try{
const {name, email,password,confirmPassword,phone,address}=req.body
if (password == confirmPassword){
 const hashed = bcrypt.hashSync(password,10)
 await Patient.create({name,email,password:hashed,phone,address})
 res.status(201).send({
    message: 'Thank you for register'
 })
}
else{
   validationError(next,{
    password:'The password is not confirmed'
   })
}
}
catch(error){
   console.log(error)
  errorMsg(next,error)
}
}}

module.exports= new RegisterCtrl