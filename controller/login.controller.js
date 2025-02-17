import User from "../models/user.models.js";
import createJwtToken from "../utils/sign.jwt.js";
import { verifyPassword } from "../utils/passwordUtils.bcrypt.js";

const login  = async (req, res) => {
    try {

    const { email, password } = req.body;
    if(!email || !password){
        res.status(400).json({
            err: 'All user information required'
        })
    return (0)
    }

    const userdata = await User.findOne({email})
    if(!userdata) {
        return res.status(401).json({
            msg: 'Wrong Email'
        })

    }
    const verify = await verifyPassword(password, userdata.password)
    if(!verify) {
        return res.status(401).json({
            msg : 'Invalid Credentials'
        })
    }

    console.log("DB RESP : ", userdata)
    if(verify) {
        
        const token = createJwtToken({
            username: userdata.username,
            email: userdata.email,
            password: userdata.password
        })
        res.cookie('token',token)

        return res.status(200).json({
            msg: 'Login Successfull',
            token,
            username: userdata.username,
            email: userdata.email,
        })

    }
       

    }
    catch(err){
        console.error("ERROR LOGIN",err)
        res.status(500).json({
            err: err.message
        })
    }


}

export default login;

