import mongoose from "mongoose";
import { DBNAME } from "../constants.js";

export default async function connectDB(MONGO_URI) {
    try {
       const conn = await mongoose.connect(`${MONGO_URI}/${DBNAME}`);
       console.log("MongoDB Connection: ",conn.connection.host) 
    }
    catch(err) {
        console.error('DATABASE CONNECTION ERROR: ', err)
    }
}