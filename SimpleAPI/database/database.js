import mongoose from 'mongoose'

const ConnectDB = async () => {
    try {
        const connection = mongoose.connect(process.env.MONGO_URI)
        console.log("Connect DB successfully.");
        return connection
    } catch (error) {
        throw new Error("Connect DB failse.")
    }
}

export default ConnectDB