import mongoose from "mongoose";
// (username, password, full name, gender, date of birth, country) 

const userSchema = new mongoose.Schema({
    username: {
        required: true,
        unique: true,
        type: String
    },
    fullname: {
        required: true,
        type:String
    },
    email: {
        required: true,
        type: String
    },
    gender: {
        required:true,
        type:String,
        enum:['Male','Female', 'Other']
    },
    dob: {
        required: true,
        type:Date
    },
    country: {
        required:true, 
        type:String,
    },
    password: {
        required: true,
        type: String,
    }
},{timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;