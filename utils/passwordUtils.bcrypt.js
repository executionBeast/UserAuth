import bcrypt from 'bcrypt';

let saltRound = 10
export const hashPassword = async (plainPassword) => {
    try {
        const hashedPassword = await  bcrypt.hash(plainPassword, saltRound);
        // console.log("HASHED PASS : ", hashedPassword)
        return hashedPassword
    
    }
    catch(error) {
        console.error("PASSWORD HASH ERROR : ", error.message)
        throw error;
    }
}

export const verifyPassword = async (plainPassword, hashedPassword) => {  //hash <- db  pass <- req.body
    try {
        const verify = await bcrypt.compare(plainPassword, hashedPassword);
        if(verify) {
            console.log("Correct Password")
            return verify
        }
        if(!verify) {
            console.log("Incorrect Password")
            return verify
        }
    
    }
    catch(error) {
        console.error("PASSWORD VERIFY ERROR : ", error.message)
        throw error
    }
 }

// verifyPassword('$2b$10$PGg.hMxXh2ORXkHvc2FM3.H0Rz6Lk3o5B9g9ZwkPdPfGMyYpRJZEG', 'password')
