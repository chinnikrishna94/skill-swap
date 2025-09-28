import mysql2 from "mysql2/promise"
import  dotenv from "dotenv"

dotenv.config()

if (!process.env.DB_URL) {
  throw new Error("DB_URL environment variable is not defined");
}

const pool = mysql2.createPool({
  uri: process.env.DB_URL as string,
  connectionLimit: 10,
  waitForConnections: true,
});

export default pool