const jwt=require('jsonwebtoken')
const {Patient}=require('../models')
const multer = require('multer')
const auth=async(req,res,next)=>{
    try{
      if('authorization' in req.headers){
        const token = req.headers.authorization.split(' ').pop()
        const decoded =jwt.verify(token, process.env.JWT_SECRET)
        const patient= await Patient.findOne({_id: decoded.uid, status:true})
        if(patient){
            req.patient = patient
            next()
        }
        else{
            next({
                message:'Authorization token is invalid2',
                status: 401,
            })

        }
      }else{
        next({
            message:'Authorization token is missing',
            status: 401,
        })
      }
    }
    catch(error){
        next({
            message:'Authorization token is invalid',
            status: 401,
        })
            
    }
}
const DoctorOnly =(req,res,next)=> {
if(req.patient.role =='Patient'){
    next({
        message:'Access denied',
        status:403
    })
}
else{
    next()
}
}
const adminOnly =(req,res,next)=>{
    if(req.patient.role !='Admin'){
        next({
            message:'Access denied',
            status:403
        })
    }
    else{
        next()
    }}
    const upload = ()=>multer({
        storage: multer.diskStorage({
            destination:(req,file,cb)=>{
                cb(null,'./uploads')
            },
            filename: (req, file, cb)=>{
                const ext =file.originalname.split('.').pop()
                const filename = Date.now() + '-' + Math.round(Math.random() * 1E9)+`.${ext}`
                cb(null,filename)
            }
        }),
        fileFilter: (req,file,cb)=>{
            if(file.mimetype.startsWith('image/')){
                cb(null,true)
            }
            else{
                cb(new Error('File type not supported'))
            }
        }
        
    })
    const PatientOnly =(req,res,next)=>{
        if(req.patient.role !='Patient'){
            next({
                message:'Access denied',
                status:403
            })}}
module.exports={auth,DoctorOnly,adminOnly, upload, PatientOnly}