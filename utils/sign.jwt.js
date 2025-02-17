import { configDotenv } from "dotenv";
configDotenv({path: '../.env'})
import jwt from "jsonwebtoken";

export default function createJwtToken(payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    console.log("Token : ", token)
    return token

}
