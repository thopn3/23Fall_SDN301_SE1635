import mongoose, {ObjectId, Schema} from "mongoose"

const Product = mongoose.model("Product", new Schema({
    id: ObjectId,
    name: {
        type: String,
        required: true,
        validate: {
            validator: value => value.length > 3,
            message: 'Length of name must be greater than 3 characters.'
        }
    },
    price: {
        type: Number,
        required: true,
        validate:{
            validator: value => value > 0,
            message: 'Price must be greater than 0'
        }
    },
    quantity:{
        type: Number,
        required: false
    },
    description:{
        type:String,
        required: false
    }
},
    {
        timestamps: true
    }
))

export default Product
