import User from "../models/User.js"
import bcrypt from 'bcrypt'

const register = async ({name, email, password, phoneNumber, address}) => {
    // Kiem tra su ton tai cua User
    const existingUser = await User.findOne({email}).exec()
    if(existingUser!=null)
        throw new Error('User already existing.')

    const hashPassword = await bcrypt.hash(password, parseInt(process.env.SECRET_KEY))
    // Goi User model de thao tac du lieu
    const newUser = await User.create({
        name,
        email,
        password: hashPassword,
        phoneNumber,
        address
    })
    return {
        ...newUser._doc,
        password: 'Not show'
    }
}

// Actions work DB: ....

export default {
    register
}