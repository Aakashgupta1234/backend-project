import {asyncHandler} from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async(req,res)=>{
   
    const{fullmame,email,username,password} = req.body

    console.log("email:",email);
    })


export {registerUser}