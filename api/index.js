const bodyParser = require('body-parser');


require("module-alias/register")
const express=require('express')
const cors=require('cors')
const routes=require('./routes')
const { config }=require('dotenv')
const mongoose=require('mongoose')


config()
const port=process.env.PORT || 6000
const mongoUrl=process.env.MONGO_URL 
// const router=Router()
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api",routes)
app.use((req,res,next)=>{
    next({
        message:'Resource not found',
        status:404,
         })

})
app.use((error,req,res,next)=>
{
    res.status(error.status || 400)
    .send({
        message:error.message || 'something went wrong',
        validation:error.validation,

    })
})
app.listen(port,async ()=>{
    console.log(`server started at http://localhost:${port}`)
    console.log('press ctrl+c to stop')
    await mongoose.connect(mongoUrl)
    console.log('MongoDB Connected:')
  

})