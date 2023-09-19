import mongoose, {ObjectId, Schema} from "mongoose"
import isEmail from "validator/lib/isEmail"

const User = mongoose.model("User", new Schema({
    id: ObjectId,
    name: {
        type: String,
        required: true,
        validate: {
            validator: value => value.length > 3,
            message: 'Length of name must be greater than 3 characters.'
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: value => isEmail,
            message: 'Email is incorrect format.'
        }
    },
    phoneNumber:{
        type: String,
        required: true
    },
    address:{
        type:String,
        required: false
    }
}))

export default User
