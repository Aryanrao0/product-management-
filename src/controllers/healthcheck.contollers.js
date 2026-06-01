import { json } from "express";
import { Apiresponse } from "../utils/api-response.js";
import asyncHandler from "../utils/async-handler.js";

// const healthCheck = async (req,res,next)=>{
//     try {
//         const user = await getUserFromDB()
//         res
//         .status(200)
//         .json(new Apiresponse(200, {message: "Server is running"}))
//     } catch (error) {
//         next(error)
//     }
// }

const healthCheck = asyncHandler(async (req,res)=>{
    res
    .status(200)
    .json(
        new Apiresponse(200, {message: "Server is running"})
    )
})

export {healthCheck}