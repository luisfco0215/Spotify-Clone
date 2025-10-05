import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Conected to Mongo DB ${conn.connection.host}`);
    } catch (error) {
        console.log("Failed to connect to Mongo DB", error);
        process.exit(1);
    }
}

export default connectDB