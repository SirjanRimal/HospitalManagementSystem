const validationError=(next,validation)=>{
    next({
        message:'There was some validation  problem',
        status:442,
         validation,
    })
}
const errorMsg=(next, error)=>{
    console.log(error)
    if('code' in error && error.code==11000){
        validationError('The given email is already in use')

    }
    else if('errors' in error){
        for(let k in error.errors){
            validationError(next,{[k]: error.errors[k].message })

        }
    }
    else{
        next({
            message: 'Unable to process request',
            status:400,
        })
    }
}
const setNotFound=(next,name='Data')=>{
    next({
        message:`${name} not found`,
        status:404
    })

}
module.exports={validationError,errorMsg,setNotFound}