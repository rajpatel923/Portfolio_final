import {vs as cloudinary} from "cloudinary"
import fs from 'fs'

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_API_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const upLoadFileOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath){
            return null
        }
        const fileURL = cloudinary.uploader.upload(localFilePath, resource_type = 'auto')
        fs.unlinkSync(localFilePath);
        return fileURL;
    } catch (error) {
        fs.unlink(localFilePath);
        return null;
    }
}

export {upLoadFileOnCloudinary}