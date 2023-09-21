import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const register = async ({ name, email, password, phoneNumber, address }) => {
    // Kiem tra su ton tai cua User
    const existingUser = await User.findOne({ email }).exec()
    if (existingUser != null)
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

const login = async ({ email, password }) => {
    // Kiem tra su ton tai cua User
    const existingUser = await User.findOne({ email }).exec()
    if (existingUser) {
        // So sánh password dùng đăng nhập với password của email đang đăng nhập
        const isMatch = await bcrypt.compare(password, existingUser.password)
        if (isMatch == true) {
            // Tạo ra 1 Access Token (JWT) -> Là key = header + payload + secret_key
            const token = jwt.sign({
                data: existingUser
            },
                process.env.SECRET_JWT_KEY
                , {
                    expiresIn: '2 days'
                })

            return {
                ...existingUser.toObject(),
                password: 'Not show',
                token: token
            }
        }else{
            throw new Error("Wrong email and password")
        }
    }else{
        throw new Error("User not exist")
    }
}

export default {
    register,
    login
}