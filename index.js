import express from "express"
import { configDotenv } from "dotenv"
import connectDB from "./database/connection.js"
import router from "./routes/routes.js"
import cookieParser from "cookie-parser";

const app = express()

configDotenv({path:'.env'})
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
connectDB(MONGO_URI)

app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.get('/',(req,res)=>{
    res.send("hello")
})

app.use('/api', router)

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})

