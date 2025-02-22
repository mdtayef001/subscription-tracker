import mongoose from "mongoose";

if (!process.env.DB_URL) {
  throw new Error("Please provide a valid MongoDB URL");
}

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
