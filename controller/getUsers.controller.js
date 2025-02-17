import User from "../models/user.models.js";
import verifyJwtToken from "../utils/verify.jwt.js";

const getUser = async (req, res) => {
    try {
    const token = req.cookies.token;
    if(!token) {
        return res.status(401).json({
            err: 'You are not authorised'
        })
    }
    let verify = verifyJwtToken(token);
    if(!verify.result) {
        return res.status(401).json({
            err: 'You are not authorised'
        })
    }

    const {email, username} = req.query;
    let conditions = []

    if(!email && !username) {

        return res.status(400).json({
            err: 'No Search Parameter Provided'
        })

    }
    if(email) {
        conditions.push({
            email
        })
    }
    if(username) {
        conditions.push({
            username
        })
    }

    let userdata = await User.findOne({ $or: conditions })
    if(!userdata) {
        return res.status(404).json({
            msg: 'No user found'
        })
    }
    console.log("RES : ", userdata)
    res.status(200).json(userdata)

    }
    catch(err) {
        console.error('GET USER ERROR : ', err)
        res.status(500).json({
            error: err.message
        })
    }
}

export default getUser;