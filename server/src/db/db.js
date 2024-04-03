
import mongoose from "mongoose";
import {DB_Name} from "../constant.js"

const connectDB = async()=>{
    try{
        const moongoDBConnect = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        console.log(`Succesfully connected with DBS with ${moongoDBConnect.connection.host}`) 
    }catch(err){
        console.error("Fail to connect with mongodb", err);
        process.exit(1)
    }
}
export default connectDB;