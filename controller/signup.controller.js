import User from "../models/user.models.js";
import { hashPassword } from "../utils/passwordUtils.bcrypt.js";
import {validateUser} from '../validation/userValidation.joi.js'

const signup = async (req, res) => {
    try {
    // const {username, fullname, email, gender, dob, country, password} = req.body;

    // if(!username || !fullname || !email || !gender || !dob || !country || !password){
    //     res.status(400).json({err: 'All user information required'})
    //     return(0)
    // }
    const {error, value} = validateUser(req.body)
    if(error) {
        return res.status(400).json({err: error.details})   
        
    }
    if(value) {

        const hashedPassword = await hashPassword(password); 
        let user = new User({
            username : username,
            fullname : fullname,
            email : email,
            gender : gender,
            dob: dob,
            country: country,
            password : hashedPassword

        })
        const userdata = await user.save();
        if(userdata){
            res.status(201).json({
                msg: 'Registration Successfull',
                userdata: userdata
        })

        }
    }
    


    }

    catch(err){
        console.error("ERROR SIGNUP: ", err)
        res.status(500).json({err: err.message})
    }
}


export default signup;