import express from "express";
import { Application } from "express";
import { env } from "../env.js";

// Routes


export function createServerApplication(): Application {
    const app = express()

    app.use(express.json())
    app.get('/',(req,res)=>{
        console.log(env.API_KEY)
       return res.status(200).json({message:'Hello ji kaise ho ?'})
    })



    return app
}