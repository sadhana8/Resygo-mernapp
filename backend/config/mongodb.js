import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', ()=> {
        console.log("Connection secured");
    })
    await mongoose.connect(`${process.env.MONGO_URI}/menu`)
}

export default connectDB;