// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"

// import connectDB from "./db/index.js";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path:'./env'
})



connectDB()
.then(()=>{

  app.on("error",(err)=>{
    console.log("err",err);
  });
  
  app.listen(process.env.PORT || 3000 , ()=>{
    console.log(`server is runnig at port : ${process.env.PORT}`);
   })
})
.catch((error)=>{
  console.log("mongo DB connect failed !!!",error);
})
















/* (fisrt approch):   for connection Database in backend ..used here efi techning to execute suddnely

import { express } from "express";
const app = express();
// mongoose.connect(`${process.env.}`)

// effi(emidiat execute ) concept
// ; this is used for clearninng purpose for line exit first 
;(async()=>{
    try {
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error", (error)=>{
        console.log("ERROR",error);
        throw error
      })

      app.listen(process.env.PORT , () =>{
        console.log(`app is listening on port ${process.env.PORT}`)
      })
    } catch (error) {
        console.error("ERROR" , error)
        throw error
    }
})()

*/