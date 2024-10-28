const {Schema} = require('mongoose')
const stringRequired ={type:String, required:true}
const numberRequired ={type:Number, required:true}
const boolTrue={type:Boolean,default:true}
const forenkeu= {type:Schema.Types.ObjectId,required:true}
const extraConfig={timestamps:true, autoCreate:true, autoIndex:true }
module.exports={ stringRequired,boolTrue,forenkeu ,numberRequired,extraConfig}