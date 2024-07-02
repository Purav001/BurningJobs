import mongoose from 'mongoose'

async function dbConnect() {
    try{
        await mongoose.connect(process.env.MONGODB_URI!)
    } catch (erroe){
        throw new Error('Connection Failed!')
    }
}
export default dbConnect