import express from "express"
import dotenv from 'dotenv'
import pool from "./utils/db"
dotenv.config()




const app = express()

const PORT = process.env.PORT  || 5000;



(async ()=>{
    try{
        await pool.connect().then(()=>{
            console.log("connected to db")
            app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
        })
    }catch(err){
        console.error("Failed to connect to db ",err)
    }
})()

