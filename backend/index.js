import express from "express";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config();


const app= express();

app.use(cors());

const api_key = process.env.NASA_API

app.get("/space", async(req,res)=>{
   try{
    const date = req.query.date;
      const response = await fetch(
       
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`
      );

      const data = await response.json();
      res.json(data);

   }catch(err){
    res.status(500).json({message:err})
   }
})

app.listen(5000,()=>{
    console.log("server running on port 5000")
})
