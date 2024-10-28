const bcrypt=require('bcryptjs')
const jwt =require('jsonwebtoken')
const { errorMsg, validationError } = require("../../lib/function")
const {Patient}=require('../../models')
class loginCtrl{
    login=async (req,res,next)=>{
        try{
            const {email,password}=req.body
            const patient=await Patient.findOne({email}).select('+password')
            if(patient){
                if(patient.status){

                
                if(bcrypt.compareSync(password,patient.password)){
                    const token =jwt.sign({
                        uid: patient._id,
                        iat: Math.floor(Date.now()/1000),
                        exp: Math.floor(Date.now()/1000)+30*24*60*60,

                    },process.env.JWT_SECRET)
                    res.send({token})

                }else{
                    validationError(next, {password:'Incorrect password'})
                }}
                else{
                    validationError(next,{email:'"Given email is not activated"'})
                }


            }
            else{
                validationError(next,{email:'"Given email is not registered"'})
            }

        }
        catch(error){
            errorMsg(next,error)

        }
        
    }
}
module.exports= new loginCtrl