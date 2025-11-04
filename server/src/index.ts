import express from "express"
import dotenv from 'dotenv'
import pool from "./utils/db"
import { RowDataPacket } from "mysql2/promise"
dotenv.config()




const app = express()

const PORT = process.env.PORT  || 5000;



// (async ()=>{
//     try{
//         console.log("coming1")
//         await pool.connect().then(()=>{
//             console.log("coming2")
//             pool.execute("select 1+1")
//             console.log("connected to db")
//             return
//             app.listen(PORT,()=>{
//                 console.log(`Server running on port ${PORT}`)
// })
//         })
//     }catch(err){
//         console.error("Failed to connect to db ",err)
//     }
// })()



(async () => {
  try {

    const [rows ] = await pool.execute<RowDataPacket[]>("SELECT 1 + 1 AS result");

    if (rows[0]) {
      console.log("DB connected successfully:", rows[0].result);
    } else {
      console.log("DB connected successfully, but no result returned.");
    }
    
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to DB:", err);
  }
})();