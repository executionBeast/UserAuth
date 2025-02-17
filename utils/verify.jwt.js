import { configDotenv } from "dotenv";
configDotenv({path: '../.env'})
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET

export default function verifyJwtToken(token) {
    const result = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Token Verifier : ", token)
    if(!result) {
        return {
            result:false,
            userdata : null
        }
    }
    return {
        result: true,
        userdata : result
    }
}




// let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpc2h3YXMiLCJlbWFpbCI6InZpc2h3YXNAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTY3OCIsImlhdCI6MTczOTYzOTE0NX0.lRGm9vvlAWiXWWASGcn3EvSeyCrd72cygG2KlvRHJ7Q'

// let result = jwt.verify(token, JWT_SECRET);
// console.log("VERIFY : ", result) 
// // returns original data {
//     //     username: 'vishwas',
//     //     email: 'vishwas@gmail.com',
//     //     password: '12345678',
//     //     iat: 1739639145
//     // }
// //so it acts like a storage to securely store auth data and verify user 
// //removes burden of making db call to verify user authentication
