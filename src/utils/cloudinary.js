import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({ 
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});

const uploadOncloudinary = async(localFilepath)=>{
    try{
        if(!localFilepath)return nuull
        //upolad the file on cloudinary
     const response =  await cloudinary.uploader.upload(localFilepath,{
            resource_type:"auto"
        })

        //file has been successfully

        console.log("file is uploaded on cloudinary",response.url);
        return response;
    }catch(error){
        fs.unlinkSync(localFilepath)
        return null

    }
}


export {uploadOncloudinary}