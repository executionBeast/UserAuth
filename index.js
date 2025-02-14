import express from "express"
import { configDotenv } from "dotenv"
import connectDB from "./database/connection.js"

configDotenv({path:'.env'})
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
connectDB(MONGO_URI)

const app = express()

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})

