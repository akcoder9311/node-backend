const asyncHandler = (requestHandler)=>{
    (res,req,next)=>{
        Promise.resolve(res,req,next).catch((err)=>next(err))
    }
 }


// export {asyncHandler}


//steps to make highr order function
// const asyncHandler =()=>{}
// const asyncHandler = (func)=>{}
// const asyncHandler = (func) => {async()=>{} }
// const asyncHandler = (func)=>async ()=>{}


/*const asyncHandler = (fn)=> async (req,res,next)=>{
    try {
        await fun(res,req,next)
        
    } catch (error) {
        res.status(err.code || 5000).json({
            success:false,
            message:err.message
        })
    }
}*/