const asyncHandler = (requestHandler)=>{
    return (req,res,next)=>{
        Promise
        .resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
};
//HIGHER ORDER FUNCTION = this is a higher order fucntion in which we give a function and take a function in return 

export default asyncHandler;