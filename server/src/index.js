import dotenv from "dotenv"
import connectDB from "./db/db.js"
import { app } from "./app.js"

dotenv.config({path:'./.env'})

connectDB()
.then(()=>{
  app.on('error',(error)=>{
    console.log("Error : ",error);
    throw error;
  })
  app.listen(process.env.PORT || 8000, ()=>{
      console.log(`Running server at PORT ${process.env.PORT}`)
  })
})
.catch((err)=>{
  console.log("Mongo db connection fail",err);
})